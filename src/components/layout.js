import React from "react"
import Progress from "react-progress-2"

import Header from "./header"
import CardTable from "./card-table"
import "../static/layout.css"
import "react-progress-2/main.css"

class Layout extends React.Component {
  state = {
    emojiData: [],
    filteredEmojiData: [],
    isLoaded: false
  }

  filterEmojis = (event) => {
    const filteredEmojiData = this.state.emojiData.filter(emojiData => 
      emojiData.name.includes(event.target.value))
    this.setState({ filteredEmojiData })
  }

  createReadableName = (name) => {
    let splitName;
    if (!name.includes("_")) {
      splitName = [ name ]
    } else {
      splitName = name.split("_")
    }
    
    return splitName.map(readableNamePart => 
      readableNamePart[0].toUpperCase() + readableNamePart.slice(1)
    ).join(" ");
  }

  componentDidMount = () => {
    Progress.show()
    fetch("https://api.github.com/emojis")
      .then(response => response.json())
      .then((data) => {
          const emojiData = Object.keys(data).map(emojiName => {
            const readableName = this.createReadableName(emojiName);   

            return ({ 
              name: emojiName, 
              imgURL: data[emojiName], 
              readableName
            })
          }) 

          this.setState({ emojiData, isLoaded: true })
          Progress.hide()
      });
  }

  render() {
    return (
      <div 
        style={{
          display: "flex",
          flexDirection: "column",
        }}>
        <Header 
          siteTitle={`EmojiDex 😊`} 
          siteDescription={`An index of GitHub emojis.`}
          filterEmojis={this.filterEmojis}
        />
        <Progress.Component 
          style={{height: "3px"}} 
          thumbStyle={{background: "#FFC83D"}}/>
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
          {this.state.isLoaded && <CardTable 
            emojiData={this.state.emojiData} 
            filteredEmojis={this.state.filteredEmojiData}/>}
        </div>
      </div>
    )
  }
}

export default Layout
