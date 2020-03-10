import React from "react"
import styled from "@emotion/styled"
import Img from "gatsby-image/withIEPolyfill"
import { graphql } from "gatsby"
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"

import colors from "../components/framework/colors"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = ({ data }) => {
  const intl = useIntl()
  return (
    <Layout>
      <SEO title="Contact Us" description="Contact Lowatter for consultancy and pricing of our services and ask for more information" />
    </Layout>
  )
}
export default ContactPage
