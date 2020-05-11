import React from 'react'

import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'

const Collection = props => {
  const {
    pageContext: { node },
  } = props

  return (
    <>
    <SEO title={node.title} keywords={[`gatsby`, `application`, `react`]} />
    <header className="section-header text-center">
        <header className="section-header text-center">
            <h1 className="section-header__title h2">{node.title}</h1>
        </header>
        <ProductGrid />
    </header>

    </>

  )
}

export default Collection
