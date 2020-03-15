import React from "react"
import styled from "@emotion/styled"
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

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
  }
`

const Blob = styled(Blob2)`
  grid-column: 8;
  grid-row: 1 / span 2;
  justify-self: end;
  height: 100%;
  margin-top: 4rem;
  margin-right: -10rem;
  width: 300px;
  z-index: 1;
  transform: rotate(180deg);
  .stop-color {
    stop-color: ${colors.accent2};
  }
  .alt-color {
    stop-color: ${colors.accent2};
  }
`

const ServicesPage = ({ data }) => {
  const intl = useIntl()
  return (
    <Layout>
      <SEO title="Our Services" description="Consultancy and advice of LoWatter." />
      <Title>More Info Coming Soon!</Title>'
      <Description>
        LoWatter provides case specific knowledge through consultancy on either
        disinfection or energy savings with a Legionella pneumophila predicting simulation
        model in order to lower the energy use, cost and infection risk during production,
        storage and distribution of domestic hot water.
      </Description>
      <Blob />
    </Layout>
  )
}
export default ServicesPage
