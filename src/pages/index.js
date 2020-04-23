import React from "react"
import styled from "@emotion/styled"
import { Global, css, keyframes } from "@emotion/core"
import { graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import { useIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Notification from "../components/notification"
import Button from "../components/buttons/button"
import colors from "../components/framework/colors"
import screens from "../components/framework/screens"
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

const swell = keyframes`
  0%, 100% {
    transform: translate3d(0,-6px,0);
    background-size: 100% 600px;

  }
  50% {
    transform: translate3d(0,6px,0);
    background-size: 105% 600px;
  }
`
const swellReverse = keyframes`
  0%, 100% {
    transform: translate3d(0,8px,0);
    background-size: 100% 450px;
  }
  50% {
    transform: translate3d(0,-8px,0);
    background-size: 110% 450px;
  }
`

const swellMed = keyframes`
  0%, 100% {
    transform: translate3d(0,-6px,0);
    background-size: 200% 600px;

  }
  50% {
    transform: translate3d(0,6px,0);
    background-size: 205% 600px;
  }
`
const swellReverseMed = keyframes`
  0%, 100% {
    background-size: 200% 450px;
  }
  50% {
    background-size: 210% 450px;
  }
`

const LandingText = styled.div`
  grid-column: 2 / span 4;
  white-space: pre-wrap;
  margin: 7.5rem 0;
  > h1 {
    max-width: 650px;
  }
  > p {
    max-width: 500px;
    margin-bottom: 3rem;
    color: ${colors.darkAccent};
  }
  z-index: 3;
  @media ${screens.tablet} {
    grid-column: 2 / span 6;
  }
  @media ${screens.mobileM} {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 6.5rem auto;
    width: 90%;
    > h1 {
      font-size: 1.5rem;
    }
  }
  @media ${screens.mobileS} {
    width: 100%;
    > h1 {
      font-size: 1.25rem;
    }
  }
`

const Waves = styled.div`
  grid-column: 1 / span 8;
  width: 100%;
  height: 450px;
  background-image: url(${wave});
  background-repeat: repeat-x;
  background-size: 100% 450px;
  background-position: 50% 100%;
  z-index: 1;
  position: relative;
  margin-bottom: 10rem;
  animation: ${swellReverse} 15s ease-in-out infinite;
  transform: translate3d(0, 0, 0);

  @media ${screens.tablet} {
    animation: ${swellReverseMed} 15s ease-in-out infinite;
  }
  @media ${screens.mobileM} {
    background-size: 150% 250px;
    height: 250px;
    margin-bottom: 5rem;
    animation: none;
  }
`

const UpperWave = styled.div`
  width: 100%;
  height: 600px;
  background-image: url(${upperwave});
  background-repeat: repeat-x;
  background-size: 100% 600px;
  position: absolute;
  top: -60px;
  z-index: 10;
  transform: translate3d(0, 0, 0);
  animation: ${swell} 15s ease-in-out -7s infinite;
  opacity: 1;

  @media ${screens.tablet} {
    animation: ${swellMed} 15s ease-in-out -7s infinite;
  }
  @media ${screens.mobileM} {
    height: 350px;
    background-size: 150% 280px;
    top: -40px;
    animation: none;
  }
`

const LegionellaContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 5;
  top: -450px;
  .water {
    position: absolute;
    right: 0;
  }
  @media ${screens.tablet} {
    top: -400px;
  }
  @media ${screens.mobileM} {
    top: -200px;
    .water {
      top: -220px;
      width: 50%;
    }
  }
  @media ${screens.mobileS} {
    .water {
      top: -200px;
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
  margin-bottom: 5rem;
  transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  &:hover {
    transform: translate(-10px);
  }
`

const BlobRow = styled.div`
  grid-column: ${props => (props.even ? "2 / span 5" : "3 / span 5")};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: ${props => (props.even ? "row-reverse" : "row")};
  margin-bottom: 7.5rem;
  height: 100%;
  position: relative;

  @media ${screens.mobileM} {
    grid-column: 2 / span 6;
    margin-bottom: 5rem;
    flex-direction: column;
    align-items: stretch;
  }
`

const InfoBlobText = styled.article`
  flex-basis: 40%;
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

const InfoBlob = styled.div`
  flex-basis: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  position: relative;
  &:hover > div {
    transform: scale3d(1.05, 1.05, 1.05);
    transition-delay: 0.15s;
  }
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
  transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
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
    opacity: .15;
    z-index: 8;
  }
  `

const ContactUs = styled.section`
  height: 100%;
  min-height: 550px;
  grid-column: 1 / span 8;
  margin-bottom: -2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${contactwave});
  background-repeat: no-repeat;
  background-size: 140% 100%;
  background-position: 50% 50%;
  text-align: center;
  position: relative;
  h2 {
    color: ${colors.white};
    width: 100%;
    max-width: 780px;
  }
  p {
    color: ${colors.darkAccent};
    width: 100%;
    max-width: 750px;
    margin-bottom: 4rem;
  }
  @media ${screens.tablet} {
    background-size: 200% 100%;
    margin-bottom: -3rem;
    h2,
    p {
      max-width: 600px;
    }
  }
  @media ${screens.mobileM} {
    margin-top: 3rem;
    padding: 10rem 16px;
    background-size: 200% 100%;
    min-height: 550px;
    p {
      text-align: justify;
      margin-bottom: 2rem;
    }
  }
  @media ${screens.mobileMLandscape} {
    min-height: 650px;
  }
`

const IndexPage = ({ data }) => {
  const blobs = [<Blob1 />, <Blob2 />, <Blob3 />, <Blob4 />, <Blob5 />]
  const intl = useIntl()
  const currentDate = new Date()
  const beginDate = new Date(data.notification.frontmatter.begindate)
  const endDate = new Date(data.notification.frontmatter.enddate)
  return (
    <Layout>
      <Global
        styles={css`
          .globalfooter {
            background-color: ${colors.black};
            min-height: 320px !important;
            padding-top: 0 !important;
          }
        `}
      />
      <SEO
        title={intl.formatMessage({ id: "seo.indexTitle" })}
        description={intl.formatMessage({ id: "seo.indexDescription" })}
        lang={intl.locale}
      />
      {currentDate >= beginDate && currentDate < endDate && (
        <Notification notification={data.notification.frontmatter} />
      )}
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
        <Legionella width={100} height={28} rotate={-30} top={0} right={-200} />
      </LegionellaSip>
      {data.landing.frontmatter.blobitems
        .filter(blob => blob.lang === intl.locale)
        .map((blob, index) => (
          <React.Fragment key={blob.title}>
            <BlobRow id={`about${index}`} even={index % 2}>
              <InfoBlobText>
                <h2>{blob.title}</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: blob.description,
                  }}
                />
              </InfoBlobText>
              <InfoBlob>
                {blobs[index % 5]}
                <BlobPicture index={index % 5}>
                  <Img
                    fluid={blob.image.childImageSharp.fluid}
                    objectFit="cover"
                    objectPosition="50% 50%"
                    alt={blob.description}
                    loading="eager"
                    title={blob.title}
                    style={{ position: "static" }}
                  />
                </BlobPicture>
              </InfoBlob>
              {index % 5 === 1 && (
                <Legionella width={145} height={50} rotate={-31} top={0} left={-120} />
              )}
              {index % 5 === 3 && (
                <Legionella width={115} height={34} rotate={-51} top={0} right={-250} />
              )}
            </BlobRow>
          </React.Fragment>
        ))}
      <ContactUs>
        <h2>{intl.formatMessage({ id: "index.contactTitle" })}</h2>
        <p>{intl.formatMessage({ id: "index.contactDescription" })}</p>
        <Button
          link="/contact/"
          text={intl.formatMessage({ id: "index.contactUs" })}
          accent
        />
        <Legionella width={125} height={42} rotate={41} bottom={140} right={120} />
      </ContactUs>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    landing: markdownRemark(fileAbsolutePath: { regex: "/markdown/pages/landing/" }) {
      frontmatter {
        title
        blobitems {
          description
          image {
            childImageSharp {
              fluid(maxWidth: 400, quality: 85) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          lang
          title
        }
      }
    }
    notification: markdownRemark(
      fileAbsolutePath: { regex: "/markdown/notification.md/" }
    ) {
      frontmatter {
        descriptionEn
        descriptionNl
        descriptionFr
        enddate
        begindate
        relatedStoryNl
        relatedStoryEn
        relatedStoryFr
        titleEn
        titleNl
        titleFr
      }
    }
  }
`
