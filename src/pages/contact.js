import React, { useState } from "react"
import styled from "@emotion/styled"
import { graphql } from "gatsby"
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"
import ReactMapGL, { Marker, NavigationControl, FullscreenControl } from "react-map-gl"

import colors from "../components/framework/colors"
import Button from "../components/buttons/button"
import Layout from "../components/layout"
import SEO from "../components/seo"
import screens from "../components/framework/screens"

import "mapbox-gl/dist/mapbox-gl.css"
import Pin from "../images/svg/location.inline.svg"
import Blob from "../images/svg/blobs/blobContact.inline.svg"
import contactwave from "../images/svg/waves/contactusNoFooter.svg"
import Dots from "../images/svg/dots/dots-large-patch.inline.svg"

const ContactWrapper = styled.div`
  margin-top: 10rem;
  grid-column: 2 / span 6;
  position: relative;

  svg {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    z-index: 1;
    margin: 0 auto;
    top: -120px;
    width: 100%;
    max-width: 580px;
  }

  @media ${screens.mobileM} {
    svg {
      max-width: 95%;
      top: -80px;
    }
  }
`

const FormContainer = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 75%;
  background: ${colors.white};
  border-radius: 50px;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.1);
  z-index: 45;

  h1 {
    position: absolute;
    color: ${colors.white};
    top: -75px;
  }
  @media ${screens.mobileM} {
    flex-direction: column;
    align-items: center;
    justify-content: stretch;
    h1 {
      top: -45px;
      font-size: 1.5rem;
    }
  }
`

const InnerForm = styled.form`
  flex-basis: 70%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1.125rem 1.5rem;
  padding: 3rem;

  button {
    transition: color 0.3s cubic-bezier(0.19, 1, 0.22, 1);
    grid-column: 4;
    cursor: pointer;
  }
  @media ${screens.mobileM} {
    padding: 1.5rem;
    grid-gap: 1.125rem 0;
    width: 100%;
    button {
      grid-column: 1 / span 4;
    }
  }
`

const MapForm = styled.aside`
  flex-basis: 30%;
  min-height: 100%;
  overflow: hidden;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;

  @media ${screens.mobileM} {
    flex-basis: unset;
    height: 400px;
    width: 100%;
    border-top-right-radius: 0;
    border-bottom-left-radius: 50px;
  }
`

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  grid-column: ${props => (props.span ? "span 4" : "span 2")};
  input,
  textarea {
    color: ${colors.black};
    border: 2px solid ${colors.accent2};
    border-radius: 60px;
    padding: 0.66rem 1rem;
    background: ${colors.white};
    outline-color: ${colors.accent + "40"};
    transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
    &:focus {
      border-color: ${colors.accent};
    }
    &::placeholder {
      color: ${colors.secondaryBlack};
    }
  }
  textarea {
    border-radius: 30px;
    resize: none;
    height: 160px;
  }
  label {
    margin-bottom: 0.5rem;
    color: ${colors.darkAccent};
  }
  @media ${screens.mobileM} {
    grid-column: 1 / span 4;
  }
`

const ContactInfo = styled.aside`
  grid-column: 3 / span 2;
  display: flex;
  flex-direction: column;
  margin: 15rem 0;
  z-index: 5;
  color: ${colors.darkAccent};
  font-size: 1.25rem;
  span:first-of-type {
    font-size: 2rem;
    font-weight: 600;
    text-transform: uppercase;
  }
  span:nth-of-type(2) {
    margin: 0.625rem 0;
  }
  @media ${screens.mobileM} {
    margin: 10rem 0;
    grid-column: 2 / span 4;
  }
`

const ContactWave = styled.div`
  background-image: url(${contactwave});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: 50% 50%;
  position: absolute;
  grid-row: span 2;
  grid-column: 1 / span 8;
  height: 700px;
  width: 100%;
  align-self: end;
  margin-bottom: 17rem;
  z-index: 1;
`

const DotsContainer = styled.div`
  grid-column: 5 / span 2;
  display: flex;
  align-items: center;
  z-index: 5;
  @media ${screens.mobileM} {
    grid-column: 6 / span 2;
  }
`

const ContactPage = ({ data }) => {
  const [viewport, setViewport] = useState({
    latitude: 51.045966,
    longitude: 3.727775,
    zoom: 15,
  })
  const intl = useIntl()
  return (
    <Layout>
      <SEO
        title="Contact Us"
        description="Contact Lowatter for consultancy and pricing of our services and ask for more information"
      />
      <ContactWrapper>
        <Blob />
        <FormContainer>
          <h1>Let's Connect!</h1>
          <InnerForm
            name="contact"
            method="post"
            action={`/thanks`}
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input name="bot-field" style={{ display: "none" }} />
            <InputWrapper>
              <label for="firstname">
                First Name<sup>*</sup>
              </label>
              <input
                id="firstname"
                name="firstName"
                type="text"
                required
                autoComplete
                placeholder="John"
              />
            </InputWrapper>
            <InputWrapper>
              <label for="lastName">
                Last Name<sup>*</sup>
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                autoComplete
                placeholder="Doe"
              />
            </InputWrapper>
            <InputWrapper span>
              <label for="email">
                Email<sup>*</sup>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete
                placeholder="example@provider.com"
              />
            </InputWrapper>
            <InputWrapper>
              <label for="company">Company</label>
              <input
                id="company"
                name="company"
                type="text"
                required
                placeholder="My Company"
              />
            </InputWrapper>
            <InputWrapper>
              <label for="phone">Phone Number</label>
              <input id="phone" name="phone" type="tel" placeholder="+32 123 45 67 89" />
            </InputWrapper>
            <InputWrapper span>
              <label for="message">
                Message<sup>*</sup>
              </label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Tell us how we can help you."
              />
            </InputWrapper>
            <Button text="Send" submit />
          </InnerForm>
          <MapForm>
            <ReactMapGL
              {...viewport}
              width="100%"
              height="100%"
              mapStyle={"mapbox://styles/mapbox/light-v10"}
              onViewportChange={setViewport}
              mapboxApiAccessToken={`${process.env.GATSBY_MAP_API}`}
            >
              <div style={{ position: "absolute", right: 18, top: 26 }}>
                <FullscreenControl />
              </div>
              <div style={{ position: "absolute", right: 18, top: 66 }}>
                <NavigationControl />
              </div>
              <Marker longitude={3.727775} latitude={51.045966}>
                <Pin style={{ width: "40px" }} />
              </Marker>
            </ReactMapGL>
          </MapForm>
        </FormContainer>
      </ContactWrapper>
      <ContactWave />
      <ContactInfo>
        <span>Lowatter</span>
        <span>info@lowatter.com</span>
        <span>Sint-Pietersnieuwstraat 41 B4</span>
        <span>9000 Ghent, Belgium</span>
      </ContactInfo>
      <DotsContainer>
        <Dots />
      </DotsContainer>
    </Layout>
  )
}
export default ContactPage
