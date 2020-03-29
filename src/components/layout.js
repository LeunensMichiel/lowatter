import React, { useState } from "react"
import PropTypes from "prop-types"

import Navbar from "./navigation/navbar"
import Backdrop from "./navigation/backdrop"
import Footer from "./footer/footer"

import "../stylesheets/style.scss"

const IsIE = () => {
  if (typeof window !== `undefined`) {
    return window.navigator.userAgent.match(/(MSIE|Trident)/)
  }
}

const Layout = ({ children }) => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)
  let backdrop

  if (IsIE()) {
    alert(
      "You are using an old, unsupported and unsecure webbrowser (Internet Explorer). Therefore, this site will NOT WORK properly. Please install an updated and secure browser like GOOGLE CHROME or FIREFOX."
    )
  }

  if (sideDrawerOpen) {
    backdrop = (
      <Backdrop
        click={() => {
          setSideDrawerOpen(false)
          document.getElementById("hamburger").classList.remove("open")
        }}
      />
    )
  }

  return (
    <div className="wrapper">
      <Navbar
        show={sideDrawerOpen}
        hamburgerClickHandler={() => {
          setSideDrawerOpen(!sideDrawerOpen)
          document.getElementById("hamburger").classList.toggle("open")
        }}
      />
      {backdrop}
      <main>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
