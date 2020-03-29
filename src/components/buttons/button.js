import React from "react"
import { Link } from "gatsby-plugin-intl"
import styled from "@emotion/styled"

import colors from "../framework/colors"
import screens from "../framework/screens"

const LinkWrapper = styled(Link)`
  display: inline-block;
  background: ${props => (props.accent ? colors.darkAccent : colors.gradient)};
  border-radius: 140px;
  padding: 1rem 3rem;
  color: ${colors.white};
  margin-right: ${props => `${props.right}rem`};
  margin-left: ${props => `${props.left}rem`};
  text-align: center;
  border: none;
  min-width: 200px;
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  -webkit-backface-visibility: hidden;
  &:hover,
  &:focus {
    color: ${props => (props.accent ? colors.white : colors.darkAccent)};
    background: ${props => (props.accent ? colors.black : colors.gradient)};
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.05);
  }

  @media ${screens.mobileM} {
    margin-right: 0;
    margin-left: 0;
    margin-bottom: ${props => `${props.right}rem`};
    margin-top: ${props => `${props.left}rem`};
  }
`
const ButtonWrapper = LinkWrapper.withComponent("button")

const Button = ({
  text = "Button",
  link,
  external = false,
  accent = false,
  left = 0,
  right = 0,
  submit = false,
}) => {
  return (
    <>
      {submit ? (
        //Submit button
        <ButtonWrapper
          as="button"
          type="submit"
          right={right}
          left={left}
          accent={accent ? 1 : 0}
        >
          {text}
        </ButtonWrapper>
      ) : !external ? (
        //Gatsby Link
        <LinkWrapper right={right} left={left} accent={accent ? 1 : 0} to={link}>
          {text}
        </LinkWrapper>
      ) : (
        //External Link
        <LinkWrapper
          as="a"
          accent={accent ? 1 : 0}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          right={right}
          left={left}
        >
          {text}
        </LinkWrapper>
      )}
    </>
  )
}

export default Button
