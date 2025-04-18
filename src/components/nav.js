import * as React from 'react'
import { Link } from 'gatsby'

const Nav = () => {

  return (
    <nav>
      <ul>
        <li>
            <Link to="/work">Work</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <a href={'/Ryan_Dunn_Dev_Resume.pdf'} target="_blank" rel="noreferrer">Resume</a>
        </li>
      </ul>
    </nav>
  )

}

export default Nav