/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import "../static/card.css"
// import 'bootstrap/dist/css/bootstrap.min.css';

class EmojiCard extends React.Component {
  constructor (props) {
    super();

    this.imgURL = props.imgURL;
    this.name = props.name;
  }

  render () {
    return (
      <>  
      <div className="card">
        <img src={this.imgURL}/>
      </div>
      </>
    )
  } 
}

export default EmojiCard
