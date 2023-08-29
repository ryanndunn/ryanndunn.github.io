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
            <Link to="/">Resume</Link>
        </li>
      </ul>
    </nav>
  )

}

export default Nav