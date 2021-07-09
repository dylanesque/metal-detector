import * as React from "react"
import { Link } from "gatsby"

import { Nav } from './nav';

// TODO: Fix the minimum width of the header

const Header = () => (
  <header
    style={{
      background: `black`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        display: `flex`,
        flexDirection: `row`,
        margin: `0 auto`,
        maxWidth: `100vw`,
        minWidth: `400px`,
        padding: `1rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Metal Detector
        </Link>
      </h1>
      <Nav />
    </div>
  </header>
)

export default Header
