import React from "react"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"
import { graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"

import colors from "../components/framework/colors"
import Layout from "../components/layout"
import screens from "../components/framework/screens"
import SEO from "../components/seo"
import Button from "../components/buttons/button"
import Legionella from "../components/framework/legionella"

import wave from "../images/svg/waves/bottomwaves.svg"
import upperwave from "../images/svg/waves/bottomwaveUpper.svg"
import contactwave from "../images/svg/waves/contactus.svg"
import Water from "../images/svg/waves/waterstream.inline.svg"
import Blob1 from "../images/svg/blobs/blob1.inline.svg"
import Blob2 from "../images/svg/blobs/blob2.inline.svg"
import Blob3 from "../images/svg/blobs/blob3.inline.svg"
import Blob4 from "../images/svg/blobs/blob4.inline.svg"
import Blob5 from "../images/svg/blobs/blob5.inline.svg"
import SmolDots from "../images/svg/dots/dots-smol.inline.svg"
import BigDots from "../images/svg/dots/dots-large.inline.svg"

const LandingText = styled.div`
  grid-column: 2 / span 3;
  white-space: pre-wrap;
  margin: 6.5rem 0;
  > h1 {
    max-width: 550px;
  }
  > p {
    max-width: 360px;
    margin-bottom: 3rem;
    color: ${colors.darkAccent};
  }
  z-index: 3;

  @media ${screens.mobileM} {
    grid-column: 2 / span 6;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    > h1 {
      width: 95%;
      font-size: 2rem;
    }
  }
  @media ${screens.mobileS} {
    > h1 {
      width: 100%;
      font-size: 1.8rem;
    }
  }
`

const Waves = styled.div`
  grid-column: 1 / span 8;
  width: 100%;
  height: 350px;
  background-image: url(${wave});
  background-repeat: no-repeat;
  background-size: 100% 350px;
  background-position: 50% 100%;
  z-index: 1;
  position: relative;
  margin-bottom: 10rem;
  @media ${screens.mobileM} {
    background-size: 100% 200px;
    height: 200px;
    margin-bottom: 5rem;
  }
`

const UpperWave = styled.div`
  width: 100%;
  height: 400px;
  background-image: url(${upperwave});
  background-repeat: no-repeat;
  background-size: 100% 400px;
  position: absolute;
  top: -20px;
  z-index: 10;

  @media ${screens.mobileM} {
    height: 300px;
    background-size: 100% 220px;
  }
`

const LegionellaContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 5;
  top: -480px;
  .water {
    position: absolute;
    right: 0;
  }
  @media ${screens.mobileM} {
    top: -200px;
    .water {
      top: -200px;
      width: 50%;
    }
  }
  @media ${screens.mobileMLandscape} {
    .water {
      top: 0;
    }
  }
  @media ${screens.mobileSLandscape} {
    top: -200px;
    .water {
      top: -280px;
      width: 50%;
    }
  }
`

const LegionellaSip = styled.div`
  grid-column: 4 / span 2;
  position: relative;
  margin-bottom: 10rem;
  @media ${screens.mobileM} {
    margin-bottom: 5rem;
  }
`

const BlobRow = styled.div`
  grid-column: ${props => (props.even ? "2 / span 5" : "3 / span 5")};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: ${props => (props.even ? "row-reverse" : "row")};
  margin-bottom: 10rem;
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
  text-align: ${props => (props.even ? "right" : "left")};
  @media ${screens.mobileM} {
    flex-basis: unset;
  }
`

const InfoBlob = styled.div`
  flex-basis: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  position: relative;
  svg {
    position: absolute;
    height: 100%;
    width: 100%;
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
  max-width: 280px;
  overflow: hidden;
  position: absolute;
  clip-path: url('#clippie${props => props.index + 1}');
  z-index: 5;
  .gatsby-image-wrapper {
    max-height: 400px;
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${colors.gradient};
    opacity: .20;
    z-index: 8;
  }
  `

const ContactUs = styled.section`
  height: 100%;
  min-height: 900px;
  min-height: 95vh;
  grid-column: 1 / span 8;
  margin-bottom: -2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${contactwave});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: 50% 50%;
  text-align: center;
  h1 {
    color: ${colors.white};
    width: 100%;
    max-width: 750px;
  }
  p {
    color: ${colors.darkAccent};
    width: 100%;
    max-width: 750px;
    margin-bottom: 4rem;
  }
  @media ${screens.tablet} {
    h1,
    p {
      max-width: 600px;
    }
  }
  @media ${screens.mobileM} {
    margin-top: 3rem;
    padding: 12rem 16px;
    background-size: 200% 100%;
    p {
      text-align: justify;
      margin-bottom: 2rem;
    }
  }
  @media ${screens.mobileMLandscape} {
    min-height: 650px;
  }
`

const DotStyle = css`
  grid-column: 1;
  height: 100%;
  max-height: 450px;

  &.bigdots {
    grid-column: 8;
    justify-self: end;
  }
  @media ${screens.mobileM} {
    display: none;
  }
`

const IndexPage = ({ data }) => {
  const blobs = [<Blob1 />, <Blob2 />, <Blob3 />, <Blob4 />, <Blob5 />]
  const intl = useIntl()
  return (
    <Layout>
      <Global
        styles={css`
          .globalfooter {
            background-color: ${colors.black};
          }
        `}
      />
      <SEO title="Home" description="Homepage of LoWatter" lang={intl.locale} />
      <LandingText>
        <h1>{intl.formatMessage({ id: "index.title" })}</h1>
        <p>{intl.formatMessage({ id: "index.subtitle" })}</p>
        <Button link="#about0" text={intl.formatMessage({ id: "index.learnMore" })} />
        <Button
          left={1}
          link="/contact/"
          text={intl.formatMessage({ id: "index.contactUs" })}
          accent
        />
      </LandingText>
      <Waves>
        <LegionellaContainer>
          <Water className="water" />
          <Legionella width={135} height={53} rotate={-13} top={380} right={400} />
          <Legionella width={190} height={72} rotate={-30} top={390} right={320} />
          <Legionella width={220} height={84} rotate={-36} top={200} right={-50} />
          <Legionella width={206} height={83} rotate={-50} top={480} right={50} />
          <Legionella width={162} height={51} rotate={-56} top={200} right={150} />
          <Legionella width={168} height={49} rotate={-53} top={400} right={530} />
          <Legionella width={123} height={55} rotate={-23} top={600} right={570} />
          <Legionella width={165} height={74} rotate={-41} top={570} right={650} />
          <Legionella width={125} height={45} rotate={-34} top={570} right={350} />
          <Legionella width={181} height={59} rotate={24} top={560} right={360} />
        </LegionellaContainer>
        <UpperWave />
      </Waves>
      <LegionellaSip>
        <Legionella width={115} height={32} rotate={21} top={0} right={0} />
      </LegionellaSip>
      {data.landing.frontmatter.blobitems
        .filter(blob => blob.lang === intl.locale)
        .map((blob, index) => (
          <React.Fragment key={blob.title}>
            <BlobRow id={`about${index}`} even={index % 2}>
              <InfoBlobText even={index % 2}>
                <h2>{blob.title}</h2>
                <p>{blob.description}</p>
              </InfoBlobText>
              <InfoBlob>
                {blobs[index % 5]}
                <BlobPicture index={index % 5}>
                  <Img
                    fluid={blob.image.childImageSharp.fluid}
                    objectFit="cover"
                    objectPosition="50% 50%"
                    alt={blob.description}
                    title={blob.title}
                    style={{ position: "static" }}
                  />
                </BlobPicture>
              </InfoBlob>
            </BlobRow>
            {index % 5 === 1 && <BigDots className="bigdots" css={DotStyle} />}
            {index % 5 === 2 && <SmolDots css={DotStyle} />}
          </React.Fragment>
        ))}
      <ContactUs>
        <h1>{intl.formatMessage({ id: "index.contactTitle" })}</h1>
        <p>{intl.formatMessage({ id: "index.contactDescription" })}</p>
        <Button
          link="/contact/"
          text={intl.formatMessage({ id: "index.contactUs" })}
          accent
        />
      </ContactUs>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    landing: markdownRemark(fileAbsolutePath: { regex: "/pages/landing/" }) {
      frontmatter {
        title
        blobitems {
          description
          image {
            childImageSharp {
              fluid(maxWidth: 700, quality: 80) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          lang
          title
        }
      }
    }
  }
`
