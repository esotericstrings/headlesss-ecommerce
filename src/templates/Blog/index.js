import React from 'react'

import SEO from '~/components/seo'

const Blog = props => {
  const {
    pageContext: { node },
  } = props

  return (
    <>
    <SEO title={node.title} keywords={[`gatsby`, `application`, `react`]} />
    <header className="section-header text-center">
	    <h1 className="section-header__title h2">{node.title}</h1>
        <div
          className="entry-content"
          dangerouslySetInnerHTML={{ __html: 'blog content'}}
        />
    </header>

    </>

  )
}

export default Blog