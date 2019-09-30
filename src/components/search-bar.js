import React from "react"

import "../static/search-bar.css"

class SearchBar extends React.Component {
  filterEmojis = (event) => {
      console.log(event.target.value);
      this.props.filterEmojis(event.target.value);
  }

  render() {  
    return (
      <>
        <link 
            href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" 
            rel="stylesheet"></link>
        <div className="box">
            <div className="container-2">
                <span className="icon"><i className="fa fa-search"></i></span>
                <input 
                    placeholder="Search..."
                    type="search" 
                    id="search" 
                    onChange={this.filterEmojis}/>
            </div>
        </div>
      </>
    )
  }
}

export default SearchBar
