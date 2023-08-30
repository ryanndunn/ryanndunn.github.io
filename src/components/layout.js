import * as React from 'react'
import Head from './head'
import Nav from './nav'
import { StaticImage } from 'gatsby-plugin-image'

const Layout = ({ children }) => {
    return (
        <div>
        <StaticImage
          className="bg-img"
          src="../images/rd-bg.png"
        />
          <Head/>
            <main>
                {children}
            </main>
          <Nav/>
        </div>
      )
}

export default Layout