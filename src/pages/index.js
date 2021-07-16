import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <StaticImage src="../images/windhand.jpeg" alt="band photo" placeholder="blurred" width="550" height="366" layout="fixed" />
  </Layout>
)

export default IndexPage
