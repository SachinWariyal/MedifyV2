// import React from 'react'
import "./Search.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass }from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  return (
    <div className="search-container">
        <input type="text" className="state" placeholder='State'/>
        <input type="text" className="city"  placeholder="City"/>
        <div className="search-box">
        <FontAwesomeIcon icon={faMagnifyingGlass} /> Search
        </div>
    </div>
  )
}

export default Search