import * as React from 'react'

import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import PageHead from '../../components/page-head'
import Seo from '../../components/seo'

const WorkPost = ({ data, children }) => {
  return (
    <Layout pageContainerClass="page--work-single">

      <PageHead img={data.mdx.frontmatter.featured_image} title={data.mdx.frontmatter.title} />
      
      <div className="page--content">
        {children}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        featured_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }`

export const Head = () => <Seo title="Portfolio Single" />
export default WorkPost