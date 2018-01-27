import React from 'react';
import Slider from 'react-slick';

class HeaderCarousel extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      dots: false,
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
          <img className="img-fluid" src={this.props.image} />
          <div className="text-block">
            <h1 className="title">{this.props.title}</h1>
          </div>
        </div>
      </Slider>
    );
  };
};

export default HeaderCarousel