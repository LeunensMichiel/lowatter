import React, { useState } from "react"
import styled from "@emotion/styled"
import { graphql } from "gatsby"
import { FormattedDate, useIntl } from "gatsby-plugin-intl"
import Modal from "react-modal"

import colors from "../components/framework/colors"
import Layout from "../components/layout"
import Story from "../components/story"
import SEO from "../components/seo"
import screens from "../components/framework/screens"
import Legionella from "../components/framework/legionella"

import Blob1 from "../images/svg/blobs/bgBlob.inline.svg"
import Blob2 from "../images/svg/blobs/bgBlob2.inline.svg"
import Blob3 from "../images/svg/blobs/bgBlob3.inline.svg"
import Blob4 from "../images/svg/blobs/bgBlob4.inline.svg"
import Blob5 from "../images/svg/blobs/bgBlob5.inline.svg"
import Cross from "../images/svg/cross.inline.svg"

const TimelineContainer = styled.div`
  grid-column: 2 / span 6;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 6.25rem 0;
  &:after {
    background: ${colors.gradientReverse};
    content: "";
    position: absolute;
    left: calc(50% - 2px);
    width: 4px;
    height: 100%;
    border-radius: 4px;
    z-index: -1;
  }

  @media ${screens.mobileM} {
    margin: 6.25rem 0;
    &:after {
      left: calc(100% - 32px);
    }
  }
`

const TimelineItem = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  width: 50%;
  margin: -0.5rem 0;
  padding-right: 134px;

  .blob {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(50% - 3rem);
    right: -11.5rem;
    padding: 1.5rem;
    svg {
      width: 100%;
      position: absolute;
      z-index: 2;
      fill: ${props => (props.isMilestone ? colors.purple : colors.accent)};
    }
    span {
      z-index: 4;
      color: ${colors.white};
      font-size: 1.5rem;
      font-weight: 600;
      &:first-of-type {
        font-size: 0.9rem;
      }
    }
  }

  &:nth-of-type(odd) {
    padding-left: 134px;
    padding-right: 0;
    align-self: flex-end;
    > div:not(.legionella) {
      background: ${props => (props.isMilestone ? colors.purple : colors.accent2)};
      text-align: right;
      align-items: flex-end;
      border-radius: 82px 35px;
      .blob {
        right: auto;
        left: -11.5rem;
        svg {
          ${props => (props.isMilestone ? colors.purple : colors.accent2)};
        }
      }
      &:after {
        background: ${props => (props.isMilestone ? colors.purple : colors.accent2)};
        right: auto;
        left: -7.5px;
      }
    }
  }

  @media ${screens.mobileM} {
    width: 100%;
    margin: 0.5rem 0;
    padding-right: 72px;
    > div:not(.legionella) {
      .blob {
        right: -69px;
        padding: 0.625rem;
        svg {
          height: 64px;
        }
        span {
          font-size: 1rem;
          &:first-of-type {
            font-size: 0.8rem;
          }
        }
      }
    }
    &:nth-of-type(odd) {
      padding-left: 0;
      padding-right: 72px;
      align-self: initial;
      > div:not(.legionella) {
        text-align: left;
        align-items: flex-start;
        border-radius: 35px 82px;
        .blob {
          left: initial;
          right: -69px;
        }
        &:after {
          right: -7.5px;
          left: initial;
        }
      }
    }
  }
`

const TimelineItemContent = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: left;
  background: ${props => (props.isMilestone ? colors.purple : colors.accent)};
  border-radius: 35px 82px;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.1);
  color: ${props => (props.isMilestone ? colors.white : colors.darkAccent)};
  cursor: pointer;
  transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  transition-delay: 0.05s;
  &:hover {
    transform: translate(0, -5px);
  }
  h3 {
    color: ${colors.white};
    margin-bottom: 0;
    width: 100%;
  }
  small {
    margin-bottom: 1.5rem;
    color: ${props => (props.isMilestone ? colors.darkAccent : colors.darkAccent)};
  }
  &:after {
    content: " ";
    background: ${props => (props.isMilestone ? colors.purple : colors.accent)};
    box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.1);
    position: absolute;
    right: -7.5px;
    top: calc(50% - 7.5px);
    transform: rotate(45deg);
    width: 15px;
    height: 15px;
  }
  @media ${screens.tablet} {
    h3 {
      font-size: 1rem;
      hyphens: auto;
    }
  }
  @media ${screens.mobileM} {
    padding: 2rem 1rem;
    small {
      font-size: 0.66rem;
    }
    p {
      font-size: 0.875rem;
    }
  }
`

