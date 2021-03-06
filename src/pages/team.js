import React from "react"
import styled from "@emotion/styled"
import Img from "gatsby-image/withIEPolyfill"
import { graphql } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"

import colors from "../components/framework/colors"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Legionella from "../components/framework/legionella"
import screens from "../components/framework/screens"

import LinkedIn from "../images/svg/linkedin.inline.svg"
import Ugent from "../images/svg/ugent-icon.inline.svg"
import Blob6 from "../images/svg/blobs/blob6.inline.svg"
import Blob7 from "../images/svg/blobs/blob7.inline.svg"
import Blob8 from "../images/svg/blobs/blob8.inline.svg"

const Title = styled.h1`
  grid-column: 2 / span 4;
  margin-top: 6.25rem;
  font-size: 1.25rem;
  justify-self: start;
  position: relative;
  &::after {
    content: "";
    width: 70%;
    height: 8px;
    display: block;
    position: absolute;
    bottom: 5px;
    background: ${colors.gradient};
    z-index: -2;
    border-radius: 3px;
  }
  @media ${screens.tablet} {
    grid-column: 2 / span 6;
  }
`

const CardBase = styled.div`
  margin: 3rem 0;
  grid-column: ${props => (props.even ? "2 / span 5" : "3 / span 5")};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 620px;
  &:last-of-type {
    margin-bottom: 10rem;
  }
  > svg {
    width: 103%;
    height: 107%;
  }
  @media ${screens.tablet} {
    grid-column: 2 / span 6;
    height: 520px;
  }
  @media ${screens.laptop} {
    height: 600px;
  }
  @media ${screens.mobileM} {
    grid-column: 1 / span 8;
    margin: 2rem 0;
    height: unset;
    min-height: 600px;
    > svg {
      height: 600px;
    }
  }
`

const Card = styled.section`
  display: grid;
  grid-template-columns: 2fr 3fr;
  position: relative;
  border-radius: 50px;
  z-index: 20;
  height: auto;
  box-shadow: 0px 2px 25px rgba(0, 0, 0, 0.1);
  transition: box-shadow 1s cubic-bezier(0.19, 1, 0.22, 1);

  &:hover {
    box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.15);
  }
  @media ${screens.mobileM} {
    display: flex;
    flex-direction: column;
    width: calc(100% - 32px);
  }
`

const CardInfo = styled.aside`
  background: ${colors.gradient};
  grid-column: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: 50px;
  border-top-left-radius: 50px;

  @media ${screens.mobileM} {
    border-top-right-radius: 50px;
    border-bottom-left-radius: 0;
  }
`

const CardInfoDetails = styled.div`
  padding: 1rem 2.25rem;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  height: 100%;
  h3 {
    color: ${colors.white};
    margin-bottom: 0;
  }
  h4 {
    color: ${colors.darkAccent};
    margin-bottom: 1.125rem;
  }
  p {
    color: ${colors.darkAccent};
    font-size: 0.875rem;
    line-height: 1;
  }
  .social__icons {
    display: flex;
    align-items: center;
    margin-top: auto;
    a {
      display: block;
      width: 33px;
      margin-right: 16px;
      &:hover,
      &:focus {
        svg {
          fill: ${colors.white} !important;
        }
      }
      svg {
        transition: fill 0.3s cubic-bezier(0.19, 1, 0.22, 1);
        fill: ${colors.darkAccent};
      }
    }
  }
  @media ${screens.tablet} {
    padding: 1rem 1.5rem;
    h4 {
      margin-bottom: 1rem;
    }
    p {
      font-size: 0.7rem;
      margin-bottom: 1rem;
    }
    .social__icons {
      a {
        margin-right: 8px;
      }
      svg {
        width: 25px;
      }
    }
  }
`

const ProfilePic = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  .gatsby-image-wrapper {
    position: absolute !important;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  img {
    border-top-left-radius: 50px;
  }
  @media ${screens.mobileM} {
    padding-bottom: 66%;
    img {
      border-top-right-radius: 50px;
    }
  }
`

const CardBody = styled.article`
  grid-column: 2;
  border-bottom-right-radius: 50px;
  border-top-right-radius: 50px;
  background: ${colors.white};
  padding: 2rem 1.25rem;

  div {
    max-height: 550px;
    overflow-y: auto;
    padding: 0 1rem;

    p {
      text-align: justify;
      hyphens: auto;
    }
  }
  @media ${screens.tablet} {
    padding: 1.5rem;
    font-size: 0.875rem;
  }
  @media ${screens.mobileM} {
    border-top-right-radius: 0;
    border-bottom-left-radius: 50px;
    div {
      padding: 0;
      max-height: 300px;
    }
  }
`
const TeamPage = ({ data }) => {
  const blobs = [
    <Blob6 style={{ position: "absolute" }} />,
    <Blob7 style={{ position: "absolute" }} />,
    <Blob8 style={{ position: "absolute" }} />,
  ]
  const intl = useIntl()
  return (
    <Layout>
      <SEO
        title={intl.formatMessage({ id: "seo.teamTitle" })}
        description={intl.formatMessage({ id: "seo.teamDescription" })}
        lang={intl.locale}
      />
      <Title>{intl.formatMessage({ id: "team.title" })}</Title>
      <Legionella width={115} height={32} rotate={21} top={100} right={200} />
      {data.team.frontmatter.teamcards
        .filter(person => person.lang === intl.locale)
        .map((person, index) => (
          <CardBase even={index % 2 === 0} key={person.name}>
            {blobs[index % 3]}
            <Card>
              <CardInfo>
                <ProfilePic>
                  <Img
                    fluid={person.image.childImageSharp.fluid}
                    objectFit="cover"
                    objectPosition="50% 50%"
                    alt={person.name}
                    loading="eager"
                    title={person.name}
                  />
                </ProfilePic>
                <CardInfoDetails>
                  <h3>{person.name}</h3>
                  <h4>{person.subtitle}</h4>
                  <p>{person.description}</p>
                  <div className="social__icons">
                    <a href={person.linkedIn} target="_blank" rel="noopener noreferrer">
                      <LinkedIn />
                    </a>
                    <a href={person.ugent} target="_blank" rel="noopener noreferrer">
                      <Ugent />
                    </a>
                  </div>
                </CardInfoDetails>
              </CardInfo>
              <CardBody>
                <div dangerouslySetInnerHTML={{ __html: person.bio }} />
              </CardBody>
            </Card>
            {index % 5 === 0 && (
              <Legionella
                width={194}
                height={68}
                rotate={41}
                bottom={-100}
                right={-300}
              />
            )}
            {index % 5 === 1 && (
              <Legionella
                width={173}
                height={55}
                rotate={-47}
                bottom={-100}
                left={-400}
              />
            )}
            {index % 5 === 2 && (
              <Legionella width={123} height={34} rotate={12} bottom={0} right={-250} />
            )}
          </CardBase>
        ))}
    </Layout>
  )
}
export default TeamPage

export const query = graphql`
  query TeamQuery {
    team: markdownRemark(fileAbsolutePath: { regex: "/markdown/pages/team/" }) {
      frontmatter {
        teamcards {
          bio
          description
          lang
          linkedIn
          ugent
          name
          number
          subtitle
          image {
            childImageSharp {
              fluid(maxWidth: 600, quality: 80) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`
