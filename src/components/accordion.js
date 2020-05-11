import React, { useState, useRef } from "react"
import styled from "@emotion/styled"

import colors from "../components/framework/colors"
import Chevron from "../images/svg/chevron__right.inline.svg"

const AccordionDescription = styled.p`
  padding: 0;
  margin: 0;
  max-height: 0;
  overflow: hidden;
  font-size: 0.875rem;
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  max-height: calc(${props => props.maxHeight});
  user-select: none;
`

const AccordionTitle = styled.h3`
  margin-bottom: 0;
  font-size: 1.125rem;
  text-transform: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: color 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  user-select: none;
  svg {
    fill: ${colors.black} !important;
    margin-left: 4px;
    min-width: 7px;
    height: 11px;
    transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  }
`
const AccordionItem = styled.article`
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  border: 1px solid ${colors.lightGray};
  border-radius: 38px;
  cursor: pointer;
  transition: border 0.5s cubic-bezier(0.19, 1, 0.22, 1);

  &.faq__active {
    border: 1px solid ${colors.accent2};
    ${AccordionDescription} {
      padding: 1.5rem 0;
    }
    ${AccordionTitle} {
      color: ${colors.accent};
      svg {
        transform: rotate(90deg);
        fill: ${colors.accent} !important;
      }
    }
  }
`

const Accordion = props => {
  const [faqActive, setFaqActive] = useState("")
  const [faqHeight, setHeightState] = useState("0px")
  const contentRef = useRef(null)

  function toggleAccordion() {
    setFaqActive(faqActive === "" ? "faq__active" : "")
    setHeightState(
      faqActive === "faq__active" ? "0px" : `${contentRef.current.scrollHeight + 24}px`
    )
  }

  return (
    <AccordionItem className={`${faqActive}`} onClick={toggleAccordion}>
      <AccordionTitle>
        {props.title}
        <Chevron />
      </AccordionTitle>
      <AccordionDescription maxHeight={faqHeight} ref={contentRef}>
        {props.description}
      </AccordionDescription>
    </AccordionItem>
  )
}

export default Accordion
