// import { useState } from "react"
import Hero from "../Components/Hero/Hero"
import Navbar from "../Components/Navbar/Navbar"
import Offers from "../Components/Offers/Offers"
import Search from "../Components/Search/Search"
import "./home.css"

const Home = () => {
  // const [searched, setSearched] = useState(false);

  return (
    <div className="home">
        <Navbar/>
        <Hero/>
        <Search/>
        <Offers/>
    </div>
  )
}

export default Home