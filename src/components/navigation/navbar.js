import React, { useState } from "react"
import styled from "@emotion/styled"
import { IntlContextConsumer, changeLocale, Link, useIntl } from "gatsby-plugin-intl"

import colors from "../framework/colors"
import screens from "../framework/screens"

import Logo from "../../images/svg/logo.inline.svg"
import wave from "../../images/svg/waves/navwave.svg"

const NavigationBarContainer = styled.header`
  width: 100%;
  background: url(${wave});
  background-repeat: no-repeat;
  background-size: 1140px 200px;
  background-position: calc(100% + 400px) 100%;
  padding: 1.5rem 0;
  @media ${screens.tablet} {
    background-position: calc(100% + 700px) 100%;
  }
  @media ${screens.mobileM} {
    background: ${colors.darkAccent};
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 70%;
    max-width: 300px;
    z-index: 10000;
    overflow-y: auto;
    transform: ${props => (props.show ? "translateX(0)" : "translateX(-100%)")};
    transition: transform 0.3s cubic-bezier(0.19, 1, 0.22, 1);
    box-shadow: ${props =>
      props.show
        ? " 0 14px 28px rgba(0, 0, 0, 0.33), 0 10px 10px rgba(0, 0, 0, 0.33)"
        : ""};
  }
`

const NavigationBar = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;

  @media ${screens.laptop} {
    width: calc(100% - 32px);
  }
  @media ${screens.mobileM} {
    align-items: flex-start;
    flex-direction: column;
    height: 100%;
    svg * {
      fill: ${colors.white} !important;
    }import { cleanup } from '@testing-library/react';

  }
`

const NavigationItems = styled.div`
  margin-left: auto;
  margin-right: -1rem;
  display: flex;
  justify-content: space-evenly;
  position: relative;
  @media ${screens.mobileM} {
    flex-direction: column;
    justify-content: stretch;
    margin-right: 0;
    margin-left: 0;
    margin-top: 1rem;
    width: 100%;
    height: 100%;
  }
`

const NavigationItem = styled(Link)`
  margin: 1rem;
  font-size: 1.25rem;
  text-transform: capitalize;
  display: inline-block;
  opacity: 1;
  &.active {
    color: ${colors.darkAccent};
    opacity: 0.9;
  }
  &:hover,
  &:focus {
    color: ${colors.darkAccent};
    opacity: 0.8;
  }
  @media ${screens.tablet} {
    font-size: 1.125rem;
    margin: 1rem 0.5rem;
  }
  @media ${screens.mobileM} {
    margin: 1rem 0;
    font-size: 2rem;
    color: ${colors.white};
    &.active {
      color: ${colors.accent2};
    }
    &:hover,
    &:focus {
      color: ${colors.accent2};
    }
  }
`

const NavIcon = styled.div`
  display: none;
  width: 50px;
  height: 45px;
  position: fixed;
  top: 1.5rem;
  right: 1rem;
  z-index: 10000;
  transform: rotate(0deg);
  transition: 0.3s ease-out;
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    height: 8px;
    width: 100%;
    background: ${colors.darkAccent};
    border-radius: 8px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.15s ease-in-out;
    &:nth-of-type(1) {
      top: 0px;
      transform-origin: left center;
    }
    &:nth-of-type(2) {
      top: 16px;
      transform-origin: left center;
    }
    &:nth-of-type(3) {
      top: 32px;
      transform-origin: left center;
    }
  }
  &.open {
    span {
      &:nth-of-type(1) {
        transform: rotate(45deg);
        left: 8px;
      }
      &:nth-of-type(2) {
        width: 0%;
        opacity: 0;
      }
      &:nth-of-type(3) {
        transform: rotate(-45deg);
        top: 36px;
        left: 8px;
      }
    }
  }
  @media ${screens.mobileM} {
    display: block;
  }
`

const LanguageMenu = styled.div`
  align-self: center;
  padding: 1rem;
  outline: none;
  position: relative;
  opacity: 1;
  color: ${colors.black};
  font-size: 20px;
  cursor: pointer;
  user-select: none;
  span span {
    font-size: 10px;
    vertical-align: 0.2em;
    padding-left: 4px;
  }
  @media ${screens.tablet} {
    font-size: 1.125rem;
    padding: 1rem 1rem 1rem 0.5rem;
  }
  @media ${screens.mobileM} {
    margin-top: auto;
    padding: 0;
    span {
      display: none;
    }
  }
