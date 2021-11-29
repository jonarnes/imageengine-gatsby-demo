import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

export default function IndexPage({ data }) {
  console.log("data: ", data)
  return (
    <div>
    <p>childImageSharp
    <GatsbyImage
      image={data.sharp.childImageSharp.gatsbyImageData}
      alt="icon"
    />
    </p>
    <p>childImageEngineAsset
    <GatsbyImage
      image={data.ie.childImageEngineAsset.gatsbyImageData}
      alt="icon"
    />
    </p>
    </div>
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
    sharp: file(name: {eq: "icon"}) {
      childImageSharp {
        gatsbyImageData(width: 500, height: 300)
      }
    },
    ie: file(name: {eq: "icon"}) {
      childImageEngineAsset {
        gatsbyImageData(width: 500, height: 300)
      }
    }
}
`
