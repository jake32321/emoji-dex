/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "../static/card.css"

const EmojiCard = ({ imgURL, name }) => {
  console.log(imgURL)
  return (
    <>  
    <div className="card">
      <img src={imgURL}/>
    </div>
    </>
  )
}

EmojiCard.propTypes = {
  imgURL: PropTypes.string,
  name: PropTypes.string
}

EmojiCard.propTypes = {
  imgURL: ``,
  name: ``
}

export default EmojiCard
