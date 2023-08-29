import * as React from 'react'
import "../styles/home.scss";

import Layout from '../components/layout'
import Seo from '../components/seo'


const IndexPage = () => {
  return (
    <Layout>
      <h1>Home Page</h1>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />
export default IndexPage