import React from "react"
import EmojiCard from "./emoji-card"

import "../static/card-table.css"

class CardTable extends React.Component {
  state = { 
    emojiData: [] 
  }

  componentDidMount() {
    const { emojiData } = this.props
    this.setState({ emojiData })
  }

  componentWillReceiveProps({ filteredEmojis }) {
    if (filteredEmojis) {
      this.setState({ emojiData: filteredEmojis })
    }
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
