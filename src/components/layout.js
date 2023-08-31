import * as React from 'react'
import Head from './head'
import Nav from './nav'
import { StaticImage } from 'gatsby-plugin-image'

const Layout = ({ children, pageContainerClass }) => {
    return (
        <div className={pageContainerClass}>
        <StaticImage
          className="bg-img"
          src="../images/rd-bg.png"
          alt="Background Image for Ryan Dunn Portfolio Site"
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