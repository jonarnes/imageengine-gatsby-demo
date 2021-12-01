module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My Gatsby Site",
  },
  plugins: [
    "gatsby-plugin-image",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`],
          placeholder: `dominantColor`,
          quality: 50,
          breakpoints: [10,100,200,300,400],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    {
    resolve: `gatsby-source-sanity`,
    options: {
        projectId: `4nqxp2zt`,
        dataset: `production`,
        // a token with read permissions is required
        // if you have a private dataset
        token: process.env.SANITY_TOKEN,

        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: 'default',
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
    resolve: "@imageengine/gatsby-plugin-imageengine",
      options: {
        sources: [
          {
            source: "contentful",
            ie_distribution: "https://some-ie-url.cdn.imgeng.in/"
          },
          {
            source: "sanityio",
            ie_distribution: "https://92aegi3u.cdn.imgeng.in/",
          },
          {source: "file"}
        ],
        ie_distribution: "https://881qcim2.cdn.imgeng.in/",
        directives: {
          fit: "cropbox"
        }      
      }
    }
  ],
};
