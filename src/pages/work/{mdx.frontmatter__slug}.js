import * as React from 'react'
import "../../styles/portfolio-single.scss";

import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const WorkPost = ({ data, children }) => {
  return (
    <Layout>
      <h1>{data.mdx.frontmatter.title}</h1>
      {children}
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
      }
    }
  }`

export const Head = () => <Seo title="Portfolio Single" />
export default WorkPost