module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My Gatsby Site",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
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
	  ie_distribution: "https://another-ie-url.cdn.imgeng.in/"
	},
	{source: "file"}
      ],
      ie_distribution: "https://yet-another-ie-url.cdn.imgeng.in/"
    }
  }
  ],
};
