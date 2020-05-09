import React from 'react'
import PropTypes from 'prop-types'
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
        <footer class="site-footer" role="contentinfo" data-section-type="footer" data-section-id="footer" data-footer-parallax="">
        <div class="page-width">
            <div class="flex-footer flex-footer--full text-center">
                <div class="flex-footer__item flex-footer__item--menu">
                    <ul class="site-footer__linklist">
                    {data.footerLinks.items.map(footerLinks => {
                        return (
                            <li class="site-footer__linklist-item h6">
                                <Link to={footerLinks.url}>{footerLinks.title}</Link>
                            </li>
                        )
                    })}
                    </ul>
                </div>
            </div>

            <div class="site-footer__bottom">
                <div class="site-footer__social-icons flex-footer__item--one-third">
                  <div class="social-links">
                    <ul class="list--inline">
                    {data.socialNetworks.items.map(socialNetworks => {
                        return (
                            <li class="social-links__icon">
                                <a target="_blank" rel="noopener noreferrer" href={socialNetworks.url} title={data.site.siteMetadata.title + " on " +socialNetworks.title} tabindex="-1">
                                    <SVGIcon name={socialNetworks.title.toLowerCase()}/>
                                    <span class="icon__fallback-text">{socialNetworks.title}</span>
                                </a>
                            </li>
                        )
                    })}
                    </ul>
                  </div>
                </div>

                <div class="site-footer__copyright flex-footer__item--one-third">
                    <small>Copyright © {new Date().getFullYear()}, {` `}<Link to="/" title="">{data.site.siteMetadata.title}</Link>.{` `}</small>
                    <small class="site-footer__powered-by"><a target="_blank" rel="noopener noreferrer" href="https://www.gatsbyjs.org">Built with Gatsby</a></small>
                </div>

                <div class="site-footer__payment-icons flex-footer__item--one-third"></div>
            </div>
        </div>
        <div class="site-footer__drawer-cover"></div>
      </footer>
      )
    }}
  />
)

export default Footer
