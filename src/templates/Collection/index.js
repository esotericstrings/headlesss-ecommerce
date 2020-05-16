import React from 'react'

import SEO from '~/components/seo'
import ProductFeed from '~/components/ProductFeed'

const Collection = props => {
  const {
    pageContext: { node },
  } = props
  return (
    <div id="shopify-section-collection-template" className="shopify-section">
      <div className="page-width">
        <SEO title={node.title} keywords={[`gatsby`, `application`, `react`]} />
        <header className="section-header text-center">
          <h1 className="section-header__title h2">{node.title}</h1>
        </header>
        <ProductFeed products={node.products.reverse()}/>
    </div>
  </div>
  )
}

export default Collection
