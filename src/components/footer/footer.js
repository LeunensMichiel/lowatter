import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { IntlContextConsumer, changeLocale, Link, useIntl } from "gatsby-plugin-intl"

import colors from "../framework/colors"

import Logo from "../../images/svg/logo.inline.svg"
import UGent from "../../images/svg/ugent.inline.svg"
import LinkedIn from "../../images/svg/linkedin.inline.svg"
import footerwave from "../../images/svg/waves/footerwave.svg"
import screens from "../framework/screens"

const FooterContainer = styled.footer`
  margin-top: auto;
  padding-top: 2rem;
  min-height: 500px;
  min-height: 45vh;
  display: grid;
  grid-template-columns: minmax(16px, 1fr) repeat(6, minmax(48px, 190px)) minmax(
      16px,
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
  @media ${screens.mobileM} {
    grid-row-gap: 1rem;
    padding-top: 10rem;
    background-size: 200% 100%;
  }
  @media ${screens.mobileMLandscape} {
    grid-row-gap: 1rem;
    padding-top: 10rem;
    background-size: 200% 100%;
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
  @media ${screens.tablet} {
    grid-column: 4 / span 2;
    align-items: flex-end;
  }
  @media ${screens.mobileM} {
    grid-column: 2 / span 4;
    width: 100%;
    align-items: stretch;
  }
  @media ${screens.mobileSLandscape} {
    grid-column: 3 / span 2;
  }
`
const NavigationWrapper = styled.aside`
  grid-column: 6 / span 2;
  justify-self: end;
  span {
    font-weight: 600;
    text-transform: uppercase;
  }
  @media ${screens.mobileM} {
    grid-column: 6 / span 2;
    width: 100%;
  }
  @media ${screens.mobileSLandscape} {
    grid-column: 6 / span 2;
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
  @media ${screens.mobileM} {
    margin-top: 0.66rem;
    flex-direction: column;
    div {
      &:nth-of-type(2) {
        margin-left: 0;
      }
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
  @media ${screens.tablet} {
    span {
      width: 66%;
    }
  }
  @media ${screens.mobileM} {
    flex-direction: column;
    align-items: center;
    span {
      margin-left: 0;
      text-align: center;
      margin: 2rem 0;
    }
  }
  @media ${screens.mobileMLandscape} {
    margin: 2rem 0;
  }
`

const LogoStyle = css`
  width: 140px;
  max-height: 118px;
  .cls-1 {
    fill: ${colors.white} !important;
  }
  &.ugent {
    grid-column: 3;
  }
  @media ${screens.tablet} {
    width: 90%;
  }
  @media ${screens.mobileM} {
    &.ugent {
      grid-column: 6 / span 2;
      width: 100px;
    }
  }
  @media ${screens.mobileSLandscape} {
    &.ugent {
      grid-column: 6 / span 2;
    }
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
  @media ${screens.tablet} {
    height: 80%;
  }
  @media ${screens.mobileM} {
    height: 100%;
    grid-column: 2 / span 4;
    justify-content: space-evenly;
    svg {
      max-width: 120px;
    }
  }
  @media ${screens.mobileSLandscape} {
    grid-column: 3 / span 2;
  }
`

const Footer = () => {
  const intl = useIntl()
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
        <span>{intl.formatMessage({ id: "footer.addressTitle" })}</span>
        <span>{intl.formatMessage({ id: "footer.email" })}</span>
        <span>{intl.formatMessage({ id: "footer.address" }).split("\n")[0]}</span>
        <span>{intl.formatMessage({ id: "footer.address" }).split("\n")[1]}</span>
      </ContactInfo>
      <NavigationWrapper>
        <span>{intl.formatMessage({ id: "footer.navTitle" })}</span>
        <Navigation>
          <div>
            <Link to="/">Home</Link>
            <Link to="/team/"> {intl.formatMessage({ id: "navigation.team" })}</Link>
            <Link to="/story/"> {intl.formatMessage({ id: "navigation.story" })}</Link>
          </div>
          <div>
            <Link to="/products/">
              {intl.formatMessage({ id: "navigation.products" })}
            </Link>
            <Link to="/services/">
              {intl.formatMessage({ id: "navigation.services" })}
            </Link>
            <Link to="/contact/">{intl.formatMessage({ id: "navigation.contact" })}</Link>
          </div>
        </Navigation>
      </NavigationWrapper>
      <hr />
      <SubFooter>
        <Link to="/terms/">{intl.formatMessage({ id: "footer.terms" })}</Link>
        <IntlContextConsumer>
          {({ languages }) =>
            languages.map(language => (
              <a
                key={language}
                onKeyDown={() => changeLocale(language)}
                onClick={() => changeLocale(language)}
                aria-pressed="false"
                tabIndex="0"
                role="button"
              >
                {language}
              </a>
            ))
          }
        </IntlContextConsumer>
        <span>
          <sup>© </sup>LOWATTER 2019 | {intl.formatMessage({ id: "footer.subText" })}{" "}
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
