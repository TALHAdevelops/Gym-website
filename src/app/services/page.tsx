import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import Image from "next/image";
import equip from "../assets/equip.jpeg"
import trainer from "../assets/trainer.jpg"
import rest  from "../assets/rest.jpg"
export default function page() {
  return (
    <div>
      <Navbar />
      <div className="services">
        <div className="ser">
          <div className="ser1content">
                <h3 className="serheading">Machinery/Equipments</h3>
                <p className="serpara">Our gym offers top-of-the-line, well-maintained equipment to support all fitness goals. With advanced cardio machines, free weights, and resistance tools, members have access to the best resources for strength, endurance, and flexibility training</p>
          </div>
          <div>
        <Image src={equip} alt="" className="serimg"></Image>
          </div>
        </div>
        <hr />
        <div className="ser">
          <div className="ser2content">
          <h3 className="serheading">Professional Trainers</h3>
          <p className="serpara">Our team of certified, experienced trainers is dedicated to helping you reach your fitness goals. Whether you&apos;re a beginner or an advanced athlete, our trainers provide personalized guidance, motivation, and support every step of the way. With expertise in various training techniques, they&apos;re here to ensure safe, effective workouts tailored to your needs.</p>
          </div>
          <div >
          <Image src={trainer} alt="" className="serimg"></Image>
          </div>
        </div>
        <hr />
        <div className="ser">
          <div className="ser3content">
          <h3 className="serheading">Recovery & Wellness Services</h3>
          <p className="serpara">Our Gym also provides Recovery & Wellness Services, including cryotherapy, infrared saunas, and foam rolling, to help reduce soreness, improve flexibility, and speed up recovery, keeping you at your best both in and out of the gym</p>
          </div>
          <div >
          <Image src={rest} alt="" className="serimg"></Image>
          </div>
          
        

          
        </div>
      </div>
      <Footer />
    </div>
  );
}
