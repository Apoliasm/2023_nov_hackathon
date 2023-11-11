import React, { Component } from "react";
import Slider from "react-slick";
import './module/slick.css';
import './module/slick-theme.css';

import banner1 from './image/banner1.png';

export default class SimpleSlider extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        draggable: true
      };
      return (
        <div>
          <Slider {...settings}>
            <div>
              <img src={banner1} alt="banner1" />
            </div>
            <div>
              <img src={banner1} alt="banner1" />
            </div>
            <div>
              <img src={banner1} alt="banner1" />
            </div>
            <div>
              <img src={banner1} alt="banner1" />
            </div>
          </Slider>
        </div>
      );
    }
  }