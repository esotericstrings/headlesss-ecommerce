
import React from 'react'
import { PropTypes } from 'prop-types'

class Slider extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  }

  render() {

    return (
      <div id="shopify-section-slideshow" className="shopify-section index-section">
        <div className={`slideshow--${this.props.data.slide_height.value} ${this.props.data.center_buttons ? " slideshow--center-cta" : ""}`} data-section-id="slideshow" data-section-type="slideshow-section">
          <div id="Slideshow-slideshow" 
               className="slideshow" 
               role="region" 
               aria-describedby="slideshow-info" 
               tabindex="-1" 
               aria-label="slideshow">

            <ul className="slideshow__slides">
              {this.props.data.slides.length > 0 &&
                this.props.data.slides.map((child, index) => {
                  const slide_index = index + 1
                  const active = slide_index === 1 ? true : false
                  return (
                    <li className={`slideshow__slide${active ? " slideshow__slide--active" : ""}${this.props.data.show_overlay ? " slideshow__overlay" : ""}`} 
                    id={`Slide${index}`}
                    aria-hidden={!active}
                    >
                      <img className="slideshow__image lazyautosizes ls-is-cached lazyloaded" src="//cdn.shopify.com/s/files/1/0282/3507/1540/files/Hero-Eight_300x.jpg?v=1587104274" data-widths="[540, 720, 900, 1080, 1296, 1512, 1728, 1944, 2048]" data-aspectratio="1.5157894736842106" data-sizes="auto" data-parent-fit="cover" alt="" data-srcset="//cdn.shopify.com/s/files/1/0282/3507/1540/files/Hero-Eight_540x.jpg?v=1587104274 540w, //cdn.shopify.com/s/files/1/0282/3507/1540/files/Hero-Eight_720x.jpg?v=1587104274 720w, //cdn.shopify.com/s/files/1/0282/3507/1540/files/Hero-Eight_900x.jpg?v=1587104274 900w, //cdn.shopify.com/s/files/1/0282/3507/1540/files/Hero-Eight_1080x.jpg?v=1587104274 1080w, //cdn.shopify.com/s/files/1/0282/3507/1540/files/Hero-Eight_1296x.jpg?v=1587104274 1296w, //cdn.shopify.com/s/files/1/0282/3507/1540/files/Hero-Eight_1512x.jpg?v=1587104274 1512w, //cdn.shopify.com/s/files/1/0282/3507/1540/files/Hero-Eight_1728x.jpg?v=1587104274 1728w, //cdn.shopify.com/s/files/1/0282/3507/1540/files/Hero-Eight_1944x.jpg?v=1587104274 1944w, //cdn.shopify.com/s/files/1/0282/3507/1540/files/Hero-Eight_2048x.jpg?v=1587104274 2048w" sizes="1400.5894736842106px" srcset="//cdn.shopify.com/s/files/1/0282/3507/1540/files/Hero-Eight_540x.jpg?v=1587104274 540w, //cdn.shopify.com/s/files/1/0282/3507/1540/files/Hero-Eight_720x.jpg?v=1587104274 720w, //cdn.shopify.com/s/files/1/0282/3507/1540/files/Hero-Eight_900x.jpg?v=1587104274 900w, //cdn.shopify.com/s/files/1/0282/3507/1540/files/Hero-Eight_1080x.jpg?v=1587104274 1080w, //cdn.shopify.com/s/files/1/0282/3507/1540/files/Hero-Eight_1296x.jpg?v=1587104274 1296w, //cdn.shopify.com/s/files/1/0282/3507/1540/files/Hero-Eight_1512x.jpg?v=1587104274 1512w, //cdn.shopify.com/s/files/1/0282/3507/1540/files/Hero-Eight_1728x.jpg?v=1587104274 1728w, //cdn.shopify.com/s/files/1/0282/3507/1540/files/Hero-Eight_1944x.jpg?v=1587104274 1944w, //cdn.shopify.com/s/files/1/0282/3507/1540/files/Hero-Eight_2048x.jpg?v=1587104274 2048w" />
                      <div className="slideshow__text-container page-width">
                        <div className="slideshow__text-content has-animated" data-animate="">
                          <h2 className="slideshow__heading h1" dangerouslySetInnerHTML={{ __html: child.slide_content }} />
                        </div>
                      </div>
                    </li>
                  )
                })}
            </ul>

{/* 
//               {{ block.shopify_attributes }}>
//             {%- if block.settings.image == blank -%}
//               <div class="slideshow__image slideshow__image--{{ block.id }}">
//                 <div class="placeholder-background">
//                   {% capture current %}{% cycle 1, 2 %}{% endcapture %}
//                   {{ 'lifestyle-' | append: current | placeholder_svg_tag: 'placeholder-svg' }}
//                 </div>
//               </div>
//             {%- else -%}
//               {%- assign img_url = block.settings.image | img_url: '1x1' | replace: '_1x1.', '_{width}x.' -%}

//               <style>
//                 .slideshow__image--{{ block.id }} {
//                   object-position: {{ block.settings.alignment }};
//                   font-family: "object-fit: cover; object-position: {{ block.settings.alignment }};";
//                 }
//               </style>

//               <img class="slideshow__image slideshow__image--{{ block.id }} lazyload"
//                   src="{{ block.settings.image | img_url: '300x' }}"
//                   data-src="{{ img_url }}"
//                   data-widths="[540, 720, 900, 1080, 1296, 1512, 1728, 1944, 2048]"
//                   data-aspectratio="{{ block.settings.image.aspect_ratio }}"
//                   data-sizes="auto"
//                   data-parent-fit="cover"
//                   alt="{{ block.settings.image.alt | escape }}">
//             {%- endif -%}

//             {%- if block.type == 'video' and block.settings.video_url != blank -%}
//               <div class="slideshow__video slideshow__video--{{ block.id }}"
//                 data-video-type="{{ block.settings.video_url.type }}"
//                 data-video-id="{{ block.settings.video_url.id }}"
//                 data-block-id="{{ block.id }}"></div>
//             {%- endif -%}

//             <div class="slideshow__text-container page-width">
//               {%- if block.type == 'video' -%}
//                 <button class="slideshow__play-button btn btn--clear"
//                         disabled
//                         aria-live="polite"
//                         aria-label="{{ 'sections.slider.pause' | t }}"
//                         aria-pressed="false"
//                         data-label-pause="{{ 'sections.slider.pause' | t }}"
//                         data-label-play="{{ 'sections.slider.play' | t }}"
//                         data-pause-button>
//                   <span class="visually-hidden" data-play-label>{{ 'video.play' | t }}</span>
//                   <span class="slideshow__play-button-icon"></span>
//                   <span class="slideshow__play-button-circle"></span>
//                 </button>
//               {%- endif -%}
//               <div class="slideshow__text-content" data-animate>
//                 {%- if block.settings.title != blank -%}
//                   <h2 class="slideshow__heading h1">
//                     {{ block.settings.title | escape }}
//                   </h2>
//                 {%- endif -%}
//                 {%- if show_center_cta and block.settings.cta_link != blank -%}
//                   <a href="{{ block.settings.cta_link }}" class="slideshow__heading-cta btn{% if section.blocks.size == 1 and section.settings.slider_height == 'adapt' %} small--hide{% endif %}">
//                     {{ block.settings.cta | escape }}
//                   </a>
//                 {%- endif -%}
//               </div>
//             </div>
//           </li>
//         {%- endfor -%}
//       </ul>
//     {%- else -%}
//       <div class="slideshow__image slideshow__image--{{ block.id }}{% if section.settings.show_overlay %} slideshow__overlay{% endif %}">
//         <div class="placeholder-background">
//           {{ 'lifestyle-1' | placeholder_svg_tag: 'placeholder-svg' }}
//         </div>
//       </div>
//     {%- endif -%}

//     {%- if section.blocks.size > 1 -%}
//       <div class="slideshow__buttons critical-hide" data-count="{{ section.blocks.size }}">
//         {%- for block in section.blocks -%}
//           <div class="slideshow__button slideshow__button--{{ section.blocks.size }}{% if block.settings.cta_link != blank %} slideshow__button--link{% endif %}">
//             <button class="slideshow__button-label text-title btn--clear">
//               <span class="visually-hidden">{{ 'sections.slider.slide' | t: number: forloop.index }}</span>
//               <span class="slideshow__button-label-text">{{ block.settings.button }}</span>
//             </button>
//             {%- unless section.settings.center_cta -%}
//               {%- if block.settings.cta_link != blank -%}
//                 <a href="{{ block.settings.cta_link }}" class="slideshow__button-cta slideshow__button-cta--multiple medium-up--hide btn" tabindex="-1">
//                   <span class="visually-hidden">{{ block.settings.cta | escape }}</span>
//                   {% include 'icon-plus' %}
//                 </a>
//               {%- else -%}
//                 <div class="slideshow__button-cta slideshow__button-cta--multiple medium-up--hide btn" tabindex="-1">
//                   <span class="visually-hidden">{{ block.settings.cta | escape }}</span>
//                   {% include 'icon-plus' %}
//                 </div>
//               {%- endif -%}

//               {%- if block.settings.cta_link != blank -%}
//                 <a href="{{ block.settings.cta_link }}" class="slideshow__button-cta slideshow__button-cta--desktop small--hide btn" aria-label="{{ block.settings.cta | escape }}" tabindex="-1">
//                   <span class="slideshow__heading-cta-text" data-button-text="{{ block.settings.cta | escape }}" aria-hidden="true"></span>
//                 </a>
//               {%- else -%}
//                 <div class="slideshow__button-cta slideshow__button-cta--desktop small--hide btn" tabindex="-1">
//                   <span class="slideshow__heading-cta-text"></span>
//                 </div>
//               {%- endif -%}
//             {%- endunless -%}
//           </div>
//         {%- endfor -%}
//       </div>

//     {%- endif -%}
//   </div> */}

            <div className="slideshow__buttons critical-hide" data-count={this.props.data.slides.length}>
              {this.props.data.slides.length > 0 &&
                this.props.data.slides.map((child, index) => {
                  const slide_index = index + 1
                  const active = slide_index === 1 ? true : false
                  return (
                    <div className={`slideshow__button slideshow__button--4 ${active ? "button--active" : ""}`}>
                      <button className="slideshow__button-label text-title btn--clear" aria-expanded={active}>
                        <span className="visually-hidden">{"Slide " + slide_index}</span>
                        <span className="slideshow__button-label-text">{child.label}</span>
                      </button></div>
                  )
                })
              }
            </div>

            <ul className="slideshow__navigation">
              <li>
                <button className="slideshow__navigation-item critical-hide" aria-label="Previous slide" disabled="disabled" data-slider-navigation="" data-slider-navigation-previous=""></button>
              </li>
              <li>
                <button className="slideshow__navigation-item slideshow__button-next critical-hide" aria-label="Next slide" data-slider-navigation="" data-slider-navigation-next=""></button>
              </li>
            </ul>
            
          </div>

          <ol className="slideshow__indicators">
            {this.props.data.slides.length > 0 &&
              this.props.data.slides.map((child, index) => {
                const slide_index = index + 1
                const active = slide_index === 1 ? true : false
                return (
                  <li>
                    <a href="#Slideshow-slideshow" className={`slideshow__indicator critical-clear ${active ? "slideshow__indicator--active" : ""}`} data-slide-index={index} data-link-no-focus>
                      <span className="visually-hidden">{"Slide " + slide_index}</span>
                    </a>
                  </li>
                )
              }
              )}
          </ol>

          {this.props.data.slide_height.value === 'adapt' && 
            <div class="slideshow__text-container slideshow__text-container-mobile page-width">
              {this.props.data.slides.length > 0 &&
              this.props.data.slides.map((child, index) => {
                const slide_index = index + 1
                const active = slide_index === 1 ? true : false
                return (
                  <div class="slideshow__text-content slideshow__text-content-mobile" data-animate>
                    {active && child.button_link &&
                      <a href="{{ first_block.settings.cta_link }}" class="slideshow__button-cta-single medium-up--hide btn">
                      {child.label}
                      </a>
                    }
                    {child.label &&
                      <h2 class="slideshow__heading h1">
                      {child.label}
                      </h2>
                    }
                  </div>
                )
              }
            )}
          </div>
        }
          <p id="slideshow-info" className="visually-hidden" aria-hidden="true">Use left/right arrows to navigate the slideshow or swipe left/right if using a mobile device</p>
        </div>
      </div>
    )
  }
}

