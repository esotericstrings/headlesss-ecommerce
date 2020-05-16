const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const shopifyUrl = 'https://headless-dev-store.myshopify.com'
  return graphql(`
    {
      allShopifyProduct {
        edges {
          node {
            handle
          }
        }
      }
      allShopifyPage {
        edges {
          node {
            handle
            title
            body
          }
        }
      }
      allShopifyShopPolicy {
        edges {
          node {
            title
            body
          }
        }
      }
      allShopifyCollection {
        nodes {
          handle
          title
          products {
            handle
            id
            availableForSale
            title
            vendor
            variants {
              price
              compareAtPrice
            }
            images {
              id
              originalSrc
              localFile {
                childImageSharp {
                  fluid(maxWidth: 910) {
                    aspectRatio
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
      allShopifyBlog {
        edges {
          node {
            title
          }
        }
      }
      allShopifyArticle {
        edges {
          node {
            title
            content
            contentHtml
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
  `).then(result => {

    result.data.allShopifyProduct.edges.forEach(({ node }) => {
      createPage({
        path: `/product/${node.handle}/`,
        component: path.resolve(`./src/templates/ProductPage/index.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          handle: node.handle,
          node
        },
      })
    }),
  

  result.data.allShopifyPage.edges.forEach(({ node }) => {
    createPage({
      path: `/pages/${node.handle}/`,
      component: path.resolve(`./src/templates/Page/index.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        handle: node.handle,
        node
      },
    })
    console.log('/pages/');
    console.log(node.handle);
  }),

  result.data.allShopifyCollection.nodes.forEach(( node ) => {
    createPage({
      path: `/collections/${node.handle}/`,
      component: path.resolve(`./src/templates/Collection/index.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        handle: node.handle,
        node
      },
    })
    console.log('/collections/');
    console.log(node.handle);
  })

  result.data.allShopifyShopPolicy.edges.forEach(({ node }) => {
    handle = node.title.replace(/\s+/g, '-').toLowerCase();
    createPage({
      path: `/policies/${handle}/`,
      component: path.resolve(`./src/templates/Policy/index.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        handle: handle,
        node
      },
    })
    console.log('/policies/');
    console.log(handle);
  })

  result.data.allShopifyBlog.edges.forEach(({ node }) => {
    handle = node.title.replace(/\s+/g, '-').toLowerCase();
    createPage({
      path: `/blog/${handle}/`,
      component: path.resolve(`./src/templates/Blog/index.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        handle: handle,
        node
      },
    })
    console.log('/blog/');
    console.log(handle);
  })

  result.data.allShopifyArticle.edges.forEach(({ node }) => {
    handle = node.url.replace(shopifyUrl, '').toLowerCase();
    createPage({
      path: `${handle}/`,
      component: path.resolve(`./src/templates/BlogPost/index.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        handle: handle,
        node
      },
    })
    console.log(handle);
  })
  
})}