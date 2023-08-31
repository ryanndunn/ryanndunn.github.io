import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Seo = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
        <title>{title} | {data.site.siteMetadata.title}</title>
        <script src="https://kit.fontawesome.com/26870a12cb.js" crossOrigin="anonymous"></script>
    </>
  )
}

export default Seo