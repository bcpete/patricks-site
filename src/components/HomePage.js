import React from 'react';
import HeaderCarousel from './Carousel';
import Footer from './Footer';
import ContactFormik from './ContactPage';

const HomePage = () => (
  <div>
    <HeaderCarousel title={"Beard's Design & Fabrication"} image={"/images/frontpage.png"}/>
    <div>
      <div className="content">
        <h1 className="is-active">
          About
        </h1>
        <p className="subtitle">
          Beard's Design & Fabrication is a one-man team started in 2017 dedicated 
          to the idea that nothing is too large or small to create. Giving life to an 
          idea through design, and bringing it into reality is my passion. Browse the 
          gallery of finished, and in progress pieces, and contact me if you are 
          interested in purchasing anything. You can also send me an email, call/text 
          me, or use the contact form below to reach out with anything you want 
          me to make, and I'll get started right away.
        </p>
      </div>
    </div>
    <ContactFormik />
    <Footer />
  </div>
);

export default HomePage;