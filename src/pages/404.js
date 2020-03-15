import React from "react"
import styled from "@emotion/styled"
import { useIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"
import colors from "../components/framework/colors"
import Legionella from "../components/framework/legionella"

import Blob9 from "../images/svg/blobs/blob9.svg"
import screens from "../components/framework/screens"

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

const LegionellaSip = styled.div`
  grid-column: 4 / span 2;
  position: relative;
`

const NotFoundPage = () => {
  const intl = useIntl()
  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: "seo.404" })} lang={intl.locale} />
      <BlobContainer>
        <h1>{intl.formatMessage({ id: "404.title" })}</h1>
        <h2>{intl.formatMessage({ id: "404.subtitle" })}</h2>
      </BlobContainer>
      <LegionellaSip>
        <Legionella width={115} height={32} rotate={21} bottom={-50} left={0} />
      </LegionellaSip>
    </Layout>
  )
}

export default NotFoundPage
