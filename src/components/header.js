import { Link } from "gatsby"
import React from "react"
import SearchBar from "./search-bar"

import "../static/header.css"

class Header extends React.Component {
  render() {
    const { filterEmojis, siteDescription, siteTitle } = this.props;
    return (
      <header>
        <div className="div-wrapper"
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0.9rem 0.5rem`,
            position: "relative"
          }}
        >
          <div
            style={{
              width: "70%",
              float: "left"
            }}>
              <h1 style={{ margin: 0 }}>
              <Link
                to="/"
                style={{
                  color: `white`,
                  textDecoration: `none`,
                  textShadow: `0px 0px  8px #000000`
                }}
              >
                {siteTitle}
              </Link>
            </h1>
            <p
              style={{
                color: 'white',
                paddingTop: 5
              }}>
              {siteDescription}
            </p>
          </div>
          <div
            style={{
              width: "30%",
              float: "right",
              padding: "10px"
            }}>
            <SearchBar
              filterEmojis={filterEmojis}
            />
          </div>
        </div>
      </header>
    )
  }
}

export default Header
