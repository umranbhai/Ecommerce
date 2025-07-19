import React from "react";
import './app.css'; // Assuming you have a CSS file for styling


function Contact() {
  return <>
    <div className="contact-container w-[1200px] mx-auto text-center bg-gray-100 ">
      <h1 className="contact-title text-3xl font-bold">Contact Us</h1>
      <p className="contact-description">We would love to hear from you! Please reach out with any questions or feedback.</p>
      <div className="location-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1836.0127692735398!2d72.626995!3d23.0228345!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8662b483f08b%3A0x2ac197f423281748!2sNoor%20Mahal%20Hotel%2C%20Macchi%20Market%2C%2012%2C%20Rakhial%20Rd%2C%20Noor%20Nagar%2C%20Bapunagar%2C%20Ahmedabad%2C%20Gujarat%20380023!5e0!3m2!1sen!2sin!4v1752572769040!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <form className="contact-form text-start flex flex-col mx-auto my-5 px-4 py-10 max-w-md bg-white shadow-2xl shadow-gray-600 rounded-lg" action="https://formspree.io/f/xjkovvre" method="post">
        <label htmlFor="username" className="contact-label">Your Name</label>
        <input name="Username" type="text" required className="contact-input" placeholder="Please enter your name" />
        <label htmlFor="email" className="contact-label">Your Email</label>
        <input name="Email" id="email" type="email" required className="contact-input" placeholder="Please enter your email" />
        <label htmlFor="phone" className="contact-label">Your Phone</label>
        <input name="Phone" id="phone" type="tel" required className="contact-input" />
        <label htmlFor="message" className="contact-label">Your Message</label>
        <textarea name="Message" id="message" required className="contact-textarea"></textarea>
        <button type="submit" className="contact-button">Submit</button>
      </form>
    </div>
  </>

}

export default Contact;