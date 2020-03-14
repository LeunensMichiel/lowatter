import React from "react"
import { Link } from "gatsby-plugin-intl"
import styled from "@emotion/styled"

import colors from "../framework/colors"

const LinkWrapper = styled(Link)`
  background: ${props => (props.accent ? colors.darkAccent : colors.gradient)};
  border-radius: 140px;
  padding: 0.875rem 3rem;
  color: ${colors.white};
  margin-right: ${props => `${props.right}rem`};
  margin-left: ${props => `${props.left}rem`};
  text-align: center;
  border: none;

  &:hover,
  &:focus {
    color: ${props => (props.accent ? colors.accent2 : colors.darkAccent)};
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
