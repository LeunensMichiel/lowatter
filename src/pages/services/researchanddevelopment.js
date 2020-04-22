import React from "react"
import styled from "@emotion/styled"
import { useIntl } from "gatsby-plugin-intl"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import colors from "../../components/framework/colors"
import screens from "../../components/framework/screens"

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
const ResearchDevelopmentPage = ({ data }) => {
  const intl = useIntl()
  return (
    <Layout>
      <SEO
        title={intl.formatMessage({ id: "seo.r&dTitle" })}
        description={intl.formatMessage({ id: "seo.r&dDescription" })}
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
    </Layout>
  )
}

export default ResearchDevelopmentPage

export const query = graphql`
  query rndQuery {
    files: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/markdown/rnd/" } }) {
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
