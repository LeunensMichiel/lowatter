import React from "react"
import PropTypes from "prop-types"

import Navbar from "./navigation/navbar"

import "../stylesheets/style.scss"

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <Navbar />
      <main>{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
