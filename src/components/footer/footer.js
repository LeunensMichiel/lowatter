import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { IntlContextConsumer, changeLocale, Link, useIntl } from "gatsby-plugin-intl"

import colors from "../framework/colors"

import Logo from "../../images/svg/logo-white.inline.svg"
import UGent from "../../images/svg/ugent-white.inline.svg"
import LinkedIn from "../../images/svg/linkedin.inline.svg"
import footerwave from "../../images/svg/waves/footerwave.svg"
import screens from "../framework/screens"

const FooterContainer = styled.footer`
  margin-top: auto;
  padding-top: 2rem;
  min-height: 420px;
  display: grid;
  grid-template-columns: minmax(16px, 1fr) repeat(6, minmax(48px, 190px)) minmax(
      16px,
      1fr
    );
  align-content: center;
  align-items: center;
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
  grid-column: 5 / span 2;
  display: flex;
  flex-direction: column;
  font-size: 0.875rem;

  span:first-of-type {
    font-weight: 600;
    text-transform: uppercase;
  }
  span:nth-of-type(2) {
    margin: 0.625rem 0;
  }
  @media ${screens.mobileM} {
    grid-column: 2 / span 4;
    width: 100%;
    align-items: stretch;
  }
`
const NavigationWrapper = styled.aside`
  grid-column: 7;
  justify-self: end;
  font-size: 0.875rem;
  min-width: 180px;

  span {
    font-weight: 600;
    text-transform: uppercase;
  }
  @media ${screens.mobileM} {
    grid-column: 6 / span 2;
    width: 100%;
    min-width: unset;
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
      margin-left: 0.5rem;
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
  svg {
    padding-bottom: 10px;
    width: 1.5rem;
    fill: ${colors.white} !important;
    transition: fill 0.5s cubic-bezier(0.19, 1, 0.22, 1);
    &:hover,
    &:focus {
      fill: ${colors.accent2} !important;
    }
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
  @media ${screens.mobileM} {
    flex-direction: column;
    align-items: center;
    span {
      font-size: 0.8rem;
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
  grid-column: 2 / span 2;
  max-width: 300px;
  width: 100%;
  .cls-1 {
    fill: ${colors.white} !important;
  }
  &.ugent {
    grid-column: 4;
    width: 100px;
    justify-self: center;
  }

  @media ${screens.mobileM} {
    &.ugent {
      justify-self: initial;
      grid-column: 6 / span 2;
    }
  }
  @media ${screens.mobileSLandscape} {
    &.ugent {
      grid-column: 6 / span 2;
    }
  }
`

const Footer = () => {
  const intl = useIntl()
  return (
    <FooterContainer className="globalfooter">
      <Logo className="lowatter" css={LogoStyle} />
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
        <a
          href="https://www.linkedin.com/company/lowatter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn />
        </a>
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
          <sup>© </sup>LoWatter {new Date().getFullYear()} |{" "}
          {intl.formatMessage({ id: "footer.subText" })}{" "}
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
