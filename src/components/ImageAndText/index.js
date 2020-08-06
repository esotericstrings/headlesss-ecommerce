import React from 'react'
import { PropTypes } from 'prop-types'

class ImageAndText extends React.Component {
    static propTypes = {
        data: PropTypes.object.isRequired,
    }

    render() {
        const background_color_style = {
            backgroundColor: this.props.data.background_color
        }

        const secondary_background_color_style = {
            backgroundColor: this.props.data.background_color
        }

        const image_crop_style = {
            
        }
// {%- assign image_crop = false -%}

// {% if section.settings.image_crop == 'circle' or section.settings.image_crop == 'square' %}
//   {%- assign image_crop = true -%}
// {% endif %}

// <style>
//   .feature-row--{{ section.id }} {
//     {% if section.settings.background_color != blank %}
//       background-color: {{ section.settings.background_color }};
//     {% elsif section.settings.background_color == blank and image_crop %}
//       background-color: {{ settings.color_secondary_bg }};
//     {% endif %}
//   }

//   {% if image_crop %}
//     @media screen and (min-width: 750px) {
//       .feature-row--{{ section.id }} .feature-row__image-wrapper {
//         background-color: {{ section.settings.background_color | color_lighten: 5 }};
//       }
//     }
//   {% endif %}
// </style>
	    return(
            <div id="shopify-section-1478026923193" className="shopify-section index-section index-section--image-with-text">
                <div className="feature-row feature-row--large feature-row__image-crop--circle" data-section-id="1478026923193" data-section-type="feature-row">
                    <div className="feature-row__item feature-row__image-wrapper">
                        <div className="feature-row__image feature-row__image--1478026923193 feature-row__image-crop lazyloaded" data-bgset="
                        //cdn.shopify.com/s/files/1/0282/3507/1540/files/intro-image_V2_2x_360x_8c807ac2-87e9-46e1-8031-11b042004e91_180x.jpg?v=1587101214 180w 183h,
                        //cdn.shopify.com/s/files/1/0282/3507/1540/files/intro-image_V2_2x_360x_8c807ac2-87e9-46e1-8031-11b042004e91.jpg?v=1587101214 360w 365h" 
                        // style="background-image: url(&quot;https://cdn.shopify.com/s/files/1/0282/3507/1540/files/intro-image_V2_2x_360x_8c807ac2-87e9-46e1-8031-11b042004e91.jpg?v=1587101214&quot;);"
                        >
                        <picture 
                        // style={{display: 'none'}}
                        >
                            <source data-srcset=" //cdn.shopify.com/s/files/1/0282/3507/1540/files/intro-image_V2_2x_360x_8c807ac2-87e9-46e1-8031-11b042004e91_180x.jpg?v=1587101214 180w 183h, //cdn.shopify.com/s/files/1/0282/3507/1540/files/intro-image_V2_2x_360x_8c807ac2-87e9-46e1-8031-11b042004e91.jpg?v=1587101214 360w 365h " sizes="320px" srcset=" //cdn.shopify.com/s/files/1/0282/3507/1540/files/intro-image_V2_2x_360x_8c807ac2-87e9-46e1-8031-11b042004e91_180x.jpg?v=1587101214 180w 183h, //cdn.shopify.com/s/files/1/0282/3507/1540/files/intro-image_V2_2x_360x_8c807ac2-87e9-46e1-8031-11b042004e91.jpg?v=1587101214 360w 365h "/>
                            <img alt="" className="lazyautosizes lazyloaded" data-sizes="auto" data-parent-fit="cover" sizes="320px"/>
                        </picture>
                        </div>
                        <noscript>
                            <div className="feature-row__image feature-row__image--1478026923193 feature-row__image-crop" 
                            // style="background-image: //cdn.shopify.com/s/files/1/0282/3507/1540/files/intro-image_V2_2x_360x_8c807ac2-87e9-46e1-8031-11b042004e91.jpg?v=1587101214"
                            >
                            </div>
                        </noscript>
                    </div>
                    <div className="feature-row__item feature-row__text">
                        <h2 className="feature-row__heading h3 separator has-animated" data-animate="">A new paragon in coffee</h2>
                        <div className="rte-setting featured-row__subtext"><p>Ratio Eight changes everything with precision brewing technique, top-quality construction, and a design that will elevate any environment for years to come.</p></div>
                    </div>
                </div>
            </div>
    )}
}

export default ImageAndText

// {%- assign image_crop = false -%}

// {% if section.settings.image_crop == 'circle' or section.settings.image_crop == 'square' %}
//   {%- assign image_crop = true -%}
// {% endif %}

// <style>
//   .feature-row--{{ section.id }} {
//     {% if section.settings.background_color != blank %}
//       background-color: {{ section.settings.background_color }};
//     {% elsif section.settings.background_color == blank and image_crop %}
//       background-color: {{ settings.color_secondary_bg }};
//     {% endif %}
//   }

//   {% if image_crop %}
//     @media screen and (min-width: 750px) {
//       .feature-row--{{ section.id }} .feature-row__image-wrapper {
//         background-color: {{ section.settings.background_color | color_lighten: 5 }};
//       }
//     }
//   {% endif %}
// </style>

// {% if section.settings.image != blank %}
//   <style>
//     .feature-row__image--{{ section.id }} {
//       background-position: {{ section.settings.alignment }};
//     }
//   </style>
// {% endif %}

// {% capture image_layout %}
//   <div class="feature-row__item feature-row__image-wrapper">
//     {% if section.settings.image != blank %}
//       <div class="feature-row__image feature-row__image--{{ section.id }}{% if image_crop %} feature-row__image-crop{% endif %} lazyload" data-sizes="auto" data-bgset="{% include 'bgset', image: section.settings.image %}"></div>

//       <noscript>
//         <div class="feature-row__image feature-row__image--{{ section.id }}{% if image_crop %} feature-row__image-crop{% endif %}" style="background-image: {{ section.settings.image | img_url: 'master' }}"></div>
//       </noscript>
//     {% else %}
//       <div class="feature-row__image feature-row__image--{{ section.id }}{% if image_crop %} feature-row__image-crop{% endif %}">{{ 'image' | placeholder_svg_tag: 'placeholder-svg' }}</div>
//     {% endif %}
//   </div>
// {% endcapture %}

// <div class="feature-row feature-row--{{ section.id }} feature-row--{{ section.settings.size }} feature-row__image-crop--{{ section.settings.image_crop }}{% if section.settings.mobile_layout == 'bottom' %} feature-row-mobile--bottom{% endif %}" data-section-id="{{ section.id }}" data-section-type="feature-row">
//   {% if section.settings.desktop_layout == 'left' %}
//     {{ image_layout }}
//   {% endif %}

//   <div class="feature-row__item feature-row__text">
//     {% if section.settings.title != blank %}
//       <h2 class="feature-row__heading h3 separator" data-animate>{{ section.settings.title | escape }}</h2>
//     {% endif %}
//     {% if section.settings.text != blank %}
//       <div class="rte-setting featured-row__subtext">{{ section.settings.text }}</div>
//     {% endif %}
//     {% if section.settings.button_label != blank %}
//       <a href="{{ section.settings.button_link }}" class="btn{% if section.settings.use_second_button %} btn--secondary{% endif %} feature-row__btn">
//         {{ section.settings.button_label }}
//       </a>
//     {% endif %}
//   </div>

//   {% if section.settings.desktop_layout == 'right' %}
//     {{ image_layout }}
//   {% endif %}
// </div>