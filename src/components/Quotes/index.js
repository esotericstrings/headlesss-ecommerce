import React from 'react'
import { PropTypes } from 'prop-types'

class Quote extends React.Component {
    static propTypes = {
        data: PropTypes.object.isRequired,
    }

    render() {
      const slider_bg = {
        backgroundColor: this.props.data.background_color
      }
      const text_color = {
        color: this.props.data.text_color
      }
	    return(
            <div className="shopify-section index-section index-section--quotes">
            <div data-section-id="1478027260401" data-section-type="quotes-section">
              <div className="quotes-slider text-center" style={slider_bg} data-count={this.props.data.testimonials.length} data-speed="6000">
                  {this.props.data.testimonials.length > 0 &&
                    this.props.data.testimonials.map((child, index) => {
                        const slide_index = index + 1
                        const active = slide_index === 1 ? true : false 
                          return (
                            <div className={`quotes-slide quotes-slide--${index} ${active ? "quotes-slide--visible" : ""}`}>
                              <div className="h4 quote rte-setting" style={text_color} dangerouslySetInnerHTML={{__html: child.text}}/>
                              <span className="quote__author" style={text_color}>{child.author}</span>
                            </div>
                          ) 
                      }
                )}
              </div>
            </div>
          </div>
    )}
}

export default Quote

{/* <style>
  #QuotesSection-{{ section.id }} .quote,
  #QuotesSection-{{ section.id }} .quote__author,
  #QuotesSection-{{ section.id }} .quote__heading {
    color: {{ section.settings.color_text }};
  }
</style>

{% if section.blocks.size > 0 %}
  <div id="QuotesSection-{{ section.id }}" data-section-id="{{ section.id }}" data-section-type="quotes-section">
    <div className="quotes-slider text-center" data-count="{{ section.blocks.size }}" data-speed="{{ section.settings.autoplay_speed }}">
      {% for block in section.blocks %}
        <div className="quotes-slide quotes-slide--{{ forloop.index0 }} quotes-slide--{{ block.id }}{% if forloop.first == true %} quotes-slide--visible{% endif %}" {{ block.shopify_attributes }}>
          {% if block.settings.heading != blank %}
            <h2 className="quote__heading">{{ block.settings.heading | escape }}</h2>
          {% endif %}
          {% if block.settings.quote != blank %}
            <div className="h4 quote rte-setting">{{ block.settings.quote }}</div>
          {% endif %}
          {% if block.settings.author != blank %}
            <span className="quote__author">{{ block.settings.author | escape }}</span>
          {% endif %}
        </div>
      {% endfor %}
    </div>
  </div>
{% else %}
  {% include 'no-blocks' %}
{% endif %}

{% endschema %} */}
