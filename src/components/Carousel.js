import React from 'react';
import Slider from 'react-slick';

class HeaderCarousel extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      dots: true,
      fade: true,
      infinite: true,
      slidesToScroll: 1,
      slidesToShow: 1,
      speed:500,
      autoplay: true,
      autoplaySpeed: 3000,
    };
  };

  render() {
    return (
      <Slider {...this.state}>
        <div className="newcontainer">
          <img className="img-fluid" src="/images/bullets.jpg" />
          <h1 className="text-block">Beard's Designs</h1>
        </div>
        <div><h3>Test2</h3></div>
        <div><h3>Test3</h3></div>
        <div><h3>Test4</h3></div>
      </Slider>
    );
  };
};

export default HeaderCarousel