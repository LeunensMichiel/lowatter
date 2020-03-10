import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { IntlContextConsumer, changeLocale, Link } from "gatsby-plugin-intl"

import colors from "../framework/colors"

import Logo from "../../images/svg/logo.inline.svg"
import UGent from "../../images/svg/ugent.inline.svg"
import LinkedIn from "../../images/svg/linkedin.inline.svg"
import footerwave from "../../images/svg/waves/footerwave.svg"

const FooterContainer = styled.footer`
  margin-top: auto;
  padding-top: 2rem;
  height: 500px;
  height: 45vh;
  display: grid;
  grid-template-columns: minmax(60px, 1fr) repeat(6, minmax(50px, 190px)) minmax(
      60px,
      1fr
    );
  align-content: center;
  align-items: start;
  background-image: url(${footerwave});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: 50% 50%;
  * {
    color: ${colors.white};
  }
  hr {
    grid-column: 2 / span 6;
    background: ${colors.white};
    margin: 1.25rem 0;
  }
`

const ContactInfo = styled.aside`
  grid-column: 4 / span 2;
  display: flex;
  flex-direction: column;
  span:first-of-type {
    font-weight: 600;
    text-transform: uppercase;
  }
  span:nth-of-type(2) {
    margin: 0.625rem 0;
  }
`
const NavigationWrapper = styled.aside`
  grid-column: 6 / span 2;
  justify-self: end;
  span {
    font-weight: 600;
    text-transform: uppercase;
  }
`

const Navigation = styled.nav`
  display: flex;
  margin-top: 1.25rem;
  div {
    display: flex;
    flex-direction: column;
    text-decoration: underline;
    &:nth-of-type(2) {
      margin-left: 2rem;
    }
  }
`

const SubFooter = styled.div`
  grid-column: 2 / span 6;
  display: flex;
  font-size: 0.875rem;
  > a {
    text-decoration: underline;
    margin-right: 0.875rem;
    cursor: pointer;
  }
  span {
    margin-left: auto;
    justify-self: flex-end;
    a {
      font-weight: 600;
      color: ${colors.accent2};
      &:hover,
      &:focus {
        color: ${colors.white};
      }
    }
  }
`

const LogoStyle = css`
  width: 145px;
  max-height: 118px;
  .cls-1 {
    fill: ${colors.white} !important;
  }
  &.ugent {
    grid-column: 3;
  }
`

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-column: 2;
  height: 100%;
  span {
    display: flex;
  }
  svg {
    fill: ${colors.white} !important;
    transition: fill 0.2s cubic-bezier(0.19, 1, 0.22, 1);
    &:hover,
    &:focus {
      fill: ${colors.accent2} !important;
    }
  }
`

const Footer = () => {
  return (
    <FooterContainer className="globalfooter">
      <LogoContainer>
        <Logo className="lowatter" css={LogoStyle} />
        <span>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <LinkedIn />
          </a>
        </span>
      </LogoContainer>
      <UGent className="ugent" css={LogoStyle} />
      <ContactInfo>
        <span>Let's stay in touch</span>
        <span>info@lowatter.com</span>
        <span>Sint-Pietersnieuwstraat 41 B4</span>
        <span>9000 Ghent, Belgium</span>
      </ContactInfo>
      <NavigationWrapper>
        <span>Navigation</span>
        <Navigation>
          <div>
            <Link to="/">Home</Link>
            <Link to="/team/">Our Team</Link>
            <Link to="/story/">Our Story</Link>
          </div>
          <div>
            <Link to="/products/">Our Products</Link>
            <Link to="/consultancy/">Our Consultancy</Link>
            <Link to="/contact/">Contact</Link>
          </div>
        </Navigation>
      </NavigationWrapper>
      <hr />
      <SubFooter>
        <Link>Terms and Conditions</Link>
        <IntlContextConsumer>
          {({ languages }) =>
            languages.map(language => (
              <a key={language} onClick={() => changeLocale(language)}>
                {language}
              </a>
            ))
          }
        </IntlContextConsumer>
        <Link>Sitemap</Link>
        <span>
          <sup>© </sup>LOWATTER 2019 | All Rights Reserved. Designed and developed by{" "}
          <a href="https://www.leunesmedia.com" target="_blank" rel="noopener noreferrer">
            Leunes Media
          </a>
          .
        </span>
      </SubFooter>
    </FooterContainer>
  )
}

export default Footer