const StyledCross = styled(Cross)`
  grid-column: 8;
  margin-top: 5rem;
  margin-bottom: 1.5rem;
  width: 64px;
  cursor: pointer;
  fill: ${colors.white};
  transition: fill 0.3s cubic-bezier(0.19, 1, 0.22, 1);
  &:hover,
  &:focus {
    fill: ${colors.darkAccent};
  }
  @media ${screens.laptop} {
    justify-self: end;
    grid-column: 7;
    margin-top: 2.5rem;
  }
  @media ${screens.mobileM} {
    justify-self: start;
    margin-top: 1rem;
    width: 45px;
    grid-column: 2;
  }
`

const StoryPage = ({ data }) => {
  const intl = useIntl()
  const [modalIsOpen, setIsOpen] = useState(false)
  const [animationShouldPlay, setAnimationShouldPlay] = useState(false)
  const [currentStory, setCurrentStory] = useState(0)
  const blobs = [<Blob1 />, <Blob2 />, <Blob3 />, <Blob4 />, <Blob5 />]

  const openModal = index => {
    setIsOpen(true)
    setAnimationShouldPlay(true)
    setCurrentStory(index)
  }
  const closeModal = () => {
    setAnimationShouldPlay(false)
    setTimeout(() => {
      setIsOpen(false)
    }, 300)
  }

  let story = {
    title: data.stories.edges[currentStory].node.frontmatter.title,
    date: data.stories.edges[currentStory].node.frontmatter.date,
    html: data.stories.edges[currentStory].node.html,
  }

  return (
    <Layout>
      <SEO
        title={intl.formatMessage({ id: "seo.storyTitle" })}
        description={intl.formatMessage({ id: "seo.storyDescription" })}
        lang={intl.locale}
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={`modal ${
          animationShouldPlay ? " story__active" : " story__not__active"
        }`}
        overlayClassName="overlay"
        appElement={
          typeof window !== "undefined" && document.getElementById("gatsby-focus-wrapper")
        }
        contentLabel={data.stories.edges[currentStory].node.frontmatter.title}
      >
        <StyledCross onClick={closeModal} />
        {data.stories.edges[currentStory] && <Story story={story} />}
      </Modal>
      <TimelineContainer>
        {data.stories.edges.map((story, index) => {
          if (story.node.frontmatter.lang === intl.locale) {
            const date = new Date(story.node.frontmatter.date)
            return (
              <TimelineItem
                onClick={() => openModal(index)}
                key={`${story.node.frontmatter.date}${story.node.frontmatter.title}`}
                isMilestone={story.node.frontmatter.isMilestone ? 1 : 0}
              >
                <TimelineItemContent
                  isMilestone={story.node.frontmatter.isMilestone ? 1 : 0}
                >
                  <h3 lang={intl.locale}>{story.node.frontmatter.title}</h3>
                  <small>
                    <FormattedDate value={date} />
                  </small>
                  <p>{story.node.frontmatter.description}</p>
                  <div className="blob">
                    {blobs[index % 5]}
                    <span>
                      <FormattedDate value={date} month="short" />
                    </span>
                    <span>{date.getFullYear()}</span>
                  </div>
                </TimelineItemContent>
                {index % 5 === 1 && (
                  <Legionella width={115} height={32} rotate={21} top={75} right={-400} />
                )}
                {index % 5 === 4 && (
                  <Legionella width={90} height={26} rotate={-31} top={75} left={-400} />
                )}
              </TimelineItem>
            )
          } else {
            return null
          }
        })}
      </TimelineContainer>
    </Layout>
  )
}
export default StoryPage

export const query = graphql`
  query StoryQuery {
    stories: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/markdown/story/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            date
            lang
            isMilestone
          }
          html
        }
      }
    }
  }
`
