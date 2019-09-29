/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import EmojiCard from "./emoji-card"

import "../static/card-table.css"

class CardTable extends React.Component {
  constructor() {
    super();
    this.state = { emojiData: {} }
  }

  componentDidMount() {
    fetch("https://api.github.com/emojis")
      .then(response => response.json())
      .then((data) => {
        this.setState({ emojiData: data })
      });
  }

  render(){  
    return (
      <>  
      <div
        style={{
          height: window.innerHeight*0.85
        }} 
        className="wrapper">
          <div className="card-table">
              <EmojiCard/>
              <EmojiCard/>
              <EmojiCard/>
              <EmojiCard/>
              <EmojiCard/>
              <EmojiCard/>
              <EmojiCard/>
          </div>
      </div>
      </>
    )
  }
}

export default CardTable
