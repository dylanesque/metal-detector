import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h2>Discover the bands that ring true for you</h2>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridTemplateAreas: "repeat(2, 1fr)",
        gap: "8px",
      }}
    >
      <StaticImage
        src="../images/judas.jpeg"
        alt="judas"
        placeholder="blurred"
        layout="fixed"
        width="300"
        height="250"
        transformOptions={{ fit: "contain" }}
      />
      <StaticImage
        src="../images/immortal.jpeg"
        alt="immortal"
        placeholder="blurred"
        layout="fixed"
        width="300"
        height="250"
        transformOptions={{ fit: "contain" }}
      />
      <StaticImage
        src="../images/windhand.jpeg"
        alt="wind"
        placeholder="blurred"
        layout="fixed"
        width="300"
        height="250"
        transformOptions={{ fit: "contain" }}
      />
      <StaticImage
        src="../images/sabb.jpeg"
        alt="sabbath"
        placeholder="blurred"
        layout="fixed"
        width="300"
        height="250"
      />
    </div>
  </Layout>
)

export default IndexPage
