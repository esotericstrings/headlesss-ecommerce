import React, { useContext } from 'react'
import { Link } from 'gatsby'

import PropTypes from "prop-types"
import { Img } from '~/utils/styles'
import StoreContext from '~/context/StoreContext'

const ProductItem  = ({product}) => {
    const { store: {checkout} } = useContext(StoreContext)
    
    const getPrice = price => Intl.NumberFormat(undefined, {
        currency: checkout.currencyCode ? checkout.currencyCode : 'EUR',
        minimumFractionDigits: 0,
        style: 'currency',
      }).format(parseFloat(price ? price : 0))

  return (
    <div className="card-list__column grid grid__item medium-up--one-half">
        <div key={product.title} className="card critical-clear has-animated card--reveal">
        <Link to={`/product/${product.handle}/`} className="card__wrapper text-center">
            {product.images[0] && product.images[0].localFile &&
            (<Img className="card__image fade-in lazyautosizes lazyloaded"
                fluid={product.images[0].localFile.childImageSharp.fluid}
                alt={product.handle}
            />)}
            <div className="card__info">
            {  product.variants[0].compareAtPrice ? 
                <span className="card__badge">Sale</span>
                :
                '' 
            }
            <div className="card__brand">{product.vendor}</div>
            <h3 className="card__name h4">{product.title}</h3>
            { (product.availableForSale && product.variants[0].compareAtPrice ) ? 
                <span className="card__price--sale">{getPrice(product.variants[0].price)}</span>
                :
                '' 
            }
            { (product.availableForSale && product.variants[0].compareAtPrice ) ? 
                <span className="card__price--regular-strike">
                    <span className="visually-hidden">Regular price</span>
                    <span className="card__price--regular">{getPrice(product.variants[0].compareAtPrice)}</span>
                </span>
                :
                (product.availableForSale) ?
                    <span className="card__price">{getPrice(product.variants[0].price)}</span>
                :
                <div className="card__availability">Sold Out</div>  
            }
            </div>
        </Link>
        </div>
    </div>
  )
}

ProductItem.propTypes = {
    product: PropTypes.object.isRequired,
}

export default ProductItem
