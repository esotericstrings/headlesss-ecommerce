import React from 'react'

import SEO from '~/components/seo'
import BlogFeed from '~/components/BlogFeed'
import { StaticQuery, graphql } from 'gatsby'

const BLOG_QUERY =  graphql`
query BlogQuery {
  allShopifyArticle(filter: {blog: {title: {eq: "News"}}}) {
    edges {
      node {
        title
        content
        publishedAt
        excerpt
        excerptHtml
        url
        image {
          localFile {
            childImageSharp {
              fluid {
                sizes
                src
                srcSet
                srcSetWebp
                srcWebp
                tracedSVG
              }
            }
          }
        }
      }
    }
  }
}
`

const Blog = props => {
  const {
    pageContext: { node },
  } = props
	return(
    <StaticQuery
      query={BLOG_QUERY}
      render={data => {
        const articles = data.allShopifyArticle.edges.reverse()
        return (
          <>
          <div class="blog-template" data-section-id={ node.id } data-section-type="blog-template">
            <SEO title={node.title} keywords={[`gatsby`, `application`, `react`]} />
            <div class="page-width">
                <header class="section-header section-header--small text-center">
                  <h1 class="section-header__title h2">{node.title}</h1>
                </header>
                <BlogFeed articles={articles}/>
            </div>
          </div>
          </>
      )
    }}
  />
  )}

export default Blog