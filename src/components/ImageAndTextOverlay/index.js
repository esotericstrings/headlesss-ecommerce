import React from 'react'
import { PropTypes } from 'prop-types'

class ImageAndTextOverlay extends React.Component {
    static propTypes = {
        data: PropTypes.object.isRequired,
    }

    render() {
	    return(
            <div id="shopify-section-1476381658595" class="shopify-section index-section index-section--image-with-text-overlay">
                <div class="hero hero--1476381658595 hero--large lazyloaded" data-bgset="" data-section-id="1476381658595" data-section-type="hero">
                    <div class="hero__inner">
                        <div class="page-width text-center">
                            <h2 class="hero__overlay-title separator has-animated" data-animate="">Ratio Eight is uncompromising in quality</h2>
                            <div class="rte-setting mega-subtitle">
                                <p>From the stainless steel shower head, which utilizes a Fibonacci Spiral pattern to ensure even water distribution over the grounds, to the precision machined die-cast aluminum body and borosilicate glass tank, we want you to have the best experience possible.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )}
}

export default ImageAndTextOverlay