`

const DotNav = styled.nav`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 10;
  float: left;
  background: ${colors.white};
  border-radius: 4px;
  box-shadow: 1px 0px 8px rgba(0, 0, 0, 0.05), 0px 1px 4px rgba(0, 0, 0, 0.2);
  opacity: ${props => (props.show ? "1" : "0")};
  visibility: ${props => (props.show ? "visible" : "hidden")};
  transform: ${props =>
    props.show ? "translate(0, 0) scale(1)" : "translate(0, 15px) scale(0.95)"};
  transition: transform 0.1s ease-out, opacity 0.1s ease-out;
  .more-menu-caret {
    position: absolute;
    top: -10px;
    left: 14px;
    width: 18px;
    height: 10px;
    float: left;
    overflow: hidden;
  }
  .more-menu-caret-outer,
  .more-menu-caret-inner {
    position: absolute;
    display: inline-block;
    margin-left: -1px;
    font-size: 0;
    line-height: 1;
  }

  .more-menu-caret-outer {
    border-bottom: 10px solid #dbdbdb;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    height: auto;
    left: 0;
    top: 0;
    width: auto;
  }
  .more-menu-caret-inner {
    top: 1px;
    left: 1px;
    border-left: 9px solid transparent;
    border-right: 9px solid transparent;
    border-bottom: 9px solid #fff;
  }
  > a {
    padding: 0.66rem 1rem;
    position: relative;
    border-radius: 4px;
    z-index: 14;
    transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
    font-size: 16px;

    &:hover,
    &:focus {
      background: ${colors.accent2};
      color: ${colors.white};
    }
  }

  @media ${screens.mobileM} {
    position: static;
    justify-content: center;
    flex-direction: row;
    visibility: visible;
    background: transparent;
    box-shadow: none;
    opacity: 1;
    transform: none;
    > a {
      color: ${colors.white};
      padding: 0 1rem;
      font-size: 1.4rem;
      &:hover,
      &:focus {
        background: transparent;
        color: ${colors.accent2};
      }
    }
    .more-menu-caret {
      display: none;
    }
  }
`

const Navbar = ({ show, hamburgerClickHandler }) => {
  const intl = useIntl()
  const [overflowMenuActive, setOverflowMenuActive] = useState(false)
  return (
    <>
      <NavIcon
        onClick={hamburgerClickHandler}
        onKeyDown={hamburgerClickHandler}
        aria-pressed="false"
        tabIndex="0"
        role="button"
        id="hamburger"
      >
        <span></span>
        <span></span>
        <span></span>
      </NavIcon>
      <NavigationBarContainer wave={wave} show={show}>
        <NavigationBar>
          <Link to="/">
            <Logo css={{ width: "145px" }} />
          </Link>
          <NavigationItems>
            <NavigationItem activeClassName="active" to="/">
              Home
            </NavigationItem>
            <NavigationItem activeClassName="active" to="/team/">
              {intl.formatMessage({ id: "navigation.team" })}
            </NavigationItem>
            <NavigationItem activeClassName="active" to="/story/">
              {intl.formatMessage({ id: "navigation.story" })}
            </NavigationItem>
            {/* <NavigationItem activeClassName="active" to="/products/">
              {intl.formatMessage({ id: "navigation.products" })}
            </NavigationItem> */}
            <NavigationItem activeClassName="active" to="/services/">
              {intl.formatMessage({ id: "navigation.services" })}
            </NavigationItem>
            <NavigationItem activeClassName="active" to="/contact/">
              {intl.formatMessage({ id: "navigation.contact" })}
            </NavigationItem>
            <LanguageMenu
              aria-pressed="false"
              tabIndex="0"
              role="button"
              onKeyDown={() => setOverflowMenuActive(!overflowMenuActive)}
              onClick={() => setOverflowMenuActive(!overflowMenuActive)}
              onMouseEnter={() => setOverflowMenuActive(true)}
              onMouseLeave={() => setOverflowMenuActive(false)}
            >
              <span>
                {intl.locale}
                <span>▼</span>
              </span>
              <DotNav show={overflowMenuActive} role="menu">
                <div className="more-menu-caret">
                  <div className="more-menu-caret-outer"></div>
                  <div className="more-menu-caret-inner"></div>
                </div>
                <IntlContextConsumer>
                  {({ languages }) =>
                    languages.map(language => (
                      <a
                        role="menuitem"
                        key={language}
                        onKeyDown={() => changeLocale(language)}
                        onClick={() => changeLocale(language)}
                        aria-pressed="false"
                        tabIndex="0"
                      >
                        {language}
                      </a>
                    ))
                  }
                </IntlContextConsumer>
              </DotNav>
            </LanguageMenu>
          </NavigationItems>
        </NavigationBar>
      </NavigationBarContainer>
    </>
  )
}

export default Navbar
