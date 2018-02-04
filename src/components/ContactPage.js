import React from 'react';
import Footer from '../components/Footer';

const ContactPage = () => (
  <div className="content">
    <div className="quick-contact">
      <div className="contact-option">
        <h3>Email: </h3>
        <a href="mailto:beardpatrick80@gmail.com">beardpatrick80@gmail.com</a>
      </div>
      <div className="contact-option">
        <h3>Phone Number:</h3>
        <a href="">555-555-5555</a>
      </div>
    </div>
    <div className="contact-form">
      <form>
        <div className="contact-phone">
          <label for="contact-phone">Phone Number</label>
          <input name="contact-phone" />
        </div>
        <div className="contact-email">
          <label>Email Address</label>
          <input name="contact-email" />
        </div>
        <div className="contact-message">
          <label>Message</label>
          <input name="contact-message"/>
        </div>
        <div className="contact-submit">
          <input name="submit" type="submit" value="Send!"/>
        </div>
      </form>
    </div>
    <Footer />
  </div>
);

export default ContactPage;