import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

export default function IndexPage({ data }) {
  return (
    <GatsbyImage
      image={data.file.childImageEngineAsset.url}
      alt="icon"
    />
  )
}

export const query = graphql`
  query {
    file(name: {eq: "icon"}) {
      childImageEngineAsset {
          gatsbyImageData(width: 500, height: 300)
          url(width: 500, height: 300, compression: 10)
      }
    }
}
`
