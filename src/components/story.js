import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { FormattedDate } from "gatsby-plugin-intl"

import "../stylesheets/style.scss"
import colors from "./framework/colors"
import screens from "./framework/screens"
import Dots from "../images/svg/dots/dots-blog.inline.svg"

const StoryContainer = styled.div`
  grid-column: 3 / span 4;
  color: ${colors.darkAccent};

  h1 {
    color: ${colors.white};
    margin-bottom: 0.25rem;
  }

  article {
    margin: 5rem 0;
  }

  p {
    text-align: justify;
    margin: 2rem 0;

    img {
      &[alt~="right"] {
        width: 50%;
        padding-left: 1rem;
        float: right;
      }
      &[alt~="left"] {
        width: 50%;
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
          width: 100%;
          padding-left: 0;
          float: none;
        }
        &[alt~="left"] {
          width: 100%;
          float: none;
          padding-right: 0;
        }
      }
    }
  }
`

const StyledDots = styled(Dots)`
  grid-column: 1;
  margin-top: 5rem;
  @media ${screens.mobileM} {
    display: none;
  }
`

const Story = ({ story }) => {
  const date = new Date(story.node.frontmatter.date)
  return (
    <>
      <StyledDots />
      <StoryContainer>
        <h1>{story.node.frontmatter.title}</h1>
        <small>
          <FormattedDate value={date} />
        </small>
        <article dangerouslySetInnerHTML={{ __html: story.node.html }} />
      </StoryContainer>
    </>
  )
}

Story.propTypes = {
  story: PropTypes.object,
}

export default Story
