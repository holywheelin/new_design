/* eslint-disable quotes */
module.exports = {
  siteMetadata: {
    title: `HolyWheelin' Official Site`,
    googleVerification: `abcdefz`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
        head: false,
        anonymize: true,
        respectDNT: true,
        // icon: 'public/icons/icon-144x144.png',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `HolyWheelin' Official Site`,
        short_name: `HolyWheelin' Official Site`,
        start_url: `/`,
        background_color: `#eae7cd`,
        theme_color: `#eae7cd`,
        display: `minimal-ui`,
      },
    },
    // `gatsby-plugin-offline`,
  ],
};
