import React from "react"
import "../static/card.css"

const EmojiCard = ({ readableName, name, imgURL }) => (
  <div className="card">
    <img 
      alt={readableName} 
      key={name} 
      src={imgURL}/>
  </div>
);

export default EmojiCard
