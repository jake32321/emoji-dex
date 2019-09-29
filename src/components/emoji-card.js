import React from "react"
import "../static/card.css"

class EmojiCard extends React.Component {
  constructor (props) {
    super();

    this.imgURL = props.imgURL;
    this.name = props.name;
    this.readableName = props.readableName;
  }

  render () {
    return (
      <>  
      <div className="card">
        <img alt={this.readableName} key={this.name} src={this.imgURL}/>
      </div>
      </>
    )
  } 
}

export default EmojiCard
