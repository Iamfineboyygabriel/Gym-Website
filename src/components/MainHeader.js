//HOME HEADER COMPONENT
import { Link } from "react-router-dom";
import HeaderMan from "../images/main_header.png"




const MainHeader = () => {
  return (
    <header className="main__header">
        <div className="container main__header-container">
            <div className="main__header-left">
              <h4>#100DaysofWorkOut</h4> 

              <h1>Join The Legends Of <br /> The Fitness World</h1>

              <p>Transform your life and boost your well-being 
                with our 30-day fitness challenge. Join us in achieving 
                a healthier and happier you.</p>

               <Link to="/plans" className="btn-12"><span>Click!</span><span>Get Started</span></Link>

               {/* <button class="custom-btn btn-12"><span>Click!</span><span>Get Started</span></button> */}


            </div>
            <div className="main__header-right">
              <div className="main__header-circle"></div>
              <div className="main__header-image">
                <img src={HeaderMan } alt="Main Header"/>
              </div>
            </div>
        </div>
    </header>
  )
}// sp-container = container main__header
//sp-content = main__header-left

export default MainHeader;