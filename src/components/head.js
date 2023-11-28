import * as React from 'react'
import "../styles/style.scss";

import { Link } from 'gatsby'
import logo from "../images/logo.svg"

const Head = () => {

  return (
    <header>
      <div className="logo">
        <Link to="/">
            <img
                alt="Ryan Dunn Web Developer"
                src={logo}
            />
        </Link>
      </div>
      <div className="social">
        <ul>
            <li><a href="https://www.linkedin.com/in/ryan-dunn-2801aa13/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fa-brands fa-linkedin"></i></a></li>
            <li><a href="https://github.com/ryanndunn" target="_blank" rel="noreferrer" aria-label="GitHub"><i className="fa-brands fa-square-github"></i></a></li>
            <li><a href="mailto:rdunn32789@gmail.com" aria-label="Email"><i className="fa-solid fa-envelope"></i></a></li>
        </ul>
      </div>
    </header>
  )

}

export default Head