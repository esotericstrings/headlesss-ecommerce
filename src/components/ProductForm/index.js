import React, { useState, useContext, useEffect, useCallback } from 'react'
import find from 'lodash/find'
import isEqual from 'lodash/isEqual'
import PropTypes from 'prop-types'

import StoreContext from '~/context/StoreContext'

const ProductForm = ({ product }) => {
  const {
    options,
    title,
    variants,
    variants: [initialVariant],
    priceRange: { minVariantPrice },
  } = product
  const [variant, setVariant] = useState({ ...initialVariant })
  const [quantity, setQuantity] = useState(1)
  const {
    addVariantToCart,
    store: { client, adding },
  } = useContext(StoreContext)

  const productVariant =
    client.product.helpers.variantForOptions(product, variant) || variant
  const [available, setAvailable] = useState(productVariant.availableForSale)

  const button_text = available ? "Add to Cart" : "Sold Out"
  const checkAvailability = useCallback(
    productId => {
      client.product.fetch(productId).then(fetchedProduct => {
        // this checks the currently selected variant for availability
        const result = fetchedProduct.variants.filter(
          variant => variant.id === productVariant.shopifyId
        )
        if (result.length > 0) {
          setAvailable(result[0].available)
        }
      })
    },
    [client.product, productVariant.shopifyId, variants]
  )

  useEffect(() => {
    checkAvailability(product.shopifyId)
  }, [productVariant, checkAvailability, product.shopifyId])

  const handleQuantityChange = ({ target }) => {
    setQuantity(target.value)
  }

  const handleOptionChange = (optionIndex, { target }) => {
    const { value } = target
    const currentOptions = [...variant.selectedOptions]

    currentOptions[optionIndex] = {
      ...currentOptions[optionIndex],
      value,
    }

    const selectedVariant = find(variants, ({ selectedOptions }) =>
      isEqual(currentOptions, selectedOptions)
    )

    setVariant({ ...selectedVariant })
  }

  const handleAddToCart = () => {
    addVariantToCart(productVariant.shopifyId, quantity)
  }

  /* 
  Using this in conjunction with a select input for variants 
  can cause a bug where the buy button is disabled, this 
  happens when only one variant is available and it's not the
  first one in the dropdown list. I didn't feel like putting 
  in time to fix this since its an edge case and most people
  wouldn't want to use dropdown styled selector anyways - 
  at least if the have a sense for good design lol.
  */
  const checkDisabled = (name, value) => {
    const match = find(variants, {
      selectedOptions: [
        {
          name: name,
          value: value,
        },
      ],
    })
    if (match === undefined) return true
    if (match.availableForSale === true) return false
    return true
  }

  const price = Intl.NumberFormat(undefined, {
    currency: minVariantPrice.currencyCode,
    minimumFractionDigits: 2,
    style: 'currency',
  }).format(variant.price)

  return (
    <>
    <div className="product__form-wrapper">
              <meta itemprop="price" content="60.0"/>
              <meta itemprop="priceCurrency" content="USD"/>
              <link itemprop="availability" href="http://schema.org/InStock"/>
              <form method="post" action="/cart/add" id="product_form_4504487886900" accept-charset="UTF-8" className="product-form" enctype="multipart/form-data">
                <input type="hidden" name="form_type" value="product"/>
                <input type="hidden" name="utf8" value="✓"/>
                {product.options.length > 1 ?
                  <>
                    {options.map(({ id, name, values }, index) => (
                      <div className="product-form__item supports-js">
                        <label className="single-option-selector__label" htmlFor={name}>{name}</label>
                        <select
                          className="single-option-selector"
                          data-option-input
                          style={{paddingLeft: 81.7813,
                            opacity: 1}}
                          id={name}
                          name={name}
                          key={id}
                          onChange={event => handleOptionChange(index, event)}
                        >
                          {values.map(value => (
                            <option
                              value={value}
                              key={`${name}-${value}`}
                            >
                              {value}
                            </option>
                          ))}
                        </select>
                        <br />
                      </div>
                    ))}
                </>
                :
                ''}
                <button className="btn btn--to-secondary btn--full product__add-to-cart-button shopify-payment-btn btn--secondary" type="submit" name="add" aria-label="Add to Cart"disabled={!available || adding} onClick={handleAddToCart}>
                  <span className="primary-text" aria-hidden="false" data-cart-primary-submit-text="">
                    {button_text}
                  </span>
                  <span className="secondary-text" aria-hidden="true" data-cart-secondary-submit-text="">View cart</span>
                </button>
              </form>
            </div>
    </>
  )
}

ProductForm.propTypes = {
  product: PropTypes.shape({
    descriptionHtml: PropTypes.string,
    handle: PropTypes.string,
    id: PropTypes.string,
    shopifyId: PropTypes.string,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        originalSrc: PropTypes.string,
      })
    ),
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        values: PropTypes.arrayOf(PropTypes.string),
      })
    ),
    productType: PropTypes.string,
    title: PropTypes.string,
    variants: PropTypes.arrayOf(
      PropTypes.shape({
        availableForSale: PropTypes.bool,
        id: PropTypes.string,
        price: PropTypes.string,
        title: PropTypes.string,
        shopifyId: PropTypes.string,
        selectedOptions: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string,
            value: PropTypes.string,
          })
        ),
      })
    ),
  }),
  addVariantToCart: PropTypes.func,
}

export default ProductForm
