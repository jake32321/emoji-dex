/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes, { func } from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Progress from "react-progress-2";

import Header from "./header"
import CardTable from "./card-table"
import "../static/layout.css"
import "react-progress-2/main.css"

class Layout extends React.Component {
  constructor() {
    super();
    this.state = { isLoaded: false }
    this.isLoaded = this.loadHanlder.bind(this);
  }

  loadHanlder (isLoaded) {
    if (!isLoaded) {
      console.log('running')
      Progress.show()
    } else {
      console.log('done')
      Progress.hide()
    }
  }

  render() {
    return (
      <>
      <div 
        style={{
          display: "flex",
          flexDirection: "column",
        }}>
        <Header siteTitle={`EmojiDex 😊`} siteDescription={`An index of GitHub emojis.`} />
        <Progress.Component style={{height: "3px"}} thumbStyle={{background: "#FFC83D"}}/>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
            justifyItems: "center",
            overflow: "auto",
          }}
        >
          <CardTable loadHandler={this.loadHanlder}/>
        </div>
      </div>
      </>
    )
  }
}

export default Layout
