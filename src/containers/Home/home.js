import React from 'react';
import Slider from 'react-slick';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import HeroBox from '../../components/HeroBox/hero';
import Info from '../../components/Info/info';

require('./home.css');

export default React.createClass({
  render() {
    const sliderSettings = {
      dots: true,
      arrows: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div id="home">
        <Header />

        <div id="main">
          <div className="container">
            <Slider {...sliderSettings}>
              <div>
                <img src="http://placehold.it/1920x900" />
              </div>
            </Slider>
            
            <HeroBox />
            <Info />
            
            <div id="organizations">
              <img src="http://placehold.it/350x150" />
              <img src="http://placehold.it/350x150" />
              <img src="http://placehold.it/350x150" />
              <img src="http://placehold.it/350x150" />
              <img src="http://placehold.it/350x150" />
              <img src="http://placehold.it/350x150" />
              <img src="http://placehold.it/350x150" />
              <img src="http://placehold.it/350x150" />
              <img src="http://placehold.it/350x150" />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
});
