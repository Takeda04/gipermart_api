import React, {useState, useEffect} from "react";
import Slider from "react-slick";
import "../../assets/scss/_category.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { Container } from "@mui/system";
import ky from "ky";

const Category = () => {

  const [category, setCategory] = useState([]);

  async function getAll(){
    try {
      const todo = await ky
      .get("https://yruoebgair.tk/outside/slider/")
      .json()
      .then((res) => setCategory(res))
      console.log(todo)
    }catch(err){
      console.log(err.message);
    }
  }


  useEffect(() => {
    getAll();
  }, []);


  let settings = {
    dots: false,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <BsArrowRightCircle size={14} />,
    prevArrow: <BsArrowLeftCircle size={14} />,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="my-4">
      <Container maxWidth="xl">
        <Slider {...settings} className="category-slider">
          {category?.map((item,i) =>(
            <div key={i}>
               <Link to="" className="category-box">
               <img
                 src={item.images}
                 alt=""
               />
               <div>игрушки и товары для дете...1</div>
             </Link>
           </div>
          ))}
          {/* <div>
            <Link to="" className="category-box">
              <img
                src="https://picsum.photos/96/96"
                alt=""
              />
              <div>игрушки и товары для дете...1</div>
            </Link>
          </div>
          <div>
            <Link to="" className="category-box">
              <img
                src="https://picsum.photos/96/96"
                alt=""
              />
              <div>игрушки и товары для дете...2</div>
            </Link>
          </div>
          <div>
            <Link to="" className="category-box">
              <img
                src="https://picsum.photos/96/96"
                alt=""
              />
              <div>игрушки и товары для дете...3</div>
            </Link>
          </div>
          <div>
            <Link to="" className="category-box">
              <img
                src="https://picsum.photos/96/96"
                alt=""
              />
              <div>игрушки и товары для дете...4</div>
            </Link>
          </div>
          <div>
            <Link to="" className="category-box">
              <img
                src="https://picsum.photos/96/96"
                alt=""
              />
              <div>игрушки и товары для дете...5</div>
            </Link>
          </div>
          <div>
            <Link to="" className="category-box">
              <img
                src="https://picsum.photos/96/96"
                alt=""
              />
              <div>игрушки и товары для дете...6</div>
            </Link>
          </div> */}
        </Slider>
      </Container>
    </div>
  );
};

export default Category;
