import * as React from 'react'
import Head from './head'
import Nav from './nav'

const Layout = ({ children }) => {
    return (
        <div>
          <Head/>
          <main>
            {children}
          </main>
          <Nav/>
        </div>
      )
}

export default Layout