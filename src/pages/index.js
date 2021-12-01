import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import Img from "gatsby-image"
import { graphql } from "gatsby"

export default function IndexPage({ data }) {
  console.log("data: ", data)
  return (
    <div>
    <p>childImageSharp
    <GatsbyImage
      image={data.sharp.childImageSharp.gatsbyImageData}
      alt="childImageSharp"
    />
    </p>
    <p>childImageEngineAsset
    <GatsbyImage
      image={data.ie.childImageEngineAsset.gatsbyImageData}
      alt="childImageEngineAsset"
    />
    </p>
    <p>gatsby-image
    <Img
      fixed={data.img.childImageSharp.fixed}
      objectFit="cover"
      objectPosition="50% 50%"
      alt="gatsby-image"

    />
    </p>
    <p>sanity
    <GatsbyImage
      image={data.sanity.edges[0].node.childImageEngineAsset.gatsbyImageData}
      alt="sanity"
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
        gatsbyImageData(height:200, width:100)
      }
    },
    ie: file(name: {eq: "icon"}) {
      childImageEngineAsset {
        gatsbyImageData(height:200, width:100)
      }
    },
    img: file(name: {eq: "icon"}) {
      childImageSharp {
        fixed(height: 200, width:100) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    sanity:   allSanityImageAsset(
      filter: {id: {eq: "image-0860f9264ca11beb06b7c318afdad1b93d410181-5986x3991-jpg"}}
    ) {
      edges {
        node {
          childImageEngineAsset {
            gatsbyImageData(height: 200,width:100,formats:  [JPG,AVIF, WEBP])
          }
        }
      }
    }
  
}
`