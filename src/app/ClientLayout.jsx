"use client"
import { useTheme } from '../ThemeContext';
import { useEffect } from 'react';

export default function ClientLayout({ children }) {
  const { darkMode } = useTheme();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return <>{children}</>;
}