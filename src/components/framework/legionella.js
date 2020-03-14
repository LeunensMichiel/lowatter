import React from "react"
import styled from "@emotion/styled"

import colors from "../framework/colors"
import screens from "./screens"

const LegionellaShell = styled.div`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background: ${colors.purplegradient};
  border-radius: 88px;
  transform: ${props => `rotate(${props.rotate}deg)`};
  position: absolute;
  top: ${props => (props.top || props.top === 0 ? `${props.top}px` : "initial")};
  left: ${props => (props.left || props.left === 0 ? `${props.left}px` : "initial")};
  right: ${props => (props.right || props.right === 0 ? `${props.right}px` : "initial")};
  bottom: ${props =>
    props.bottom || props.bottom === 0 ? `${props.bottom}px` : "initial"};

  @media ${screens.mobileM} {
    width: ${props => props.width / 2}px;
    height: ${props => props.height / 2}px;
    top: ${props => (props.top || props.top === 0 ? `${props.top / 2}px` : "initial")};
    left: ${props =>
      props.left || props.left === 0 ? `${props.left / 2}px` : "initial"};
    right: ${props =>
      props.right || props.right === 0 ? `${props.right / 2}px` : "initial"};
    bottom: ${props =>
      props.bottom || props.bottom === 0 ? `${props.bottom / 2}px` : "initial"};
  }
`

const Legionella = ({
  rotate = 0,
  width = 100,
  height = 33,
  top,
  left,
  right,
  bottom,
}) => {
  return (
    <LegionellaShell
      rotate={rotate}
      width={width}
      height={height}
      top={top}
      left={left}
      right={right}
      bottom={bottom}
    />
  )
}

export default Legionella
