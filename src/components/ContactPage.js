import React from 'react';
import Footer from '../components/Footer';

const ContactPage = () => (
  <div>
    <div className="contact-container">
      <div className="contact-form">
        <form>
          <div className="input-half">
            <input name="fromName" placeholder="Your Name" type="text"/>
          </div>
          <div className="input-half">
            <input name="fromEmail" placeholder="Your Email" type="email" />
          </div>
          <div className="input-half">
            <input name="fromPhone" placeholder="Your Phone Number" type="text"/>
          </div>
          <div className="input-half">
            <input name="fromSubject" placeholder="Subject" type="text"/>
          </div>
          <div className="input-full">
            <textarea name="messageBody" placeHolder="Your Message" />
          </div>
          <input type="submit" value="Send Message" />
        </form>
      </div>
      <div className="contact-info">
        <h1>Patrick Beard</h1>
        <hr />
        <div className="contact-info_text-block">
          <h2> Email </h2>
          <hr />
          <p> blah@blah.blah </p>
          <h2> Phone </h2>
          <hr />
          <p> 555-555-5555 </p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default ContactPage;