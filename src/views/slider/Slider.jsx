import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "../../assets/scss/_slider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import ky from "ky";

const HomeSlider = () => {
  const [slide, setSlide] = useState([]);
  useEffect(() => {
    console.log(slide);
  }, [slide]);

  async function getAll(){
    try {
      const todo = await ky
      .get("https://yruoebgair.tk/outside/slider/")
      .json()
      .then((res) => setSlide(res))
      console.log(todo)
    }catch(err){
      console.log(err.message);
    }
  }


  useEffect(() => {
    getAll();
  }, []);
  return (
    <Slider
      className="slider"
      infinite={true}
      speed={2000}
      autoplay={true}
      autoplaySpeed={5000}
      slidesToShow={1}
      slidesToScroll={1}
      nextArrow={<FiArrowRightCircle size={16} stroke="#000" fill="#fff" />}
      prevArrow={<FiArrowLeftCircle size={16} stroke="#000" fill="#fff" />}
    >
      {slide?.map((item, i) => (
        <div key={i}>
          {item && (
            <div>
              <span>
                <img src={item.images} alt={"products"} />
              </span>
            </div>
          )}
        </div>
      ))}
      {/* <Link to="/special-order">
        <img src="https://picsum.photos/1400/310" alt="" />
      </Link>
      <Link to="/special-order">
        <img src="https://picsum.photos/1400/310" alt="" />
      </Link>
      <Link to="/special-order">
        <img src="https://picsum.photos/1400/310" alt="" />
      </Link> */}
    </Slider>
  );
};

export default HomeSlider;
