import { useState } from 'react'
import { useTheme } from '../hooks/useTheme'

const Header = () => {
  const { theme, toggleTheme } = useTheme()
  const [isNavOpen, setIsNavOpen] = useState(false)

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  const themeIcon = theme === 'dark' ? 'fa-sun' : 'fa-moon'
  const hamburgerIcon = isNavOpen ? 'fa-times' : 'fa-bars'

  return (
    <header className="header center">
      <h3>
        <a href="https://zwe-lwin-00.github.io/zwelwinoo.github.io/" className="link">
          Zwe
        </a>
      </h3>

      <nav className="nav center">
        <ul className={`nav__list center ${isNavOpen ? 'display-nav-list' : ''}`}>
          <li className="nav__list-item">
            <a className="link link--nav" href="#educations" onClick={() => setIsNavOpen(false)}>
              Educations
            </a>
          </li>
          <li className="nav__list-item">
            <a className="link link--nav" href="#experiences" onClick={() => setIsNavOpen(false)}>
              Experiences
            </a>
          </li>
          <li className="nav__list-item">
            <a className="link link--nav" href="#skills" onClick={() => setIsNavOpen(false)}>
              Skills
            </a>
          </li>
          <li className="nav__list-item">
            <a className="link link--nav" href="#contact" onClick={() => setIsNavOpen(false)}>
              Contact
            </a>
          </li>
        </ul>

        <button
          type="button"
          aria-label="toggle theme"
          className="btn btn--icon"
          onClick={toggleTheme}
        >
          <i aria-hidden="true" className={`fas ${themeIcon}`}></i>
        </button>

        <button
          type="button"
          aria-label="toggle navigation"
          className="btn btn--icon nav__hamburger"
          onClick={toggleNav}
        >
          <i aria-hidden="true" className={`fas ${hamburgerIcon}`}></i>
        </button>
      </nav>
    </header>
  )
}

export default Header
