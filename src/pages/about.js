import * as React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <Layout pageContainerClass="page--about">
      <div className="page--content">
        <h1>About Me</h1>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="About" />
export default AboutPage