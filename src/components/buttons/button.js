import React from "react"
import { Link } from "gatsby-plugin-intl"
import styled from "@emotion/styled"

import colors from "../framework/colors"

const ButtonWrapper = styled(Link)`
  background: ${props => (props.accent ? colors.darkAccent : colors.gradient)};
  border-radius: 140px;
  padding: 0.875rem 3rem;
  color: ${colors.white};
  margin-right: ${props => `${props.right}rem`};
  margin-left: ${props => `${props.left}rem`};
`

const Button = ({
  text = "Button",
  link,
  external = false,
  accent = false,
  left = 0,
  right = 0,
}) => {
  return (
    <>
      {!external ? (
        //Gatsby Link
        <ButtonWrapper right={right} left={left} accent={accent ? 1 : 0} to={link}>
          {text}
        </ButtonWrapper>
      ) : (
        //External Link
        <ButtonWrapper
          as="a"
          accent={accent ? 1 : 0}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          right={right}
          left={left}
        >
          {text}
        </ButtonWrapper>
      )}
    </>
  )
}

export default Button
