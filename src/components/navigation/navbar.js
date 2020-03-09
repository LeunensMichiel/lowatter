import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { Link } from "gatsby-plugin-intl"

import colors from "../framework/colors"

import Logo from "../../images/svg/logo.inline.svg"
import wave from "../../images/svg/waves/navwave.svg"

const NavigationBarContainer = styled.div`
  width: 100%;
  background-image: url(${wave});
  background-repeat: no-repeat;
  background-size: 1140px 200px;
  background-position: calc(50% - 300px) 100%;
  padding: 1.5rem 0;
`

const NavigationBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
`

const NavigationItems = styled.div`
  margin-left: auto;
  display: flex;
  justify-content: space-evenly;
  margin-right: -1rem;
`

const NavigationItem = styled(Link)`
  margin: 1rem;
  font-size: 1.25rem;
  transition: color 0.3s cubic-bezier(0.19, 1, 0.22, 1);
  -webkit-backface-visibility: hidden;

  &:hover,
  &:focus {
    color: ${colors.accent};
  }
`

const Navbar = props => {
  return (
    <NavigationBarContainer wave={wave}>
      <NavigationBar>
        <Link to="/">
          <Logo css={{ width: "145px" }} />
        </Link>
        <NavigationItems>
          <NavigationItem to="/team/">Our Team</NavigationItem>
          <NavigationItem to="/story/">Our Story</NavigationItem>
          <NavigationItem to="/products/">Our Products</NavigationItem>
          <NavigationItem to="/consultancy/">Our Consultancy</NavigationItem>
          <NavigationItem to="/contact/">Contact Us</NavigationItem>
        </NavigationItems>
      </NavigationBar>
    </NavigationBarContainer>
  )
}

Navbar.propTypes = {}

export default Navbar
