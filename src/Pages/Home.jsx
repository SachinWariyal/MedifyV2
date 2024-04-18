import Hero from "../Components/Hero/Hero"
import Navbar from "../Components/Navbar/Navbar"
import Search from "../Components/Search/Search"
import "./home.css"

const Home = () => {
  return (
    <div className="home">
        <Navbar/>
        <Hero/>
        <Search/>
    </div>
  )
}

export default Home