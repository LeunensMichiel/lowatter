import React, { useState } from "react"
import PropTypes from "prop-types"

import Navbar from "./navigation/navbar"
import Backdrop from "./navigation/backdrop"
import Footer from "./footer/footer"

import "../stylesheets/style.scss"

const Layout = ({ children }) => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)
  let backdrop

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
