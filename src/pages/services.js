import React from "react"
import styled from "@emotion/styled"
import { useIntl, Link } from "gatsby-plugin-intl"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Legionella from "../components/framework/legionella"
import colors from "../components/framework/colors"
import screens from "../components/framework/screens"
import Button from "../components/buttons/button"

import Chevron from "../images/svg/chevron__right.inline.svg"
import Blob1 from "../images/svg/blobs/blob1.inline.svg"
import Blob2 from "../images/svg/blobs/blob2.inline.svg"
import Blob3 from "../images/svg/blobs/blob3.inline.svg"
import Blob4 from "../images/svg/blobs/blob4.inline.svg"
import Blob5 from "../images/svg/blobs/blob5.inline.svg"

const ServiceTitle = styled.h1`
  grid-column: 4 / span 2;
  text-align: center;
  margin-top: 6.25rem;
  font-size: 1.25rem;
  color: ${colors.darkAccent};

  @media ${screens.tablet} {
    font-size: 1.125rem;
    grid-column: 2 / span 6;
  }
`

const ProductGrid = styled.section`
  grid-column: 2 / span 6;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 32px;
  grid-row-gap: 5rem;
  margin: 2rem 0;
  @media ${screens.tablet} {
    grid-column-gap: 16px;
  }
`

const ProductGridItem = styled.div`
  height: 100%;
  position: relative;

  > svg {
    width: 350px;
    height: 350px;
    position: absolute;
    z-index: -1;
    left: ${props => (props.index % 3 === 0 ? -32 : props.index % 3 === 1 ? 0 : 64)}px;
    bottom: ${props =>
      props.index % 3 === 0 ? -32 : props.index % 3 === 1 ? 54 : -32}px;
  }
  @media ${screens.tablet} {
    > svg {
      width: 300px;
      height: 300px;
    }
  }
  @media ${screens.mobileM} {
    grid-column: span 3;
    > svg {
      left: ${props => (props.index % 3 === 0 ? -16 : props.index % 3 === 1 ? 0 : 32)}px;
      bottom: ${props =>
        props.index % 3 === 0 ? -16 : props.index % 3 === 1 ? 16 : -16}px;
    }
  }
`

const ProductCard = styled.article`
  width: 100%;
  height: 100%;
  background: ${colors.white};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05), 0px 4px 25px rgba(0, 0, 0, 0.05);
  border-radius: 38px;
  transition: box-shadow 0.5s ease-out;
  &:hover {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1), 0px 4px 25px rgba(0, 0, 0, 0.15);
  }
`

const ProductCardHeader = styled.header`
  width: 100%;
  height: 150px;
  padding: 1.5rem;
  background: ${colors.darkAccent};
  display: flex;
  position: relative;
  align-items: flex-end;
  z-index: 1;
  border-top-left-radius: 38px;
  border-top-right-radius: 38px;

  h2 {
    color: ${colors.white};
    font-size: 1.125rem;
    margin-bottom: 0;
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
  }
  .gatsby-image-wrapper {
    img {
      filter: brightness(0.9);
    }
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: ${colors.accent};
      opacity: 0.15;
      z-index: 1;
      border-top-left-radius: 38px;
      border-top-right-radius: 38px;
    }
  }
  @media ${screens.tablet} {
    padding: 1rem;
    h2 {
      font-size: 0.875rem;
    }
  }
`

const ProductCardBody = styled.div`
  width: 100%;
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background: ${colors.white};
  border-bottom-left-radius: 38px;
  border-bottom-right-radius: 38px;
  p {
    font-size: 1rem;
  }
  a {
    display: inline-block;
    font-size: 1.125rem;
    svg {
      vertical-align: baseline;
      margin-left: 4px;
      height: 11px;
      fill: ${colors.black} !important;
      transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
    }
    &:hover {
      svg {
        fill: ${colors.accent2} !important;
      }
    }
  }
  @media ${screens.tablet} {
    padding: 1rem;
    p {
      font-size: 0.9rem;
    }
    a {
      font-size: 1rem;
    }
  }
`

const Faq = styled.section`
  grid-column: 4 / span 2;
  display: flex;
  justify-content: center;
  margin-bottom: 10rem;
  @media ${screens.mobileM} {
    grid-column: 2 / span 6;
  }
`

const LegionellaSip = styled.div`
  grid-column: 2 / span 6;
  position: relative;
  margin-bottom: 5rem;
`

const ServicesPage = ({ data }) => {
  const intl = useIntl()
  const blobs = [<Blob3 />, <Blob4 />, <Blob1 />, <Blob5 />, <Blob2 />]
  return (
    <Layout>
      <SEO
        title={intl.formatMessage({ id: "seo.servicesTitle" })}
        description={intl.formatMessage({ id: "seo.servicesDescription" })}
        lang={intl.locale}
      />
      <ServiceTitle>{intl.formatMessage({ id: "services.title" })}</ServiceTitle>
      <ProductGrid>
        {data.services.edges
          .filter(service => service.node.frontmatter.lang === intl.locale)
          .map((filteredService, index) => (
            <ProductGridItem index={index}>
              {blobs[index % 5]}
              <ProductCard>
                <ProductCardHeader>
                  <Img
                    fluid={filteredService.node.frontmatter.image.childImageSharp.fluid}
                    objectFit="cover"
                    objectPosition="50% 50%"
                    alt={filteredService.node.frontmatter.title}
                    loading="eager"
                    title={filteredService.node.frontmatter.title}
                    style={{ position: "static" }}
                    imgStyle={{
                      borderTopLeftRadius: "38px",
                      borderTopRightRadius: "38px",
                    }}
                  />
                  <h2>{filteredService.node.frontmatter.title}</h2>
                </ProductCardHeader>
                <ProductCardBody>
                  <p>{filteredService.node.frontmatter.description}</p>
                  <Link to={`/services/${filteredService.node.frontmatter.url}/`}>
                    {filteredService.node.frontmatter.button} <Chevron />
                  </Link>
                </ProductCardBody>
              </ProductCard>
            </ProductGridItem>
          ))}
      </ProductGrid>
      <ServiceTitle>{intl.formatMessage({ id: "faq.title" })}</ServiceTitle>
      <Faq>
        <Button link="/faq/" text={intl.formatMessage({ id: "services.faqButton" })} />
      </Faq>
      <LegionellaSip>
        <Legionella width={125} height={42} rotate={41} bottom={40} right={0} />
        <Legionella width={200} height={62} rotate={-31} bottom={50} left={20} />
        <Legionella width={85} height={30} rotate={11} bottom={20} right={150} />
      </LegionellaSip>
    </Layout>
  )
}
export default ServicesPage

export const query = graphql`
  query servicesquery {
    services: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/markdown/services/" } }
      sort: { fields: frontmatter___rang }
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            lang
            url
            rang
            button
            image {
              childImageSharp {
                fluid(maxWidth: 400, quality: 75) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
