import { useState, useEffect } from 'react'

export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('portfolio-theme')
    return savedTheme || 'dark'
  })

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('portfolio-theme', newTheme)
    localStorage.setItem('portfolio-btn-theme', newTheme === 'dark' ? 'fa-sun' : 'fa-moon')
  }

  return { theme, toggleTheme }
}
