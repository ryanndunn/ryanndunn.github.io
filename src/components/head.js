import * as React from 'react'
import { Link } from 'gatsby'

const Head = () => {

  return (
    <header>
      <div className="logo"><Link to="/">Ryan Dunn</Link></div>
      <div className="social">
        <ul>
            <li><Link to="/">linkedIn</Link></li>
            <li><Link to="/">github</Link></li>
            <li><Link to="/">email</Link></li>
        </ul>
      </div>
    </header>
  )

}

export default Head