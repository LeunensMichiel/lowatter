import React from "react"
import styled from "@emotion/styled"
import { useIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Legionella from "../components/framework/legionella"
import screens from "../components/framework/screens"

import MedDots from "../images/svg/dots/dots-medium.inline.svg"
import colors from "../components/framework/colors"

const Title = styled.h1`
  grid-column: 3 / span 4;
  text-align: center;
  margin-top: 10rem;
  margin-bottom: 2rem;
  z-index: 50;

  @media ${screens.mobileM} {
    margin-top: 6.25rem;
    grid-column: 2 / span 6;
  }
`

const Description = styled.p`
  grid-column: 3 / span 4;
  text-align: center;
  font-size: 1.25rem;
  padding-bottom: 5rem;
  z-index: 50;

  @media ${screens.mobileM} {
    grid-column: 2 / span 6;
    padding-bottom: 10rem;
    color: ${colors.darkAccent};
  }
  @media ${screens.mobileMLandscape} {
    color: ${colors.darkAccent};
  }
`

const Dots = styled(MedDots)`
  grid-column: 8;
  grid-row: 1 / span 2;
  justify-self: end;
  margin-top: 10rem;
  @media ${screens.mobileM} {
    max-width: 50px;
    margin-top: 0;
    height: 100%;
  }
`

const ProductPage = ({ data }) => {
  const intl = useIntl()
  return (
    <Layout>
      <SEO
        title={intl.formatMessage({ id: "seo.productTitle" })}
        description={intl.formatMessage({ id: "seo.productsDescription" })}
        lang={intl.locale}
      />
      <Title>{intl.formatMessage({ id: "product.title" })}</Title>
      <Description>{intl.formatMessage({ id: "product.description" })}</Description>
      <Dots />
      <Legionella bottom={200} left={250} width={136} height={43} rotate={-55} />
    </Layout>
  )
}
export default ProductPage
