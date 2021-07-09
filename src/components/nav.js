import * as React from "react"
import { Link } from "gatsby"

export function Nav() {
  return (
    <nav style={{ marginLeft: 'auto', alignSelf: 'center'}}>
      <Link to="/bands">Bands</Link>
      <Link to="/links">Links</Link>
      <Link to="/about">About</Link>
    </nav>
  )
}
