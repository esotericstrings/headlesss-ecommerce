import React from 'react'
import PropTypes from "prop-types"
import ProductItem from '~/components/ProductItem'

const ProductFeed = ({products}) => {
      
  return (
    <div className="card-list grid" data-desktop-columns="2" data-mobile-columns="1" data-grid-style="collage">
      {  products ? products.map(( product ) => (
          <ProductItem key={product.id} product={product}/>
        ))
        : <p>No Products found!</p>}
    </div>
  )
}

ProductFeed.propTypes = {
    products: PropTypes.array.isRequired,
}

export default ProductFeed