// import React from 'react'
import axios from 'axios';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import hospitalImg from "../../assets/hospital-icon-search.png";
import "./SearchResults.css";
import { useNavigate } from 'react-router-dom';

const SearchResults = ({city, state}) => {
   const [SearchResults, setSearchResults] = useState([]);
  useEffect(()=>{
    axios.get(`https://meddata-backend.onrender.com/data?state=${state}&city=${city}`)
    .then(response => {
        // console.log("API response:", response.data); // Log API response
        setSearchResults(response.data);
  })
    .catch(error => console.log("Error fetching Medical centers:", error));
    // console.log(SearchResults);
  },[city,state]);
  const navigate = useNavigate();
  const handleBookAppointment = () => {
    navigate('/appointment');
}

  return (
    <div>
        <ul className='search-results'>
            <div className="heading-details">
                <h2 className='heading'>{SearchResults.length} medical centers available in {state} {city}</h2>
                <h3 className='sub-heading'>Book appointments with minimum wait time and verified doctors details</h3>
            </div>
            <div className="search-list">
                {SearchResults.map((result, index) =>(
                    <li className='list-item' key={index}>
                        <div className="hospital-img"><img src={hospitalImg} alt="Hospital IMG" /></div>
                        <div className="hospital-details">
                            <div className="hospital-name">{result['Hospital Name']}</div>
                            <div className="hospital-address">{result['City']}, {result['State']}
                            </div>
                            <p>{result['Hospital Type']}</p>
                            <div className="hospital-charges"><span className='span-green'>FREE</span> <span className='span-cost'>500$</span><span>Consultation fee at clinic</span></div>

                        </div>
                        <div className="hospital-booking">
                            <p className='available'>Available Today</p>
                            <button className='book-btn' onClick={handleBookAppointment}>Book free center visit</button>
                        </div>
                    </li>
                ))}
            </div>
        {/* {SearchResults.map((result, index) => (
          <li key={index}>{result.Address}</li>
          
        ))} */}
      </ul>
    </div>
  )
}
SearchResults.propTypes = {
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired
  };
export default SearchResults