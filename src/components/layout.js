import React from "react"
import PropTypes from "prop-types"

const Layout = ({ children }) => {
  return (
    <>
      <div style={{ width: "90vw", margin: "0 auto" }}>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built by
          <a href="https://www.leunesmedia.com"> Leunes Media</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
