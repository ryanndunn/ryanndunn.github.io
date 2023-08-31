import * as React from 'react'
import "../styles/style.scss";

import Layout from '../components/layout'
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'


const IndexPage = () => {
  return (
    <Layout pageContainerClass="page--home">
      <StaticImage
          className="rd-photo"
          src="../images/rd-photo.png"
          placeholder="none"
          alt="Ryan Dunn's Photo"
        />
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />
export default IndexPage