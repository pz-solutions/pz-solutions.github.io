module.exports = {
  siteMetadata: {
    title: "PZ Solutions",
    author: "Piotr Żabówka",
    description: "PZ Solutions by Piotr Żabówka"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'pz-solutions-website',
        short_name: 'pz-solutions',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
