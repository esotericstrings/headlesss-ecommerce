import React, { useContext } from 'react'
import reduce from 'lodash/reduce'
import PropTypes from 'prop-types'

import StoreContext from '~/context/StoreContext'
import {
	CartCounter, 
	Container,
	MenuLink,
	Wrapper
} from './styles'

const useQuantity = () => {
	const { store: {checkout} } = useContext(StoreContext)
	const items = checkout ? checkout.lineItems : []
	const total = reduce(items, (acc, item) => acc + item.quantity, 0)
	return [total !== 0, total]
}

const Navigation = ({ siteTitle }) => {
  const [hasItems, quantity] = useQuantity()

	return(
		<div className="site-header" data-section-id="header" data-section-type="header-section" data-drawer-push="">
			<header className="site-header__wrapper" role="banner">
			<Wrapper>
				<Container>
					<MenuLink to='/'>
						{siteTitle}
					</MenuLink>
					<div className="site-header__section site-header__section--button">
				        <MenuLink to="/cart" className="btn btn--clear btn--square btn--hover-scale site-header__cart ajax-cart__toggle" aria-expanded="false">
				          <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-header-bag" viewBox="0 0 27.2 27"><path d="M19.6 9c-.2-5.1-2.7-9-6-9s-5.8 3.9-6 9h-4v18h20V9h-4zm-6-7c2.1 0 3.8 3.2 4 7h-8c.2-3.8 1.9-7 4-7zm-8 23V11h11v14h-11zm16 0h-3V11h3v14z"></path></svg>
				          <span className="icon__fallback-text">View cart</span>
				          <span className="site-header__cart-bubble">
				          {hasItems &&
							<CartCounter>
								{quantity}
							</CartCounter>
						}</span>
				        </MenuLink>
	      			</div>
				</Container>
			</Wrapper>
			</header>
		</div>
	)
}

Navigation.propTypes = {
	siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
	siteTitle: ``,
}

export default Navigation
