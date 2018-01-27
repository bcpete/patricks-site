import React from 'react';
import HeaderCarousel from './Carousel';

const HomePage = () => (
  <div>
    <HeaderCarousel title={"Beard's Design & Fabrication"} image={"/images/bullets.jpg"}/>
    <div>
      <div className="content">
        <h1 className="is-active">
          About Me
        </h1>
        <p>
          You know I get the wood and I just work it. Nothing feels better than having
          some nice firm wood to work.
        </p>
      </div>
    </div>
  </div>
);

export default HomePage;