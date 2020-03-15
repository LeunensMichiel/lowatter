import React from "react"
import styled from "@emotion/styled"
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Legionella from "../components/framework/legionella"
import screens from "../components/framework/screens"

import MedDots from "../images/svg/dots/dots-medium.inline.svg"
import colors from "../components/framework/colors"

const Description = styled.div`
  grid-column: 3 / span 4;
  text-align: center;
  font-size: 1.25rem;
  margin-top: 10rem;
  padding-bottom: 5rem;
  z-index: 50;
  text-align: justify;
  @media ${screens.mobileM} {
    grid-column: 2 / span 6;
    padding-bottom: 10rem;
  }
`

const Dots = styled(MedDots)`
  grid-column: 8;
  grid-row: 1 / span 2;
  justify-self: end;
  height: 100%;
  margin-top: 5rem;
  @media ${screens.mobileM} {
    max-width: 50px;
    margin-top: 0;
  }
`

const TermsconditionsPage = ({ data }) => {
  const intl = useIntl()
  return (
    <Layout>
      <SEO
        title="Our Terms and Conditions"
        description="Terms and conditions of LoWatter."
        lang={intl.locale}
      />
      {data.terms.edges.map(term => {
        return (
          term.node.frontmatter.lang === intl.locale && (
            <Description dangerouslySetInnerHTML={{ __html: term.node.html }} />
          )
        )
      })}
      <Dots />
    </Layout>
  )
}

export default TermsconditionsPage

export const query = graphql`
  query TermsQuery {
    terms: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/terms/" } }) {
      edges {
        node {
          frontmatter {
            lang
          }
          html
        }
      }
    }
  }
`
