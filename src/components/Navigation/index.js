import React, { useContext, useState } from 'react'
import reduce from 'lodash/reduce'
import { StaticQuery, graphql, Link } from 'gatsby'
import SVGIcon from '../SVGIcon'
import StoreContext from '~/context/StoreContext'
import {
	CartCounter
} from './styles'

const MENU_QUERY =  graphql`
  query MenuTitleQuery {
	site {
		siteMetadata {
		  title
		  gatsbyStorefrontConfig {
			menu {
			  children {
				name
				type
				link
			  }
			}
			submenu {
			  children {
				link
				name
			  }
			}
		  }
		}
	  }
	  menu: wordpressWpApiMenusMenusItems(slug: {eq: "header-menu"}) {
		items {
		  url
		  title
		  wordpress_children {
			title
			url
		  }
		}
	  }
	  submenu: wordpressWpApiMenusMenusItems(slug: {eq: "sub-header-menu"}) {
		items {
		  url
		  title
		  wordpress_children {
			title
			url
		  }
		}
	  }
  }
`
function Navigation({ siteTitle }) {
	const [open, setOpen] = useState(0);
	const [subOpen, setSubOpen] = useState(1);
	const [count, setCount] = useState(2);
	const useQuantity = () => {
		const { store: {checkout} } = useContext(StoreContext)
		const items = checkout ? checkout.lineItems : []
		const total = reduce(items, (acc, item) => acc + item.quantity, 0)
		return [total !== 0, total]
	}

	const renderSubMenu = (child) => {
		return (
			<li 
			className={open ? "navigation__sublink navigation__entrance-animation--active" : "navigation__sublink"}>
				<Link to={child.link}>{child.name}</Link>
			</li>
		)
	  }

	return(
    <StaticQuery
      query={MENU_QUERY}
      render={data => {
		// const [hasItems, quantity] = useQuantity()
        return (
		<div className={open ? "navigation-open" : ""}>
		<div className="site-header" data-section-id="header" data-section-type="header-section" data-drawer-push="">
			<header className="site-header__wrapper" role="banner">
			<div className="site-header-sections page-width">
				<nav className="site-header__section site-header__section--button" data-site-navigation="" role="navigation">
					<button onClick={() => setOpen( open ? 0 : 1)} className="site-header__navigation btn btn--clear btn--square" aria-expanded={open ? "true" : "false"} data-navigation-button="" tabindex="0">
						<span className="burger-icon burger-icon--top"></span>
						<span className="burger-icon burger-icon--mid"></span>
						<span className="burger-icon burger-icon--bottom"></span>
						<span className="icon__fallback-text">Menu</span>
					</button>
				<div className="navigation supports-no-js critical-hide" data-section-id="header" data-section-type="navigation" aria-hidden={open ? "false" : "true"} >
				
				<div className="navigation__container">
					<ul className="navigation__links">
					{data.menu.items.map(child => {
						if (child.wordpress_children != null) {
							return (
								<li className={subOpen ? 
								"navigation__link navigation__has-sublinks navigation__entrance-animation navigation__entrance-animation--active navigation__has-sublinks--collapsed" : 
								"navigation__link navigation__has-sublinks navigation__entrance-animation navigation__entrance-animation navigation__entrance-animation--active"}>
								<button
								 onClick={() => setSubOpen( subOpen ? 0 : 1)}
								className="navigation__expand-sublinks" aria-expanded={subOpen ? "true" : "false"}>
									<span aria-hidden="true">Theme Info</span>
									<span className="visually-hidden">Theme Info menu</span>
									<SVGIcon name={'arrow-down'}/>
								</button>
								<div className="navigation__sublinks-container">
	
									<ul className="navigation__sublinks">
									{child.wordpress_children.map(subchild => {
										return (
											<li className="navigation__sublink">
												<Link to={subchild.url}>{subchild.title}</Link>
											</li>
										)
										})}
									</ul>
								</div>
								</li>
							)
						} else {
							return (
								<li 
								className={open ? "navigation__link navigation__entrance-animation navigation__entrance-animation--active" : "navigation__link navigation__entrance-animation"}>
									<Link to={child.url}>{child.title}</Link>
								</li>
							)
						}
						})}
					</ul>

					<ul className="navigation__links">
						{data.site.siteMetadata.gatsbyStorefrontConfig.submenu.children.map(child => {
							return (
								<li 
								className={open ? "navigation__link navigation__link--secondary navigation__entrance-animation  navigation__entrance-animation--active" : "navigation__link navigation__link--secondary navigation__entrance-animation"}>
									<Link to={child.link}>{child.name}</Link>
								</li>
							)
						})}
					</ul>

					<div className="navigation__search navigation__entrance-animation navigation__entrance-animation--active">
						<form action="/search" method="get" role="search">
							<div className="input-group--underline">
							<input className="input-group__field" type="search" name="q" value="" placeholder="Search" aria-label="Search"/>
							<div className="input-group__btn">
								<button type="submit" className="btn btn--clear btn--square">
									<SVGIcon name={'search'}/>
									<span className="icon__fallback-text">Search again</span>
								</button>
							</div>
							</div>
						</form>
					</div>
				</div>
			</div>
			</nav>
					<div className="site-header__section site-header__section--title">
						<div className="site-header__logo-wrapper h4" itemscope="" itemtype="http://schema.org/Organization">
							<Link to="/" itemprop="url" className="site-header__logo">
								<img className="site-header__logo-image" src="//cdn.shopify.com/s/files/1/0282/3507/1540/files/Ratio-LOGO-dark_2x_x15_a6cf7df3-d1ea-495c-afcd-ec293f39f88d_x15.png?v=1587100551" srcset="//cdn.shopify.com/s/files/1/0282/3507/1540/files/Ratio-LOGO-dark_2x_x15_a6cf7df3-d1ea-495c-afcd-ec293f39f88d_x15.png?v=1587100551 1x, //cdn.shopify.com/s/files/1/0282/3507/1540/files/Ratio-LOGO-dark_2x_x15_a6cf7df3-d1ea-495c-afcd-ec293f39f88d_x15@2x.png?v=1587100551 2x" alt={siteTitle} itemprop="logo"/>
							</Link>
						</div>
					</div>

					<div className="site-header__section site-header__section--button">
				        <Link to="/cart" className="btn btn--clear btn--square btn--hover-scale site-header__cart ajax-cart__toggle" aria-expanded="false">
				          <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-header-bag" viewBox="0 0 27.2 27"><path d="M19.6 9c-.2-5.1-2.7-9-6-9s-5.8 3.9-6 9h-4v18h20V9h-4zm-6-7c2.1 0 3.8 3.2 4 7h-8c.2-3.8 1.9-7 4-7zm-8 23V11h11v14h-11zm16 0h-3V11h3v14z"></path></svg>
				          <span className="icon__fallback-text">View cart</span>
				          <span className="site-header__cart-bubble">
				          {/* {hasItems && */}
							<CartCounter>
								{/* {quantity} */}
							</CartCounter>
						{/* } */}
						</span>
				        </Link>
	      			</div>
				</div>
			</header>
		</div>
		</div>
      )
    }}
  />
  )}

export default Navigation