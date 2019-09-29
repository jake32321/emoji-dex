/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import "../static/search-bar.css"

class SearchBar extends React.Component {
  constructor(props) {
    super();
  }

  render(){  
    return (
      <>  
        <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"></link>
        <div class="box">
            <div class="container-2">
                <span class="icon"><i class="fa fa-search"></i></span>
                <input type="search" id="search" />
            </div>
        </div>
      </>
    )
  }
}

export default SearchBar
