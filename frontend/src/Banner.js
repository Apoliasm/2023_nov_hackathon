import React, { Component } from "react";
import Slider from "react-slick";
import './module/slick.css';
import './module/slick-theme.css';

import banner1 from './image/banner1.png';
import banner2 from './image/banner2.png';
import banner3 from './image/banner3.png';
import banner4 from './image/banner4.png';

export default class SimpleSlider extends Component {
    render() {
      const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        draggable: true,
        responsive: [
            {
                breakpoint: 1314,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: true
                }
            },
            {
                breakpoint: 876,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true
                }
            },
            {
                breakpoint: 438,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }
        ]
      };
      return (
        <div>
          <Slider {...settings}>
            <div>
              <img src={banner1} alt="banner1" />
            </div>
            <div>
              <img src={banner2} alt="banner2" />
            </div>
            <div>
              <img src={banner3} alt="banner3" />
            </div>
            <div>
              <img src={banner4} alt="banner4" />
            </div>
          </Slider>
        </div>
      );
    }
  }