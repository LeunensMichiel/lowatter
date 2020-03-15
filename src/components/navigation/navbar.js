import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { Link } from "gatsby-plugin-intl"

import colors from "../framework/colors"

import Logo from "../../images/svg/logo.inline.svg"
import wave from "../../images/svg/waves/navwave.svg"
import screens from "../framework/screens"

const NavigationBarContainer = styled.header`
  width: 100%;
  background: url(${wave});
  background-repeat: no-repeat;
  background-size: 1140px 200px;
  background-position: calc(50% - 300px) 100%;
  padding: 1.5rem 0;

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

  @media ${screens.mobileM} {
    align-items: flex-start;
    flex-direction: column;
    .cls-1 {
      fill: ${colors.white} !important;
    }
  }
  @media ${screens.laptop} {
    width: calc(100% - 32px);
  }
`

const NavigationItems = styled.div`
  margin-left: auto;
  display: flex;
  justify-content: space-evenly;
  margin-right: -1rem;

  @media ${screens.mobileM} {
    flex-direction: column;
    margin-right: 0;
    margin-left: 0;
    margin-top: 2rem;
    width: 100%;
  }
`

const NavigationItem = styled(Link)`
  margin: 1rem;
  font-size: 1.25rem;

  &.active {
    color: ${colors.accent2};
  }

  @media ${screens.mobileM} {
    margin: 1rem 0;
    font-size: 2rem;
    color: ${colors.white};
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

const Navbar = ({ show, hamburgerClickHandler }) => {
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
            <NavigationItem activeClassName="active" to="/team/">
              Our Team
            </NavigationItem>
            <NavigationItem activeClassName="active" to="/story/">
              Our Story
            </NavigationItem>
            <NavigationItem activeClassName="active" to="/products/">
              Our Products
            </NavigationItem>
            <NavigationItem activeClassName="active" to="/services/">
              Our Services
            </NavigationItem>
            <NavigationItem activeClassName="active" to="/contact/">
              Contact Us
            </NavigationItem>
          </NavigationItems>
        </NavigationBar>
      </NavigationBarContainer>
    </>
  )
}

Navbar.propTypes = {}

export default Navbar