export default Slider

// {%- if section.settings.show_overlay -%}
//   <style>
//     #Slideshow-{{ section.id }} .slideshow__overlay::before {
//       background-color: {{ section.settings.overlay_color }};
//       opacity: {{ section.settings.overlay_opacity | divided_by: 100.00 }};
//     }

//     #Slideshow-{{ section.id }} .slideshow__heading,
//     #Slideshow-{{ section.id }} .slideshow__button-label {
//       color: {{ section.settings.overlay_text }};
//     }
//   </style>
// {%- endif -%}

// {%- assign first_block = section.blocks[0] -%}

// {%- comment -%}
//   A centered call to action button is displayed if the corresponding setting is
//   enabled or if there is just one slide with a call to action button.
// {%- endcomment -%}
// {%- assign show_center_cta = section.settings.center_cta -%}
// {%- if section.blocks.size == 1 and first_block.settings.cta_link != blank -%}
//   {%- assign show_center_cta = true -%}
// {%- endif -%}

// {%- if section.settings.slider_height == 'adapt' -%}
//   {%- comment -%}
//     'min_aspect_ratio' is the minimum aspect ratio of images shown without
//     whitespace when 'home_hero_height' is set to 'adapt'.
//     The aspect ratio values for the first image in the slideshow will be used
//     unless it is blank, in that case a ratio of 2:1 will be used.
//   {%- endcomment -%}

//   {%- if first_block.type == 'video' -%}
//     {%- assign min_aspect_ratio = 16 | divided_by: 9.0 -%}
//   {%- elsif first_block.settings.image.aspect_ratio == blank -%}
//     {%- assign min_aspect_ratio = 2.0 -%}
//   {%- else -%}
//     {%- assign min_aspect_ratio = first_block.settings.image.aspect_ratio -%}
//   {%- endif -%}
//   {%- assign wrapper_height = 100 | divided_by: min_aspect_ratio -%}
//   {%- style -%}
//     #Slideshow-{{ section.id }} {
//       height: {{- wrapper_height -}}vw;
//     }
//   {%- endstyle -%}
// {%- endif -%}

// </div>