import React from "react"
import styled from "@emotion/styled"
import { useIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Legionella from "../components/framework/legionella"

import Blob2 from "../images/svg/blobs/blob2.inline.svg"
import colors from "../components/framework/colors"
import screens from "../components/framework/screens"

const Title = styled.h1`
  grid-column: 3 / span 4;
  text-align: center;
  margin-top: 10rem;
  margin-bottom: 2rem;
  z-index: 3;

  @media ${screens.mobileM} {
    margin-top: 6.25rem;
    grid-column: 2 / span 6;
  }
`

const Description = styled.p`
  grid-column: 3 / span 4;
  text-align: center;
  font-size: 1.25rem;
  z-index: 3;
  padding-bottom: 5rem;

  @media ${screens.mobileM} {
    grid-column: 2 / span 6;
    color: ${colors.darkAccent};
    padding-bottom: 10rem;
    font-size: 1.125rem;
  }
  @media ${screens.mobileMLandscape} {
    color: ${colors.darkAccent};
  }
`

const Blob = styled(Blob2)`
  grid-column: 8;
  grid-row: 1 / span 2;
  justify-self: end;
  margin-top: 10rem;
  margin-right: -10rem;
  width: 300px;
  height: auto;
  position: relative;
  z-index: -1;
  transform: rotate(180deg);
  .stop-color {
    stop-color: ${colors.accent2};
  }
  .alt-color {
    stop-color: ${colors.accent2};
  }
  @media ${screens.mobileM} {
    height: 100%;
    margin-top: 0;
    opacity: 0.5;
  }
`

const ServicesPage = () => {
  const intl = useIntl()
  return (
    <Layout>
      <SEO
        title={intl.formatMessage({ id: "seo.servicesTitle" })}
        description={intl.formatMessage({ id: "seo.servicesDescription" })}
        lang={intl.locale}
      />
      <Blob />
      <Legionella bottom={200} right={250} width={136} height={43} rotate={45} />
      <Title>{intl.formatMessage({ id: "services.title" })}</Title>
      <Description>{intl.formatMessage({ id: "services.description" })}</Description>
    </Layout>
  )
}
export default ServicesPage
