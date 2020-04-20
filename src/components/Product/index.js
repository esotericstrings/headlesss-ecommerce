import React, { useContext } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import StoreContext from '~/context/StoreContext'
import { Img } from '~/utils/styles'

const ProductGrid = () => {
  const { store: {checkout} } = useContext(StoreContext)
  const { allShopifyProduct } = useStaticQuery(
    graphql`
      query {
        allShopifyProduct(
          sort: {
            fields: [createdAt]
            order: DESC
          }
        ) {
          edges {
            node {
              id
              title
              handle
              createdAt
              images {
                id
                originalSrc
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 910) {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                }
              }
              availableForSale
              variants {
                price
                presentmentPrices {
                  edges {
                    node {
                      compareAtPrice {
                        amount
                      }
                      price {
                        amount
                      }
                    }
                  }
                }
              }
              vendor
            }
          }
        }
      }
    `
  )

  const getPrice = price => Intl.NumberFormat(undefined, {
    currency: checkout.currencyCode ? checkout.currencyCode : 'EUR',
    minimumFractionDigits: 2,
    style: 'currency',
  }).format(parseFloat(price ? price : 0))

  return (
    <div className="card-list grid">
      { allShopifyProduct.edges
        ? allShopifyProduct.edges.map(({ node: { id, handle, title, vendor, availableForSale, images: [firstImage], variants: [firstVariant] } }) => (
          <div className="card-list__column grid grid__item medium-up--one-half">
          <Product key={id} className="card critical-clear has-animated card--reveal">
            <Link to={`/product/${handle}/`} className="card__wrapper text-center">
              {firstImage && firstImage.localFile &&
                (<Img className="card__image fade-in lazyautosizes lazyloaded"
                  fluid={firstImage.localFile.childImageSharp.fluid}
                  alt={handle}
                />)}
              <div className="card__info">
                <div className="card__brand">{vendor}</div>
                <h3 className="card__name h4">{title}</h3>

                { availableForSale ? 
                  <span className="card__price">{getPrice(firstVariant.price)}</span>
                  :
                  <div class="card__availability">Sold Out</div>  
                }
                
              </div>
            </Link>
          </Product>
          </div>
        ))
        : <p>No Products found!</p>}
    </div>
  )
}

export default ProductGrid
