import React from 'react'

import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'
import './index.scss'

const IndexPage = () => (
    <div class="page-width">
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <header className="section-header text-center">
        <h1 className="section-header__title h2">products</h1>
      </header>
      <ProductGrid />
    </div>
)

export default IndexPage
