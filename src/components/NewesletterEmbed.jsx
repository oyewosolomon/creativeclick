'use client';

import React, { useEffect, useRef, useState } from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from '../components/ui/alert';

const NewsletterEmbed = ({
  username,
  baseUrl = 'https://briefbrew.com',
  styles = {},
  className = '',
  onSubscribe,
}) => {
  const iframeRef = useRef(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [result, setResult] = useState(null);

  const createStyleString = (styles) => {
    let cssString = '';
    
    if (styles.input) {
      cssString += `
        #email {
          ${Object.entries(styles.input)
            .map(([prop, value]) => `${prop}: ${value};`)
            .join('\n')}
        }
      `;
    }
    
    if (styles.button) {
      cssString += `
        #subscribe {
          ${Object.entries(styles.button)
            .map(([prop, value]) => `${prop}: ${value};`)
            .join('\n')}
        }
      `;
    }

    if (styles.container) {
      cssString += `
        .container {
          ${Object.entries(styles.container)
            .map(([prop, value]) => `${prop}: ${value};`)
            .join('\n')}
        }
      `;
    }
    
    return cssString;
  };

  const applyStyles = () => {
    if (iframeRef.current && iframeLoaded) {
      const message = {
        type: 'APPLY_STYLES',
        styles: createStyleString(styles)
      };
      iframeRef.current.contentWindow.postMessage(message, baseUrl);
    }
  };

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.origin !== baseUrl) return;

      if (event.data.type === 'SUBSCRIPTION_RESULT') {
        setResult(event.data);
        if (onSubscribe) {
          onSubscribe(event.data);
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [baseUrl, onSubscribe]);

  useEffect(() => {
    applyStyles();
  }, [styles, iframeLoaded]);

  return (
    <div className={className}>
      {result && (
        <Alert className="mb-4" variant={result.success ? "default" : "destructive"}>
          <div className="flex items-center gap-2">
            {result.success ? <CheckCircle className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
            <AlertTitle>
              {result.success ? "Success" : "Error"}
            </AlertTitle>
          </div>
          <AlertDescription>{result.message}</AlertDescription>
        </Alert>
      )}
      
      <iframe
        ref={iframeRef}
        src={`${baseUrl}/${username}/subscribe/embed`}
        className="w-full border-0"
        style={{ height: '400px' }}
        onLoad={() => setIframeLoaded(true)}
      />
    </div>
  );
};

export default NewsletterEmbed;