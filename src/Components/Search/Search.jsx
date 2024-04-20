// import React from 'react'
import "./Search.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass }from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import SearchResults from "../SearchResults/SearchResults";

const Search = () => {
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(''); 
  const [searched, setSearched] = useState(false);
  useEffect(() => {
    axios.get("https://meddata-backend.onrender.com/states")
    .then((response) => setStates(response.data))
    .catch((error) => console.log("Error fetching states:", error));
  },[]);

  const handleStateChange = (event) => {
    const stateName = event.target.value;
    setSelectedState(stateName);
    // console.log(stateName);
    // console.log(selectedState);

    //fetch cities based on state:

    axios.get(`https://meddata-backend.onrender.com/cities/${stateName}`)
    .then((response) => setCities(response.data))
    .catch((error) => console.log('Error fetching cities', error))
  }
  const handleCityChange = (event) => {
    const cityName = event.target.value;
    setSelectedCity(cityName);
    // console.log(selectedCity);
    // console.log(cityName);
  }
  const handleSearch =() =>{
    if(selectedState===""){
      return;
    }else{
      setSearched(true);
      console.log("Search Clicked")

    }
  }

  return (
    <div className="search-full" id="hospitals">
    <div className="search-container">
        {/* <input type="text" className="state" placeholder='State' onChange={handleStateChange}/> */}
          <select name="" id="" onChange={handleStateChange}>
          <option value="">Select State</option>
          {states.map((state) => (
            <option key={state}>{state}</option>
          ))}
          </select>
        {/* <input type="text" className="city"  placeholder="City" onChange={handleCityState}/> */}
        <select name="" id="" onChange={handleCityChange}>
          <option value="">Select City</option>
          {cities.map((city)=>(
            <option key={city}>{city}</option>
          ))}
        </select>
        <div className="search-box" onClick={handleSearch}  >
        <FontAwesomeIcon icon={faMagnifyingGlass} /> Search
        </div>
    </div>
        {searched && <SearchResults state={selectedState} city={selectedCity} searched={handleSearch}/>}
        </div>
  )
}

export default Search