import React from "react"
import styled from "@emotion/styled"
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"
import colors from "../components/framework/colors"
import Legionella from "../components/framework/legionella"
import screens from "../components/framework/screens"

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

  @media ${screens.mobileM} {
    width: 100%;
    grid-column: 2 / span 6;
    margin-top: 2.5rem;
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 1.5rem;
    }
  }
`
const ThanksPage = () => {
  const intl = useIntl()
  return (
    <Layout>
      <SEO title="Thank you" lang={intl.locale} />
      <BlobContainer>
        <h1>Thanks!</h1>
        <h2>We'll be in touch soon.</h2>
      </BlobContainer>
    </Layout>
  )
}

export default ThanksPage
