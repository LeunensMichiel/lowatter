import React from "react"
import styled from "@emotion/styled"

const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1001;
`

const Backdrop = ({ click }) => {
  return <StyledBackdrop onClick={click} />
}

export default Backdrop
