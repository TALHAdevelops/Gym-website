import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'

export default function page() {
  return (
    <div>
        <Navbar/>
        <div className="contact">
            <div className="contactheading">
                <h1>Contact Us</h1>
            </div>
            <div className="contactform">
                <form action="">
                    <div>  <input type="text" placeholder='Name' /></div>
                    <div><input type="email" placeholder='Email' /></div>
                    <div><input type="text" placeholder='Subject' /></div>
                    <div>   <textarea name="" id="" placeholder='Message' cols={30} rows={3}></textarea></div>
                    <div><button type='submit' className="mainbutton2">Send Message</button></div>

                  
                    
                    
                 
                    
                </form>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
