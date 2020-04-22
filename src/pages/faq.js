import React from "react"
import styled from "@emotion/styled"
import { useIntl } from "gatsby-plugin-intl"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import colors from "../components/framework/colors"
import screens from "../components/framework/screens"
import Accordion from "../components/accordion"

const FaqTitle = styled.h1`
  grid-column: 4 / span 2;
  text-align: center;
  margin-top: 6.25rem;
  margin-bottom: 1.5rem;
  font-size: 1.25rem;
  color: ${colors.darkAccent};
  transition: 0.4s;
  @media ${screens.mobileM} {
    grid-column: 2 / span 6;
    font-size: 1.125rem;
  }
`

const Faq = styled.section`
  grid-column: 3 / span 4;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 6.25rem;

  h2 {
    align-self: flex-start;
    font-size: 1.125rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    position: relative;
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
      font-size: 1rem;
    }
  }
  @media ${screens.mobileM} {
    grid-column: 2 / span 6;
  }
`

const FaqPage = ({ data }) => {
  const intl = useIntl()

  return (
    <Layout>
      <SEO
        title={intl.formatMessage({ id: "seo.faqTitle" })}
        description={intl.formatMessage({ id: "seo.faqDescription" })}
        lang={intl.locale}
      />
      <FaqTitle>{intl.formatMessage({ id: "faq.title" })}</FaqTitle>
      <Faq>
        {data.faqs.edges
          .filter(faq => faq.node.frontmatter.lang === intl.locale)
          .map(filteredFaq => (
            <React.Fragment key={filteredFaq.node.frontmatter.title}>
              <h2>{filteredFaq.node.frontmatter.title}</h2>
              {filteredFaq.node.frontmatter.faqitems.map(faqitem => (
                <Accordion title={faqitem.question} description={faqitem.answer} />
              ))}
            </React.Fragment>
          ))}
      </Faq>
    </Layout>
  )
}

export default FaqPage

export const query = graphql`
  query faqquery {
    faqs: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/markdown/faq/" } }
      sort: { fields: frontmatter___rang }
    ) {
      edges {
        node {
          frontmatter {
            title
            lang
            rang
            faqitems {
              answer
              question
            }
          }
        }
      }
    }
  }
`
