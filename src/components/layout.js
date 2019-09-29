import React from "react"
import Progress from "react-progress-2"

import Header from "./header"
import CardTable from "./card-table"
import "../static/layout.css"
import "react-progress-2/main.css"

class Layout extends React.Component {
  constructor() {
    super();
    this.state = { isLoaded: false }
  }

  toggleProgress () {
    if(!this.state.isLoaded) {
      Progress.show()
    } else {
      Progress.hide()
    }
    this.setState({ isLoaded: !this.state.isLoaded })
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
          <CardTable toggleProgress={this.toggleProgress}/>
        </div>
      </div>
      </>
    )
  }
}

export default Layout
