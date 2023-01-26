import React, { Component } from "react";
import Slider from "react-slick";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { height } from "@mui/system";

export default class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    return (
      <div>
        <Slider
          asNavFor={this.state.nav2}
          ref={(slider) => (this.slider1 = slider)}
          className="main-img"
          arrows={false}
        >
          <div className="carousel-img">
            <img src="https://picsum.photos/490/435" alt="" />
          </div>
          <div className="carousel-img">
            <img src="https://picsum.photos/490/435" alt="" />
          </div>
          <div className="carousel-img">
            <img src="https://picsum.photos/490/435" alt="" />
          </div>
          <div className="carousel-img">
            <img src="https://picsum.photos/490/435" alt="" />
          </div>
          <div className="carousel-img">
            <img src="https://picsum.photos/490/435" alt="" />
          </div>
          <div className="carousel-img">
            <img src="https://picsum.photos/490/435" alt="" />
          </div>
        </Slider>
        <Slider
          asNavFor={this.state.nav1}
          ref={(slider) => (this.slider2 = slider)}
          slidesToShow={4}
          className="image-gallery"
          swipeToSlide={true}
          focusOnSelect={true}
          nextArrow={
            <IoIosArrowForward
              fill="#000"
              style={{ minWidth: "36px", height: "36px" }}
              size={36}
            />
          }
          prevArrow={
            <IoIosArrowBack
              fill="#000"
              style={{ minWidth: "36px", height: "36px" }}
              size={36}
            />
          }
        >
          <div className="carousel-img">
            <img src="https://picsum.photos/123/80" alt="" />
          </div>
          <div className="carousel-img">
            <img src="https://picsum.photos/123/80" alt="" />
          </div>
          <div className="carousel-img">
            <img src="https://picsum.photos/123/80" alt="" />
          </div>
          <div className="carousel-img">
            <img src="https://picsum.photos/123/80" alt="" />
          </div>
          <div className="carousel-img">
            <img src="https://picsum.photos/123/80" alt="" />
          </div>
          <div className="carousel-img">
            <img src="https://picsum.photos/123/80" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
