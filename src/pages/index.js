import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

export default function IndexPage({ data }) {
  console.log("data: ", data)
  return (
    <GatsbyImage
      image={data.file.childImageEngineAsset.gatsbyImageData}
      alt="icon"
    />
  )
}
/*
export const query = graphql`
  query {
    file(name: {eq: "icon"}) {
      childImageSharp {
        gatsbyImageData(width: 100)
      }
    }
}
`
*/


export const query = graphql`
  query {
    file(name: {eq: "icon"}) {
      childImageEngineAsset {
        url(width: 500, height: 300, compression: 10)
        gatsbyImageData(width: 500, height: 300)

      }
    }
}
`
