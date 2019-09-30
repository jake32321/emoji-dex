import React from "react"
import EmojiCard from "./emoji-card"

import "../static/card-table.css"

class CardTable extends React.Component {
  state = { 
    emojiData: [] 
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

  componentDidMount() {
    const { toggleProgress } = this.props;
    toggleProgress()
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

          this.setState({ emojiData })
          toggleProgress()
      });
  }

  render() {  
    return (
      <div
        style={{
          paddingTop: "15px",
          height: window.innerHeight*0.9
        }} 
        className="wrapper">
          <div className="card-table">
            {this.state.emojiData.map((emoji, idx) => 
              <EmojiCard 
                key={idx}
                imgURL={emoji.imgURL} 
                name={emoji.name} 
                readableName={emoji.readableName} />)}
          </div>
      </div>
    )
  }
}

export default CardTable
