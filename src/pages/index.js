import React from 'react'

import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'
import './index.scss'

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <header className="section-header text-center">
	    <h1 className="section-header__title h2">products</h1>
    </header>
    <ProductGrid />
  </>
)

export default IndexPage
