import React from 'react'
import PropTypes from "prop-types"
import BlogItem from '~/components/BlogItem'

const BlogFeed  = ({articles}) => {
  return (
    <div className="card-list grid" data-desktop-columns="2" data-mobile-columns="1" data-grid-style="collage">
        {articles.map(({node}) => {
          return (
            <div className="card-list__column grid__item  medium-up--one-half ">
              <BlogItem article={node}/>
            </div>
          )
        })}
    </div>
  )
}

BlogFeed.propTypes = {
    articles: PropTypes.array.isRequired,
}

export default BlogFeed