import React from "react"
import styled from "@emotion/styled"
import { useIntl } from "gatsby-plugin-intl"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import colors from "../../components/framework/colors"
import screens from "../../components/framework/screens"
import Legionella from "../../components/framework/legionella"

const Header = styled.h1`
  grid-column: 3 / span 4;
  justify-self: start;
  margin-top: 6.25rem;
  margin-bottom: 1.5rem;
  position: relative;
  font-size: 1.25rem;
  z-index: 2;
  &::after {
    content: "";
    width: 70%;
    height: 8px;
    display: block;
    position: absolute;
    bottom: 3px;
    z-index: -1;
    background: ${colors.gradient};
    border-radius: 3px;
  }
  @media ${screens.mobileM} {
    grid-column: 2 / span 6;
    margin-bottom: 1.5rem;
    font-size: 1.125rem;
  }
`
const Page = styled.article`
  grid-column: 3 / span 4;
  margin-bottom: 10rem;
  p {
    text-align: justify;
    white-space: normal;
    margin: 1.5rem 0;
    .gatsby-resp-image-background-image {
      display: none !important;
    }
    img {
      position: static !important;
      height: auto !important;
      transition-duration: 0.2s !important;
      border-radius: 38px;
      &[alt~="right"] {
        width: 50% !important;
        padding-left: 1rem;
        float: right;
      }
      &[alt~="left"] {
        width: 50% !important;
        float: left;
        padding-right: 1rem;
      }
    }
  }
  @media ${screens.mobileM} {
    grid-column: 2 / span 6;
    article {
      margin: 2rem 0;
    }
    p {
      img {
        &[alt~="right"] {
          width: 100% !important;
          padding-left: 0;
          float: none;
        }
        &[alt~="left"] {
          width: 100% !important;
          float: none;
          padding-right: 0;
        }
      }
    }
  }
`
const LegionellaSip = styled.div`
  grid-column: 1;
  position: relative;
  margin-bottom: 5rem;
`

const AdvicePage = ({ data }) => {
  const intl = useIntl()
  return (
    <Layout>
      <SEO
        title={intl.formatMessage({ id: "seo.adviceTitle" })}
        description={intl.formatMessage({ id: "seo.adviceDescription" })}
        lang={intl.locale}
      />
      {data.files.edges
        .filter(page => page.node.frontmatter.lang === intl.locale)
        .map(page => (
          <React.Fragment key={page.node.frontmatter.lang}>
            <Header>{page.node.frontmatter.title}</Header>
            <Page dangerouslySetInnerHTML={{ __html: page.node.html }} />
          </React.Fragment>
        ))}
      <LegionellaSip>
        <Legionella width={115} height={30} rotate={-11} bottom={20} left={250} />
        <Legionella width={150} height={52} rotate={31} right={220} />
      </LegionellaSip>
    </Layout>
  )
}

export default AdvicePage

export const query = graphql`
  query adviceQuery {
    files: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/markdown/advice/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            lang
          }
          html
        }
      }
    }
  }
`
