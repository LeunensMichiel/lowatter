import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"
import colors from "../components/framework/colors"
import Legionella from "../components/framework/legionella"

import Blob9 from "../images/svg/blobs/blob9.svg"

const BlobContainer = styled.div`
  width: 80%;
  height: 100%;
  margin-top: 4.5rem;
  padding: 8.75rem 0;
  grid-column: 3 / span 4;
  justify-self: center;
  text-align: center;
  background-image: url(${Blob9});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: 50% 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  h1 {
    color: ${colors.white};
    font-size: 4.5rem;
  }
  h2 {
    color: ${colors.darkAccent};
  }
`
const ThanksPage = () => (
  <Layout>
    <SEO title="Thank you" />
    <BlobContainer>
      <h1>Thanks!</h1>
      <h2>We'll be in touch soon.</h2>
    </BlobContainer>
  </Layout>
)

export default ThanksPage
