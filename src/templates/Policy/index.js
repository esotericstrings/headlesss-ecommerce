import React from 'react'

import SEO from '~/components/seo'
import '~/pages/index.scss'
import './index.scss'

const Policy = props => {
  const {
    pageContext: { node },
  } = props

  return (
    <div class="shopify-policy__container">
      <SEO title={node.title} keywords={[`gatsby`, `application`, `react`]} />
      <div className="main-content main-content--no-template" data-drawer-push="">
        <div className="main-content__wrapper">
          <main className="content-for-layout" id="MainContent" role="main" style={{marginBottom: '0'}}>
            <div className="shopify-policy__container">
                <div className="shopify-policy__title">
                    <h1>{node.title}</h1>
                </div>
                <div
                  className="shopify-policy__body"
                  dangerouslySetInnerHTML={{ __html: node.body}}
                />
            </div>
          </main>
        </div>
      </div>
    </div>

  )
}

export default Policy
