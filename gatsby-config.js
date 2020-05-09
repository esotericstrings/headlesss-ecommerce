const path = require('path')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: `Gatsby Shopify Starter`,
    description: `Kick off your next, ecommerce experience with this Gatsby starter. This starter ships with credentials to a shopify demo store so you can try it out immediately.`,
    author: `@alexanderhorl`,
    gatsbyStorefrontConfig: {
      storeName: "Gatsby Storefront",
      storeDescription: "Demo store description",
      email: "info@gatsbystorefront.com",
      company: "Gatsby Storefront Inc.",
      location: "New York, NY",
      address: "1 Centre St.",
      phone: "+1 (800) 123-1234",
      workingDays: "Mon - Fri",
      workingHours: "8AM - 6PM",
      socialNetworks: [
        {
          name: "Facebook",
          link: "https://facebook.com/shopify",
        },
        {
          name: "Twitter",
          link: "https://twitter.com/shopify",
        }, 
        {
          name: "Pinterest",
          link: "https://pinterest.com/shopify",
        },  
        {
          name: "Instagram",
          link: "http://instagram.com/shopify",
        },      
      ],
      payments: ["visa", "mastercard", "amex", "discover", "shopify", "paypal"],
      // For available socia share buttons see: https://github.com/nygardk/react-share
      shareButtons: [
        "Facebook",
        "Pinterest",
        "Twitter",
        "Tumblr",
        "Whatsapp",
        "Line",
        "Viber",
      ],
      googleAnalyticsId: "UA-141525658-3",
      shopifyLite: false,
      //
      // carousel, collection, product
      //
      mainPage: [
        {
          type: "carousel",
          children: [
            {
              name: "Jewelery",
              type: "collection",
              handle: "jewelery",
              textColor: "black",
              textBgColor: "white",
            },
            {
              name: "Apparel",
              type: "collection",
              handle: "apparel",
              textColor: "white",
              textBgColor: "primary",
            },
            {
              name: "Silk Summer Top",
              type: "product",
              handle: "silk-summer-top",
              textColor: "white",
              textBgColor: "primary",
            },
          ],
        },
        {
          name: "Apparel",
          type: "collection",
          handle: "apparel",
          textColor: "white",
          textBgColor: "primary",
        },
        {
          name: "Garden",
          type: "collection",
          handle: "garden",
          textColor: "white",
          textBgColor: "primary",
        },
        {
          name: "Test",
          type: "collection",
          handle: "test-collection",
          textColor: "black",
          textBgColor: "white",
        },
        {
          name: "One product",
          type: "product",
          handle: "red-sports-tee",
          textColor: "black",
          textBgColor: "white",
        },
        {
          name: "Anchor Bracelet Mens",
          type: "product",
          handle: "leather-anchor",
          textColor: "black",
          textBgColor: "white",
        },
        {
          name: "Yellow Sofa",
          type: "product",
          handle: "yellow-sofa",
          textColor: "black",
          textBgColor: "white",
        },
        {
          name: "7 Shakra Bracelet",
          type: "product",
          handle: "chain-bracelet",
          textColor: "black",
          textBgColor: "white",
        },
        {
          name: "White Cotton Shirt",
          type: "product",
          handle: "white-cotton-shirt",
          textColor: "white",
          textBgColor: "primary",
        },
      ],
      // Menu types: "header", "collection", "product", "link"
      menu: {
        name: "Menu",
        type: "top",
        children: [
          {
            name: "Home",
            type: "header",
            handle: "/",
            link: "/",
          },
          {
            name: "Products",
            type: "header",
            handle: "products",
            link: "/collections/products",
          },
          {
            name: "About us",
            type: "header",
            handle: "about-us",
            link: "/pages/about-us",
          },
          {
            name: "Articles",
            type: "header",
            handle: "articles",
            link: "/blogs/news",
          },
          {
            name: "FAQ",
            type: "header",
            handle: "faq",
            link: "/pages/faq",
          },
          {
            name: "Theme Info",
            type: "header",
            children: [
              {
                name: "Features",
                type: "header",
                handle: "features",
                link: "/pages/features"
              },
              {
                name: "Style Guide",
                type: "header",
                handle: "style-guide",
                link: "/pages/style-guide"
              },
            ],
          },
        ],
      },
      submenu: {
        name: "Submenu",
        type: "top",
        children: [
          {
            name: "Contact us",
            link: "/pages/contact-us",
          },
          {
            name: "Terms of Service",
            link: "/policies/terms-of-service",
          },
          {
            name: "Privacy",
            link: "/policies/privacy-policy",
          },
          {
            name: "Refund Policy",
            link: "/policies/refund-policy",
          },
        ],
      },
      footerLinks: [
        {
          name: "Contact us",
          link: "/pages/contact-us",
        },
        {
          name: "Terms of Service",
          link: "/policies/terms-of-service",
        },
        {
          name: "Privacy",
          link: "/policies/privacy-policy",
        },
        {
          name: "Refund Policy",
          link: "/policies/refund-policy",
        },
      ],
      locales: "en-US",
      currency: "USD",
      productsPerCollectionPage: "9",
      articlesPerBlogPage: "6",
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    'gatsby-plugin-sass',
    `gatsby-plugin-sharp`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-shopify`,
      options: {
        // The domain name of your Shopify shop. This is required.
        // Example: 'gatsby-source-shopify-test-shop' if your Shopify address is
        // 'gatsby-source-shopify-test-shop.myshopify.com'.
        shopName: process.env.SHOP_NAME,

        // An API access token to your Shopify shop. This is required.
        // You can generate an access token in the "Manage private apps" section
        // of your shop's Apps settings. In the Storefront API section, be sure
        // to select "Allow this app to access your storefront data using the
        // Storefront API".
        // See: https://help.shopify.com/api/custom-storefronts/storefront-api/getting-started#authentication
        accessToken: process.env.SHOPIFY_ACCESS_TOKEN,

        // Set verbose to true to display a verbose output on `npm run develop`
        // or `npm run build`. This prints which nodes are being fetched and how
        // much time was required to fetch and process the data.
        // Defaults to true.
        verbose: true,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        /*
         * The base URL of the WordPress site without the trailingslash and the protocol. This is required.
         * Example : 'dev-gatbsyjswp.pantheonsite.io' or 'www.example-site.com'
         */
        baseUrl: `dev-headless-content.pantheonsite.io`,
        protocol: `https`,
        hostingWPCOM: false,
        useACF: true,
        includedRoutes: [
          '/*/*/categories',
          '/*/*/posts',
          '/*/*/pages',
          '/*/*/media',
          '/*/*/tags',
          '/*/*/taxonomies',
          '/*/*/users',
         '/*/*/menus'
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '~': path.join(__dirname, 'src/'),
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-134421805-1",
        anonymize: true,
        respectDNT: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
