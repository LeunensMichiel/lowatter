import React, { useState } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Navbar from "./navigation/navbar"
import Backdrop from "./navigation/backdrop"
import Footer from "./footer/footer"
import Notification from "./notification"

import "../stylesheets/style.scss"

const Layout = ({ children, data }) => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)
  let backdrop
  const currentDate = new Date()
  const beginDate = new Date(data.notification.frontmatter.begindate)
  const endDate = new Date(data.notification.frontmatter.enddate)

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
      {currentDate >= beginDate && currentDate < endDate && (
        <Notification notification={data.notification.frontmatter} />
      )}
      <main>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        notification: markdownRemark(fileAbsolutePath: { regex: "/notification.md/" }) {
          frontmatter {
            descriptionEn
            descriptionNl
            enddate
            begindate
            relatedStoryNl
            relatedStoryEn
            titleEn
            titleNl
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
)
