import React, { useContext } from 'react'
import { graphql, Link } from 'gatsby'

import SEO from '~/components/seo'
import ProductForm from '~/components/ProductForm'
import {
  Img,
} from '~/utils/styles'
import {
  ProductDescription
} from './styles'
import StoreContext from '~/context/StoreContext'

const ProductPage = ({ data }) => {
  const product = data.shopifyProduct
  const { store: {checkout} } = useContext(StoreContext)
  const getPrice = price => Intl.NumberFormat(undefined, {
    currency: checkout.currencyCode ? checkout.currencyCode : 'EUR',
    minimumFractionDigits: 2,
    style: 'currency',
  }).format(parseFloat(price ? price : 0))

  return (
    <>
    <div className="page-width page-width--no-gutter">
      <SEO title={product.title} description={product.description} />
          <div className="product__media-container" style={{maxWidth: 872}} data-media-id="product-template-6390886629428" data-variant-media-toggle-hide="">
          <a href="//cdn.shopify.com/s/files/1/0282/3507/1540/products/InSitu-3_2048x_d5235a90-ddd8-4b12-8903-246fc8c23ff6.png?v=1587100149" className="product__media-wrapper" data-product-slideshow-open="" data-media-id="product-template-6390886629428">
            {product.images.map(image => (
              <Img
                className="product__media-preview-image lazyautosizes ls-is-cached lazyloaded"
                fluid={image.localFile.childImageSharp.fluid}
                key={image.id}
                alt={product.title}
              />
            ))}
          </a>
        </div>
        <div className="product__content page-width">
    <div className="grid">
      <div className="grid__item medium-up--push-one-twelfth medium-up--ten-twelfths">
        <div className="product__content-header">
            <h1 className="product__title h2 text-center" itemprop="name">{product.title}</h1>
            { (product.availableForSale && product.variants[0].compareAtPrice ) ? 
                <p class="product__price text-center product__price--sale" data-product-price="" aria-live="polite">
                  <span class="product__sale-price-label visually-hidden">Sale price</span>
                  <span class="product__regular-price-label visually-hidden">Price</span>
                  <span class="product__current-price" data-regular-price="">{getPrice(product.variants[0].price)}</span>
                  <span class="product__compare-price-label visually-hidden">Regular price</span>
                  <s class="product__compare-price" data-compare-price="">{getPrice(product.variants[0].compareAtPrice)}</s>
                  <span class="product-price-unit product-price-unit--unavailable " data-unit-price-container=""><span class="visually-hidden">Unit price</span>
                  <span data-unit-price=""></span><span aria-hidden="true">/</span><span class="visually-hidden">&nbsp;per&nbsp;</span><span data-unit-price-base-unit="">
                  </span></span>
                </p>
                :
                (product.availableForSale) ?
                  <p class="product__price text-center" data-product-price="" aria-live="polite">
                    <span class="product__sale-price-label visually-hidden">Sale price</span>
                    <span class="product__regular-price-label visually-hidden">Price</span>
                    <span class="product__current-price" data-regular-price="">{getPrice(product.variants[0].price)}</span>
                    <span class="product__compare-price-label visually-hidden">Regular price</span>
                    <s class="product__compare-price" data-compare-price=""></s>
                    <span class="product-price-unit product-price-unit--unavailable " data-unit-price-container=""><span class="visually-hidden">Unit price</span>
                    <span data-unit-price=""></span><span aria-hidden="true">/</span><span class="visually-hidden">&nbsp;per&nbsp;</span><span data-unit-price-base-unit="">
                    </span></span>
                  </p>
                :
                <p class="product__price text-center product__price--sale" data-product-price="" aria-live="polite">
                  <div class="card__availability">Sold Out</div>
                  <span class="product-price-unit product-price-unit--unavailable " data-unit-price-container="">
                      <span class="visually-hidden">Unit price</span>
                      <span data-unit-price=""></span>
                      <span aria-hidden="true">/</span>
                      <span class="visually-hidden">&nbsp;per&nbsp;</span>
                      <span data-unit-price-base-unit=""></span>
                  </span>
                </p> 
            }


          <span className="product-price-unit product-price-unit--unavailable " data-unit-price-container="">
            <span className="visually-hidden">Unit price</span>
            <span data-unit-price=""></span>
            <span aria-hidden="true">/</span>
            <span className="visually-hidden">&nbsp;per&nbsp;</span>
            <span data-unit-price-base-unit=""></span>
          </span>
          <div className="product__policies rte">
            <Link to="/policies/shipping-policy">Shipping</Link> calculated at checkout.
          </div>
        </div>

        <div className="product__content-main">
            <div className="product__description rte"
              dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
              <div className="product__form-container" itemprop="offers" itemscope="" itemtype="http://schema.org/Offer">
                  <div className="product__form-wrapper">
                      <ProductForm product={product} />
                      
                        <div className="product__share-wrapper small--hide">
                          <div className="product__share">
                            <div className="social-sharing social-sharing--3 social-sharing--product">
                              <button className="btn btn--clear btn--primary-color social-sharing__toggle" aria-expanded="false" aria-controls="socialSharing">
                                  <span className="social-sharing__icon">
                                    <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-share" viewBox="0 0 13 15"><path fill="#444" d="M10.5 10c-.8 0-1.6.4-2 1L4.8 8.6c.1-.4.2-.7.2-1.1s-.1-.7-.2-1.1L8.5 4c.5.6 1.2 1 2 1C11.9 5 13 3.9 13 2.5S11.9 0 10.5 0 8 1.1 8 2.5c0 .2 0 .4.1.5l-4 2.6c-.4-.4-1-.6-1.6-.6C1.1 5 0 6.1 0 7.5S1.1 10 2.5 10c.6 0 1.2-.2 1.6-.6l4 2.6c-.1.1-.1.3-.1.5 0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5z"></path></svg>
                                    <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-close" viewBox="0 0 16.8 16.8"><path fill="#444" d="M16.8 1.5L15.4.1 8.4 7l-7-7L0 1.4l7 7-7 7 1.4 1.4 7-7 7 7 1.4-1.4-7-7z"></path></svg>
                                  </span>
                                  <span className="social-sharing__toggle-text">Share</span>
                              </button>
                              <ul id="socialSharing" className="social-sharing__item-list" aria-hidden="true">
                                  <li className="social-sharing__item">
                                    <a target="_blank" rel="noopener noreferrer" href="//www.facebook.com/sharer.php?u=https://headless-dev-store.myshopify.com/products/ratio-eight" className="social-sharing__link" tabindex="-1">
                                      <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-facebook" viewBox="0 0 8.4 20.6"><path fill="#444" d="M8.4 6H5.6V4.1c0-.7.5-.9.8-.9h2V0H5.6C2.5 0 1.8 2.4 1.8 3.9V6H0v3.3h1.8v9.3h3.8V9.3h2.5L8.4 6z"></path></svg>
                                      <span className="icon__fallback-text" aria-hidden="true">Share</span>
                                      <span className="visually-hidden">Share on Facebook</span>
                                    </a>
                                  </li>
                                  <li className="social-sharing__item">
                                    <a target="_blank" rel="noopener noreferrer" href="//twitter.com/share?text=Ratio%20Eight&amp;url=https://headless-dev-store.myshopify.com/products/ratio-eight" className="social-sharing__link" tabindex="-1">
                                      <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-twitter" viewBox="0 0 20 20"><path fill="#444" d="M19.551 4.208q-.815 1.202-1.956 2.038 0 .082.02.255t.02.255q0 1.589-.469 3.179t-1.426 3.036-2.272 2.567-3.158 1.793-3.963.672q-3.301 0-6.031-1.773.571.041.937.041 2.751 0 4.911-1.671-1.284-.02-2.292-.784T2.456 11.85q.346.082.754.082.55 0 1.039-.163-1.365-.285-2.262-1.365T1.09 7.918v-.041q.774.408 1.773.448-.795-.53-1.263-1.396t-.469-1.864q0-1.019.509-1.997 1.487 1.854 3.596 2.924T9.81 7.184q-.143-.509-.143-.897 0-1.63 1.161-2.781t2.832-1.151q.815 0 1.569.326t1.284.917q1.345-.265 2.506-.958-.428 1.386-1.732 2.18 1.243-.163 2.262-.611z"></path></svg>
                                      <span className="icon__fallback-text" aria-hidden="true">Tweet</span>
                                      <span className="visually-hidden">Tweet on Twitter</span>
                                    </a>
                                  </li>
                                  <li className="social-sharing__item">
                                    <a target="_blank" rel="noopener noreferrer" href="//pinterest.com/pin/create/button/?url=https://headless-dev-store.myshopify.com/products/ratio-eight&amp;media=//cdn.shopify.com/s/files/1/0282/3507/1540/products/InSitu-3_2048x_d5235a90-ddd8-4b12-8903-246fc8c23ff6_1024x1024.png?v=1587100149&amp;description=Ratio%20Eight" className="social-sharing__link" tabindex="-1">
                                      <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-pinterest" viewBox="0 0 20 20"><path fill="#444" d="M9.958.811q1.903 0 3.635.744t2.988 2 2 2.988.744 3.635q0 2.537-1.256 4.696t-3.415 3.415-4.696 1.256q-1.39 0-2.659-.366.707-1.147.951-2.025l.659-2.561q.244.463.903.817t1.39.354q1.464 0 2.622-.842t1.793-2.305.634-3.293q0-2.171-1.671-3.769t-4.257-1.598q-1.586 0-2.903.537T5.298 5.897 4.066 7.775t-.427 2.037q0 1.268.476 2.22t1.427 1.342q.171.073.293.012t.171-.232q.171-.61.195-.756.098-.268-.122-.512-.634-.707-.634-1.83 0-1.854 1.281-3.183t3.354-1.329q1.83 0 2.854 1t1.025 2.61q0 1.342-.366 2.476t-1.049 1.817-1.561.683q-.732 0-1.195-.537t-.293-1.269q.098-.342.256-.878t.268-.915.207-.817.098-.732q0-.61-.317-1t-.927-.39q-.756 0-1.269.695t-.512 1.744q0 .39.061.756t.134.537l.073.171q-1 4.342-1.22 5.098-.195.927-.146 2.171-2.513-1.122-4.062-3.44T.59 10.177q0-3.879 2.744-6.623T9.957.81z"></path></svg>
                                      <span className="icon__fallback-text" aria-hidden="true">Pin it</span>
                                      <span className="visually-hidden">Pin on Pinterest</span>
                                    </a>
                                  </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export const query = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      handle
      productType
      description
      descriptionHtml
      availableForSale
      shopifyId
      options {
        id
        name
        values
      }
      variants {
        id
        title
        price
        compareAtPrice
        availableForSale
        shopifyId
        selectedOptions {
          name
          value
        }
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      images {
        originalSrc
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 910) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default ProductPage