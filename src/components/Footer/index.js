import React from 'react'
import { StaticQuery, graphql, Link } from "gatsby"
import SVGIcon from '../SVGIcon'

const FOOTER_QUERY =  graphql`
  query FooterTitleQuery {
    site {
        siteMetadata {
          title
          gatsbyStorefrontConfig {
            socialNetworks {
                name
                link
            }
            footerLinks {
              name
              link
            }
          }
        }
      }
      footerLinks: wordpressWpApiMenusMenusItems(slug: {eq: "footer-menu"}) {
        items {
          url
          title
        }
      }
      socialNetworks: wordpressWpApiMenusMenusItems(slug: {eq: "social-menu"}) {
        items {
          url
          title
        }
      }
  }
`
const Footer = ({ siteTitle }) => (
    <StaticQuery
      query={FOOTER_QUERY}
      render={data => {
        return (
        <footer className="site-footer" role="contentinfo" data-section-type="footer" data-section-id="footer" data-footer-parallax="">
        <div className="page-width">
            <div className="flex-footer flex-footer--full text-center">
                <div className="flex-footer__item flex-footer__item--menu">
                    <ul className="site-footer__linklist">
                    {data.footerLinks.items.map(footerLinks => {
                        return (
                            <li className="site-footer__linklist-item h6">
                                <Link to={footerLinks.url}>{footerLinks.title}</Link>
                            </li>
                        )
                    })}
                    </ul>
                </div>
            </div>

            <div className="site-footer__bottom">
                <div className="site-footer__social-icons flex-footer__item--one-third">
                  <div className="social-links">
                    <ul className="list--inline">
                    {data.socialNetworks.items.map(socialNetworks => {
                        return (
                            <li className="social-links__icon">
                                <a target="_blank" rel="noopener noreferrer" href={socialNetworks.url} title={data.site.siteMetadata.title + " on " +socialNetworks.title} tabIndex="-1">
                                    <SVGIcon name={socialNetworks.title.toLowerCase()}/>
                                    <span className="icon__fallback-text">{socialNetworks.title}</span>
                                </a>
                            </li>
                        )
                    })}
                    </ul>
                  </div>
                </div>

                <div className="site-footer__copyright flex-footer__item--one-third">
                    <small>Copyright © {new Date().getFullYear()}, {` `}<Link to="/" title="">{data.site.siteMetadata.title}</Link>.{` `}</small>
                    <small className="site-footer__powered-by"><a target="_blank" rel="noopener noreferrer" href="https://www.gatsbyjs.org">Built with Gatsby</a></small>
                </div>

                <div className="site-footer__payment-icons flex-footer__item--one-third"></div>
            </div>
        </div>
        <div className="site-footer__drawer-cover"></div>
      </footer>
      )
    }}
  />
)

export default Footer
