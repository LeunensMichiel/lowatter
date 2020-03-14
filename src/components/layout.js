import React from "react"
import PropTypes from "prop-types"

import Navbar from "./navigation/navbar"
import Footer from "./footer/footer"

import "../stylesheets/style.scss"

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
