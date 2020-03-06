import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

import colors from "../framework/colors"

const ButtonWrapper = styled(Link)`
  background: ${props => (props.accent ? colors.darkAccent : colors.gradient)};
  border-radius: 140px;
  padding: 0.875rem 3rem;
  color: ${colors.white};
`

const Button = ({ text = "Button", to }) => {
  return <ButtonWrapper to={to}>{text}</ButtonWrapper>
}

export default Button
