import React from 'react'
import PropTypes from "prop-types"
import ProductItem from '~/components/ProductItem'

const ProductFeed = ({products}) => {
      
  return (
    <div className="card-list grid">
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