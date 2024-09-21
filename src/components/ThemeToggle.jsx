'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null
 
  return (
    <button
      className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
      onClick={() => {setTheme(theme === 'dark' ? 'light' : 'dark'); alert(mounted)}}
    >
      {theme === 'dark' ? 'Light' : 'Dark'} Mode
    </button>
  )
}