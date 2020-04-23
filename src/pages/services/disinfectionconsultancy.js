import React from "react"
import styled from "@emotion/styled"
import { useIntl } from "gatsby-plugin-intl"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import colors from "../../components/framework/colors"
import screens from "../../components/framework/screens"
import Legionella from "../../components/framework/legionella"

import Blob1 from "../../images/svg/blobs/blob1.inline.svg"
import Blob2 from "../../images/svg/blobs/blob2.inline.svg"
import Blob3 from "../../images/svg/blobs/blob3.inline.svg"
import Blob4 from "../../images/svg/blobs/blob4.inline.svg"
import Blob5 from "../../images/svg/blobs/blob5.inline.svg"
import Chevron from "../../images/svg/chevron__right.inline.svg"

const Header = styled.h1`
  grid-column: 3 / span 4;
  justify-self: start;
  margin-top: 6.25rem;
  margin-bottom: 4rem;
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
const BlobRow = styled.div`
  grid-column: ${props => (props.even ? "2 / span 5" : "3 / span 5")};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: ${props => (props.even ? "row-reverse" : "row")};
  height: 100%;

  @media ${screens.mobileM} {
    grid-column: 2 / span 6;
    margin-bottom: 5rem;
    flex-direction: column;
    align-items: stretch;
  }
`

const InfoBlobText = styled.article`
  flex-basis: 40%;
  h2 {
    font-size: 1.125rem;
  }
  h3 {
    font-size: 1rem;
    margin-bottom: 0;
    font-weight: 400;
  }
  p {
    text-align: justify;
    hyphens: auto;
  }
  strong {
    color: ${colors.accent};
  }
  @media ${screens.mobileM} {
    flex-basis: unset;
  }
`

const InfoBlob = styled.aside`
  flex-basis: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 220px;
  position: relative;
  &:hover > div {
    transform: scale3d(1.02, 1.02, 1.02);
    transition-delay: 0.15s;
  }
  svg {
    position: absolute;
    height: 220px;
    width: 220px;
    transform: rotate(90deg);
    z-index: 4;
  }
  @media ${screens.mobileM} {
    flex-basis: unset;
  }
`
const BlobPicture = styled.div`
  height: 100%;
  width: 100%;
  max-width: 220px;
  overflow: hidden;
  position: absolute;
  clip-path: url('#clippie${props => props.index + 1}');
  z-index: 5;
  transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${colors.accent};
    opacity: .15;
    z-index: 8;
  }
  `
const StyledChevron = styled(Chevron)`
  grid-column: 2 / span 6;
  justify-self: center;
  width: 50px;
  height: 50px;
  fill: ${colors.purple};
  transform: rotate(90deg);
  opacity: 0.33;
  margin-bottom: 2rem;

  &:last-of-type {
    visibility: hidden;
    margin-bottom: 10rem;
  }
`

const LegionellaSip = styled.div`
  grid-column: 2 / span6;
  position: relative;
  margin-bottom: 5rem;
`

const DisinfectionPage = ({ data }) => {
  const intl = useIntl()
  const blobs = [<Blob1 />, <Blob2 />, <Blob3 />, <Blob4 />, <Blob5 />]
  return (
    <Layout>
      <SEO
        title={intl.formatMessage({ id: "seo.disinfectionTitle" })}
        description={intl.formatMessage({ id: "seo.disinfectionDescription" })}
        lang={intl.locale}
      />
      {data.disinfections.edges
        .filter(disinfection => disinfection.node.frontmatter.lang === intl.locale)
        .map(filteredDisinfection => (
          <React.Fragment key={filteredDisinfection.node.frontmatter.lang}>
            <Header>{filteredDisinfection.node.frontmatter.title}</Header>
            {filteredDisinfection.node.frontmatter.steps.map((step, index) => (
              <React.Fragment key={filteredDisinfection.node.frontmatter.steptitle}>
                <BlobRow even={index % 2}>
                  <InfoBlobText>
                    <h3>{`${intl.formatMessage({ id: "desinfection.step" })} ${index +
                      1}`}</h3>
                    <h2>{step.steptitle}</h2>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: step.description,
                      }}
                    />
                  </InfoBlobText>
                  <InfoBlob>
                    {blobs[index % 5]}
                    <BlobPicture index={index % 5}>
                      <Img
                        fluid={step.image.childImageSharp.fluid}
                        objectFit="cover"
                        objectPosition="50% 50%"
                        alt={step.title}
                        loading="eager"
                        title={step.title}
                        style={{ position: "static" }}
                      />
                    </BlobPicture>
                  </InfoBlob>
                </BlobRow>
                <StyledChevron />
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
      <LegionellaSip>
        <Legionella width={115} height={30} rotate={-11} bottom={20} left={150} />
        <Legionella width={150} height={52} rotate={31} right={320} />
      </LegionellaSip>
    </Layout>
  )
}

export default DisinfectionPage

export const query = graphql`
  query disinfectionquery {
    disinfections: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/markdown/disinfection/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            lang
            steps {
              steptitle
              description
              image {
                childImageSharp {
                  fluid(maxWidth: 400, quality: 85) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
