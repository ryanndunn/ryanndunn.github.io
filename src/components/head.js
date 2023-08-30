import * as React from 'react'
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
            <li><Link to="https://www.linkedin.com/in/ryan-dunn-2801aa13/" target="_blank"><i class="fa-brands fa-linkedin"></i></Link></li>
            <li><Link to="https://github.com/ryanndunn" target="_blank"><i class="fa-brands fa-square-github"></i></Link></li>
            <li><Link to="mailto:rdunn32789@gmail.com"><i class="fa-solid fa-envelope"></i></Link></li>
        </ul>
      </div>
    </header>
  )

}

export default Head