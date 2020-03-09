import React from "react"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"
import { graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"

import colors from "../components/framework/colors"
import Layout from "../components/layout"
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
  > p {
    width: 66%;
    margin-bottom: 3rem;
  }
  z-index: 3;
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
`

const LegionellaSip = styled.div`
  grid-column: 4 / span 2;
  position: relative;
  margin-bottom: 10rem;
`

const BlobRow = styled.div`
  grid-column: ${props => (props.even ? "2 / span 5" : "3 / span 5")};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: ${props => (props.even ? "row-reverse" : "row")};
  margin-bottom: 10rem;
  height: 100%;
`

const InfoBlobText = styled.div`
  flex-basis: 40%;
  text-align: ${props => (props.even ? "right" : "left")};
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

const ContactUs = styled.div`
  height: 100%;
  min-height: 800px;
  min-height: 90vh;
  grid-column: 1 / span 8;
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
`

const DotStyle = css`
  grid-column: 1;
  height: 100%;
  max-height: 450px;

  &.bigdots {
    grid-column: 8;
    justify-self: end;
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
        <h1>{"Controlling Legionella\nin tapwater"}</h1>
        <p>Site is nog in opbouw.</p>
        <Button link="#about0" text="Learn more" />
        <Button left={1} link="/contact/" text="Contact us" accent />
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
          <>
            <BlobRow id={`about${index}`} key={blob.title} even={index % 2}>
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
          </>
        ))}
      <ContactUs>
        <h1>Wat kunnen we betekenen voor u?</h1>
        <p>
          Heeft uw gebouw een Legionella probleem? Denkt u dat we iets voor u kunnen
          betekenen of wenst u meer informatie, contacteer ons gerust voor een verkennend
          gesprek. Elke vraag wordt vertrouwelijk behandeld.
        </p>
        <Button left={1} link="/contact/" text="Contacteer ons" accent />
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
