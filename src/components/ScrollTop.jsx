import { useState, useEffect } from 'react'

const ScrollTop = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const editorText = document.querySelector('.editor-text')
    if (!editorText) return

    const handleScroll = () => {
      if (editorText.scrollTop > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    editorText.addEventListener('scroll', handleScroll)
    return () => editorText.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    const editorText = document.querySelector('.editor-text')
    if (editorText) {
      editorText.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }

  if (!showScrollTop) return null

  return (
    <div className="scroll-container">
      <div className="scroll-top" onClick={scrollToTop} role="button" tabIndex={0} aria-label="Scroll to top">
        <i aria-hidden="true" className="fas fa-arrow-up"></i>
      </div>
    </div>
  )
}

export default ScrollTop
