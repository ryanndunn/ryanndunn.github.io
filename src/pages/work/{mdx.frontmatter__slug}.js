import * as React from 'react'

import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const WorkPost = ({ data, children }) => {
  return (
    <Layout pageContainerClass="page--work-single">
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