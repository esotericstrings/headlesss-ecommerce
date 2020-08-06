import React from 'react'
import { PropTypes } from 'prop-types'

class CustomContent extends React.Component {
    static propTypes = {
        data: PropTypes.object.isRequired,
    }

    render() {
	    return(
      <div id="shopify-section-1492806970384" class="shopify-section index-section index-section--custom-content">
        <div class="custom-content-wrapper custom-content-wrapper--1492806970384 custom-content-wrapper--top-margin  one-whole" data-section-id="1492806970384" data-section-type="custom-content">
          <div class="page-width">
            <div class="custom-content">
                <div class="custom__item custom__item--1492806970384-0 small--one-whole one-whole align--center">
                  <div class="custom__item-inner custom__item-inner--text">
                    <div class="text-center">
                      <div class="custom__block-body-text rte-setting" 
                        // dangerouslySetInnerHTML={{__html: child.paragraph.paragraph_text}}
                      ></div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    )}
}

export default CustomContent

{/* <style>
  .custom-content-wrapper--{{ section.id }} .custom-content__section-header  {
    color: {{ section.settings.heading_color }};
  }

  {% if section.settings.background_color != blank %}
    .custom-content-wrapper--{{ section.id }} {
      background-color: {{ section.settings.background_color }};
    }
  {% endif %}
</style>

<div class="custom-content-wrapper custom-content-wrapper--{{ section.id }} {% if section.settings.top_margin %}custom-content-wrapper--top-margin{% endif %} {% if section.settings.bottom_margin %}custom-content-wrapper--bottom-margin{% endif %} one-whole" data-section-id="{{ section.id }}" data-section-type="custom-content">
  <div class="page-width">
    {% if section.settings.heading_text != blank %}
      <h2 class="custom-content__section-header text-center">{{ section.settings.heading_text | escape }}</h2>
    {% endif %}

    <div class="custom-content">
      {% for block in section.blocks %}
        {% case block.settings.width %}
          {% when '25%' %}
            {%- assign block_width = 'medium-up--one-quarter' -%}
          {% when '33%' %}
            {%- assign block_width = 'medium-up--one-third' -%}
          {% when '50%' %}
            {%- assign block_width = 'medium-up--one-half' -%}
          {% when '66%' %}
            {%- assign block_width = 'medium-up--two-thirds' -%}
          {% when '75%' %}
            {%- assign block_width = 'medium-up--three-quarters' -%}
          {% when '100%' %}
            {%- assign block_width = 'one-whole' -%}
        {% endcase %}
        <div class="custom__item custom__item--{{ block.id }} small--one-whole {{ block_width }} {% if block.settings.alignment %}align--{{ block.settings.alignment }}{% endif %}" {{ block.shopify_attributes }}>
          <div class="custom__item-inner custom__item-inner--{{ block.type }}">
            {% case block.type %}
              {% when 'image' %}

                {% comment %}
                  Custom Image Block
                {% endcomment %}

                {% if block.settings.image != blank %}
                  <div class="custom__block-image-container" style="padding-top:{{ 1 | divided_by: block.settings.image.aspect_ratio | times: 100}}%">
                    {% assign img_url = block.settings.image | img_url: '1x1' | replace: '_1x1.', '_{width}x.' %}
                    <img class="custom__block-image lazyload"
                        data-src="{{ img_url }}"
                        data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]"
                        data-aspectratio="{{ block.settings.image.aspect_ratio }}"
                        data-sizes="auto"
                        alt="{{ block.settings.image.alt | escape }}">

                    <noscript>
                      <img src="{{ block.settings.image | img_url: '1024x1024' }}" alt="{{ block.settings.image.alt | escape }}" class="custom__block-image">
                    </noscript>
                  </div>
                {% else %}
                  {{ 'image' | placeholder_svg_tag: 'placeholder-svg' }}
                {% endif %}

              {% when 'text' %}

                {% comment %}
                  Custom Text Block
                {% endcomment %}
                <style>
                  .custom-content-wrapper--{{ section.id }} .custom__item--{{ block.id }} .custom__block-heading-text {
                    color: {{ block.settings.heading_color }};
                  }

                  .custom-content-wrapper--{{ section.id }} .custom__item--{{ block.id }} .custom__block-body-text {
                    color: {{ block.settings.paragraph_color }};
                    font-size: {{ block.settings.paragraph_size | append: 'em' }};
                  }
                </style>


                <div class="text-{{ block.settings.align_text }}">
                  {% if block.settings.heading_text != blank %}
                    <h2 class="custom__block-heading-text {{ block.settings.heading_style }}">{{ block.settings.heading_text | escape }}</h2>
                  {% endif %}
                  {% if block.settings.paragraph_text != blank %}
                    <div class="custom__block-body-text rte-setting">{{ block.settings.paragraph_text }}</div>
                  {% endif %}
                </div>
              {% when 'video' %}

                {% comment %}
                  Custom Video Block
                {% endcomment %}
                <div class="video-wrapper">
                  {% if block.settings.video_url == blank %}
                    <iframe src="//www.youtube.com/embed/_9VUPq3SxOc?rel=0&showinfo=0&vq=720" width="850" height="480" frameborder="0" allowfullscreen></iframe>
                  {% else %}
                    {% if block.settings.video_url.type == "youtube" %}
                      <iframe src="//www.youtube.com/embed/{{ block.settings.video_url.id }}?rel=0&showinfo=0&vq=720" width="850" height="480" frameborder="0" allowfullscreen></iframe>
                    {% endif %}
                    {% if block.settings.video_url.type == "vimeo" %}
                      <iframe src="//player.vimeo.com/video/{{ block.settings.video_url.id }}?byline=0&portrait=0&badge=0" width="850" height="480" frameborder="0" allowfullscreen></iframe>
                    {% endif %}
                  {% endif %}
                </div>
              {% when 'product' %}

                {% comment %}
                  Custom Product Block
                {% endcomment %}

                {%- assign product = all_products[block.settings.product] -%}

                {% if product.title.size > 0 %}
                  <a href="{{ product.url }}" class="card__wrapper text-center{% if block.settings.show_spacing %} card__wrapper--padding{% endif %}">

                    {% if product.featured_media != blank %}
                      {% assign preview_image = product.featured_media.preview_image %}

                      <div class="card__image-wrapper"  style="padding-top:{{ 1 | divided_by: preview_image.aspect_ratio | times: 100}}%">
                        {% assign img_url = preview_image | img_url: '1x1' | replace: '_1x1.', '_{width}x.' %}
                        <img class="card__image lazyload fade-in"
                            data-src="{{ img_url }}"
                            data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]"
                            data-aspectratio="{{ preview_image.aspect_ratio }}"
                            data-sizes="auto"
                            alt="{{ preview_image.alt | escape }}">

                        <noscript>
                          <img src="{{ preview_image.src | img_url: '1024x1024' }}" alt="{{ preview_image.alt | escape }}" class="card__image">
                        </noscript>
                      </div>
                    {% endif %}

                    <div class="card__info">
                      <div class="card__brand">{{ product.vendor }}</div>
                      <div class="card__name h4">{{ product.title }}</div>

                      <div class="card__price">
                        {% if product.compare_at_price > product.price %}
                          {% comment %}
                            Product is on sale
                          {% endcomment %}
                          {% if product.price_varies %}
                            {% assign sale_price = product.price | money_without_trailing_zeros %}
                            {{ 'products.product.on_sale_from_html' | t: price: sale_price }}
                          {% else %}
                            <span class="visually-hidden">{{ 'products.product.sale_price' | t }}</span>
                            <span class="card__price--sale">{{ product.price | money_without_trailing_zeros }}</span>

                            <span class="visually-hidden">{{ 'products.product.regular_price' | t }}</span>
                            <span class="card__price--regular-strike">
                              <span class="card__price--regular">{{ product.compare_at_price | money_without_trailing_zeros }}</span>
                            </span>
                          {% endif %}

                        {% else %}
                          {% comment %}
                            Not on sale, but could still have varying prices
                          {% endcomment %}
                          {% if product.price_varies %}
                            {% assign price = product.price | money_without_trailing_zeros %}
                            {{ 'products.product.from_text_html' | t: price: price }}
                          {% else %}
                            {{ product.price | money_without_trailing_zeros }}
                          {% endif %}

                        {% endif %}
                      </div>
                    </div>
                  </a>
                {% else %}
                  {% capture current %}{% cycle 1, 2, 3, 4, 5, 6 %}{% endcapture %}
                  {{ 'product-' | append: current | placeholder_svg_tag: 'placeholder-svg' }}

                  <div class="card__info">
                    <div class="card__brand">{{ 'homepage.onboarding.product_vendor' | t }}</div>
                    <div class="card__name h4">{{ 'homepage.onboarding.product_title' | t }}</div>
                    <div class="card__price">$19.99</div>
                  </div>
                {% endif %}
              {% when 'collection' %}

                {% comment %}
                  Custom Collection Block
                {% endcomment %}

                {%- assign collection = collections[block.settings.collection] -%}

                {% unless collection == empty %}
                  <a href="{{ collection.url }}" class="card__wrapper text-center">

                    {% if collection.image %}
                      {% assign collection_image = collection.image %}
                    {% else %}
                      {% assign collection_image = collection.products.first.featured_media.preview_image %}
                    {% endif %}

                    {% if collection_image != blank %}
                      <div class="card__image-wrapper" style="padding-top:{{ 1 | divided_by: collection_image.aspect_ratio | times: 100}}%">
                        {% assign img_url = collection_image | img_url: '1x1' | replace: '_1x1.', '_{width}x.' %}
                        <img class="card__image lazyload fade-in"
                            data-src="{{ img_url }}"
                            data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]"
                            data-aspectratio="{{ collection_image.aspect_ratio }}"
                            data-sizes="auto"
                            alt="{{ collection_image.alt | escape }}">

                        <noscript>
                          <img src="{{ collection_image | img_url: '1024x1024' }}" alt="{{ collection_image.alt | escape }}" class="card__image">
                        </noscript>
                      </div>
                    {% endif %}

                    <div class="card__info">
                      <div class="card__name h4">{{ collection.title }}</div>
                      {% if section.settings.show_description and collection.description != blank %}
                        <div class="rte card__description">
                          {{ collection.description | strip_html | truncatewords: 15 }}
                        </div>
                      {% endif %}
                    </div>
                  </a>
                {% else %}
                  {% capture current %}{% cycle 1, 2, 3, 4, 5, 6 %}{% endcapture %}
                  {{ 'collection-' | append: current | placeholder_svg_tag: 'placeholder-svg' }}

                  <div class="card__info">
                    <div class="card__name h4">{{ 'homepage.onboarding.collection_title' | t }}</div>
                  </div>
                {% endunless %}
              {% when 'html' %}
                {% if block.settings.code != blank %}
                  {{ block.settings.code }}
                {% endif %}
            {% endcase %}
          </div>
        </div>

      {% endfor %}
    </div>

    {% if section.blocks.size == 0 %}
      {% include 'no-blocks' %}
    {% endif %}
  </div>
</div>

{% endschema %} */}
