import * as React from 'react'
import "../../styles/portfolio-archive.scss";

import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const WorkPage = ({ data }) => {
  return (
    <Layout>
      <ul>
        {
            data.allMdx.nodes.map((node) => (
                <div key={node.id}>
                    <h2>
                      <Link to={`/work/${node.frontmatter.slug}`}>{node.frontmatter.title}</Link>
                    </h2>
                    <p>{node.excerpt}</p>
                </div>
            ))
        }
      </ul>
    </Layout>
  )
}

export const query = graphql`
query MyQuery {
    allMdx {
      nodes {
        frontmatter {
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="Portfolio Archive" />
export default WorkPage