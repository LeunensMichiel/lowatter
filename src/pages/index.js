import React from "react"
import styled from "@emotion/styled"

import colors from "../components/framework/colors"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/buttons/button"
import Legionella from "../components/framework/legionella"

import wave from "../images/svg/waves/bottomwaves.svg"
import upperwave from "../images/svg/waves/bottomwaveUpper.svg"
import Water from "../images/svg/waves/waterstream.inline.svg"

const LandingText = styled.div`
  grid-column: 2 / span 3;

  white-space: pre-wrap;
  margin: 6.5rem 0;

  > p {
    width: 66%;
    margin-bottom: 3rem;
  }
  z-index: 3;
`

const Waves = styled.div`
  grid-column: 1 / span 8;
  width: 100%;
  height: 350px;
  background-image: url(${wave});
  background-repeat: no-repeat;
  background-size: 100% 350px;
  background-position: 50% 100%;
  z-index: 1;
  position: relative;
`

const UpperWave = styled.div`
  width: 100%;
  height: 400px;
  background-image: url(${upperwave});
  background-repeat: no-repeat;
  background-size: 100% 400px;
  position: absolute;
  top: -20px;
  z-index: 10;
`

const LegionellaContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 5;
  top: -480px;

  .water {
    position: absolute;
    right: 0;
  }
`

const IndexPage = ({ location }) => (
  <Layout>
    <SEO title="Home" description="Homepage of LoWatter" />
    <LandingText>
      <h1>{"Controlling Legionella\nin tapwater"}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, et tincidunt rutrum
        dui suspendisse.
      </p>
      <Button link={`${location.pathname}#about/`} text="Learn more" />
      <Button left={1} link="/contact/" text="Contact us" accent />
    </LandingText>
    <Waves>
      <LegionellaContainer>
        <Water className="water" />
        <Legionella width={135} height={53} rotate={-13} top={380} right={400} />
        <Legionella width={190} height={72} rotate={-30} top={390} right={320} />
        <Legionella width={220} height={84} rotate={-36} top={200} right={-50} />
        <Legionella width={206} height={83} rotate={-50} top={480} right={50} />
        <Legionella width={162} height={51} rotate={-56} top={200} right={150} />
        <Legionella width={168} height={49} rotate={-53} top={400} right={530} />
        <Legionella width={123} height={55} rotate={-23} top={600} right={570} />
        <Legionella width={165} height={74} rotate={-41} top={570} right={650} />
        <Legionella width={125} height={45} rotate={-34} top={570} right={350} />
        <Legionella width={181} height={59} rotate={24} top={560} right={360} />
      </LegionellaContainer>
      <UpperWave />
    </Waves>
  </Layout>
)

export default IndexPage
