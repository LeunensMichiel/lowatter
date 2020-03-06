import React from "react"
import styled from "@emotion/styled"

import colors from "../components/framework/colors"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/buttons/button"

const LandingContainer = styled.div`
  margin-top: 5rem;
  display: grid;
  grid-template-columns:
    minmax(60px, 1fr)
    repeat(6, minmax(50px, 190px))
    minmax(60px, 1fr);
  grid-column: 1 / span 8;
`

const LandingText = styled.div`
  grid-column: 2 / span 3;
  white-space: pre-wrap;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" description="Homepage of LoWatter" />
    <LandingContainer>
      <LandingText>
        <h1>{"Controlling Legionella\nin tapwater"}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, et
          tincidunt rutrum dui suspendisse.
        </p>
        <Button anchor link="#about" text="Learn more" />
        <Button internal link="/contact/" text="Contact us" accent />
      </LandingText>
    </LandingContainer>
  </Layout>
)

export default IndexPage
