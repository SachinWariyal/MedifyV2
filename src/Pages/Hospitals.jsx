// import React from 'react'

import { useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar"
import Search from "../Components/Search/Search";
import SearchResults from "../Components/SearchResults/SearchResults"
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import "./hospitals.css"
import Offers from "../Components/Offers/Offers";
// import { useParams } from 'react-router-dom';
const Hospitals = ({ city, state }) => {
    // const { city, state } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        if (city && state) {
          // If city and state are provided, trigger the search
          navigate('/hospitals', { state, city });
        }
      }, [city, state, navigate]);
  return (
    <>
    <Navbar/>
    <div className="search-component">
    <Search city={city} state={state}/>

    </div>
    <SearchResults city={city} state={state}/>
    <Offers/>
    </>
  )
}
Hospitals.propTypes = {
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired
  };
export default Hospitals