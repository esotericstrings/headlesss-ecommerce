import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import ContextProvider from '~/provider/ContextProvider'

import { GlobalStyle } from '~/utils/styles'
import Navigation from '~/components/Navigation'
import Footer from '~/components/Footer'

const Layout = ({ children }) => {
  return (
    <ContextProvider>
      <GlobalStyle />
      
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <div className="template-collection data-animations site-footer--parallax">
            <Navigation/>
            <main className="content-for-layout" id="MainContent" role="main" style={{marginBottom: "215.4px"}}>
              <div id="shopify-section-collection-template" className="shopify-section">
                <div className="page-width">
                  {children}
                </div>
              </div>
              </main>
              <Footer/>
          </div>
          </>
        )}
      />
    </ContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
