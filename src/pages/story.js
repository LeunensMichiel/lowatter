import React from "react"
import styled from "@emotion/styled"
import Img from "gatsby-image/withIEPolyfill"
import { graphql } from "gatsby"
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"

import colors from "../components/framework/colors"
import Layout from "../components/layout"
import SEO from "../components/seo"

const StoryPage = ({ data }) => {
  const intl = useIntl()
  return (
    <Layout>
      <SEO title="Our Story" description="The stories of LoWatter" />
    </Layout>
  )
}
export default StoryPage
