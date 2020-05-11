import React from 'react'

import SEO from '~/components/seo'

const SinglePage = props => {
  const {
    pageContext: { node },
  } = props

  return (
    <>
      <SEO title={node.title} keywords={[`gatsby`, `application`, `react`]} />
      <header class="section-header text-center">
        <h1 class="section-header__title h2">{node.title}</h1>
      </header>
      <div class="grid">
        <div class="grid__item medium-up--four-fifths medium-up--push-one-tenth">
          <div
                className="rte"
                dangerouslySetInnerHTML={{ __html: node.body}}
              />
          </div>
      </div>
    </>

  )
}

export default SinglePage
