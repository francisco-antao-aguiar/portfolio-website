import React from 'react'
import './Header.css'

function Header() {
  return (
    <header>
        <nav className="navbar">
          <a href="#" className="navbar-brand">
            Portfolio
          </a>
          <ul className="navbar-nav">
            <li>
              <a href="#introduction">Introduction</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#about-me">About Me</a>
            </li>
          </ul>
        </nav>
      </header>
  )
}

export default Header