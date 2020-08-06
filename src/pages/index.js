import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Slider from '~/components/Slider'
import ImageAndText from '~/components/ImageAndText'
import Video from '~/components/Video'
import ImageAndTextOverlay from '~/components/ImageAndTextOverlay'
import Gallery from '~/components/Gallery'
import Quotes from '~/components/Quotes'
import CustomContent from '~/components/CustomContent'
import Highlight from '~/components/Highlight'
import FeaturedSlider from '~/components/FeaturedSlider'
import ProductFeature from '~/components/ProductFeature'
import './index.scss'


const INDEX_QUERY =  graphql`
  query IndexQuery {
    allWordpressPage(filter: {slug: {eq: "home-page"}}) {
        edges {
          node {
            acf {
              section_page {        
                __typename
                ... on WordPressAcf_slider {
                  center_buttons
                  slides {
                    label
                    slide_content
                    slide_image {
                      localFile {
                        absolutePath
                      }
                    }
                  }
                  slide_height {
                    value
                    label
                  }
                  show_overlay
                  overlay_opacity
                  overlay_color
                  text_color
                }
                ... on WordPressAcf_image_and_text_section {
                  id
                  background_color
                  button_label
                  button_link
                  desktop
                  heading
                  image_position
                  image_style
                  mobile
                  secondary_button
                  section_height
                  text
                  image {
                    alt_text
                    localFile {
                      relativePath
                    }
                  }
                }
                ... on WordPressAcf_video {
                  cover {
                    alt_text
                    slug
                    localFile {
                      relativePath
                    }
                    caption
                  }
                  image_position
                  heading
                  opacity
                  overlay
                  show_overlay
                  text
                  video_link
                }
                ... on WordPressAcf_quotes {
                  background_color
                  slide_duration
                  text_color
                  testimonials {
                    author
                    heading
                    text
                  }
                }
                ... on WordPressAcf_custom_content {
                  background_color
                  bottom_margin
                  heading
                  heading_color
                  top_margin
                  content {
                    heading
                    heading_color
                    heading_style
                    heading_text
                    layout {
                      container_width
                      horizontal_alignment
                      vertical_alignment
                    }
                    paragraph {
                      color
                      paragraph_text
                      size
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
`

function IndexPage() {
	return(
    <StaticQuery
      query={INDEX_QUERY}
      render={data => {
        return (
          <>
            {data.allWordpressPage.edges[0].node.acf.section_page.map(child => {
              if (child.__typename === "WordPressAcf_slider") {
                return (
                  <Slider data={child}/>
                )
              } 
              else if (child.__typename === "WordPressAcf_image_and_text_section") {
                return (
                  <ImageAndText data={child}/>
                )              
              } 
              else if (child.__typename === "WordPressAcf_video") {
                return (
                  <Video data={child}/>
                )              
              }  
              else if (child.__typename === "WordPressAcf_image_and_text_overlay") {
                return (
                  <ImageAndTextOverlay data={child}/>
                )              
              }  
              else if (child.__typename === "WordPressAcf_gallery") {
                return (
                  <Gallery data={child}/>
                )              
              } 
              else if (child.__typename === "WordPressAcf_quotes") {
                return (
                  <Quotes data={child}/>
                )              
              }    
              else if (child.__typename === "WordPressAcf_custom_content") {
                return (
                  <CustomContent data={child}/>
                )              
              }
              else if (child.__typename === "WordPressAcf_highlight") {
                return (
                  <Highlight data={child}/>
                )              
              }  
              else if (child.__typename === "WordPressAcf_featured_slider") {
                return (
                  <FeaturedSlider data={child}/>
                )              
              }   
              else if (child.__typename === "WordPressAcf_product_feature") {
                return (
                  <ProductFeature data={child}/>
                )              
              }          
              else {
                return (
                  <p>
                  {child.__typename}
                  </p>
                )
              }
            }
            )}
          </>
        )
  }
}
/>
)}

export default IndexPage
