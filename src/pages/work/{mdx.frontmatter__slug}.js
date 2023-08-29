import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'

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

export default WorkPost