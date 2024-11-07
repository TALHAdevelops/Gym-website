import Navbar from "../components/navbar";
import Image from "next/image";
import aboutimg from "../assets/workout.jpeg";
import Footer from "../components/Footer";

export default function page() {
  return (
    <div>
        <Navbar/>
        <div className="about">
         <div> <h1 className="aboutheading">About Us</h1>
          <p className="aboutpara">At FitWithTalha, we believe in empowering our community to lead healthier, stronger lives. Our gym is equipped with top-of-the-line machines, free weights, and functional training areas to suit all fitness levels. Whether you're a beginner or a seasoned athlete, our experienced trainers are here to guide and motivate you every step of the way. From high-energy group classes to personalized training programs, we provide a supportive and motivating environment designed to help you achieve your goals. Join us and be a part of a fitness community that prioritizes growth, resilience, and well-being.
            <br />
            <br />
          For Further Details:
        <br />
        
          <button className="mainbutton2">Contact Now</button>
        
       
          </p>
          </div>
        <div className="img">
          <Image src={aboutimg} alt=""  className="aboutimg" ></Image>
        </div>        
        </div>
      
        <Footer/>
        </div>
  )
}
