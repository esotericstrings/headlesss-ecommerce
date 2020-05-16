import React, { useContext } from 'react'
import { Link } from 'gatsby'

import PropTypes from "prop-types"
import { Img } from '~/utils/styles'
import StoreContext from '~/context/StoreContext'

const BlogItem  = ({article}) => {
    const shopifyUrl = 'https://headless-dev-store.myshopify.com'
    const handle = article.url.replace(shopifyUrl, '').toLowerCase();

    function formatDate(string){
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(string).toLocaleDateString([], options);
    }

    const getExcerpt = content => (
        (article.content.split(" ").length > 30) ? (article.content.split(" ").splice(0,30).join(" ")+"...") : article.content
    )

  return (
    <div className="card critical-clear has-animated card--reveal" data-animate="">
        <Link to={handle} className="card__wrapper card--article" data-tabindex="1">
            <div className="card__image-wrapper" style={{paddingTop: '66.66666666666666%' }}>
                {<Img className="card__image fade-in lazyautosizes lazyloaded"
                    fluid={article.image.localFile.childImageSharp.fluid}
                    alt={article.handle}
                />}
                <img className="card__image fade-in lazyautosizes lazyloaded" data-widths="[180, 220, 300, 360, 460, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]" 
                data-aspectratio="1.5" data-sizes={article.image.localFile.childImageSharp.fluid.sizes} alt={article.handle}
                data-srcset={article.image.localFile.childImageSharp.fluid.srcSet}
                srcSet={article.image.localFile.childImageSharp.fluid.srcSet}
                />
                <div className="card__preloader"></div>
                <noscript>
                    <img src={article.image.localFile.childImageSharp.fluid.src} alt={article.handle} className="card__image"/>
                </noscript>
            </div>
            <div className="card__info">
                <span className="card__date text-small--uppercase">
                <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
                </span>
                <h3 className="card__name">{article.title}</h3>
                <div className="card__excerpt rte">
                    {getExcerpt(article.content)}
                </div>
                <span className="card__read-more">
                    Read more
                    <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-arrow-right" viewBox="0 0 4 7"><path fill="#444" d="M4 3.5L0 7V0z"></path></svg>
                </span>
            </div>
        </Link>
    </div>
  )
}

BlogItem.propTypes = {
    article: PropTypes.object.isRequired,
}

export default BlogItem