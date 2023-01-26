import { Container } from "@mui/system";
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Title from "../title/Title";
import "../../assets/scss/_stock.scss";
import Slider from "react-slick";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import axios from "axios";

const Stock = (data) => {

  // const [isLoading, setIsLoading] = useState(false);
  const [wishAllId, setWishAllId] = useState([]);


  let settings = {
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    nextArrow: <BsArrowRight color="#eb7471" size={24} />,
    prevArrow: <BsArrowLeft color="#eb7471" size={24} />,

    responsive: [
      {
        breakpoint: 1360,
        settings: {
          slidesToShow: 3,
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
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const userid = localStorage.getItem("userId");
    axios
      .get(
        `https://fathulla.tk/products/api/v1/houses/get-wishlist-houses?user=${userid}`
      )
      .then((data) => {
        setWishAllId(() => {
          return data.data.results.map((item) => item.product.id);
        });
      })
      .catch((er) => console.log(er));
  }, [wishAllId]);

  return (
    <Container maxWidth="xl">
      <Title title="Акции" style="f-bold mt-6 mb-2" />
      <Slider {...settings} className="stock">
        <Link to="" className="pr-4">
        <div className="cards-item__top">
          <img
            src={data.images?.length && data.images[0].images}
            alt={data.title}
          />
        </div>
          {/* <img src="https://picsum.photos/450/180" alt="" /> */}
        </Link>
        <Link to="" className="pr-4">
        <div className="cards-item__top">
          <img
            src={data.images?.length && data.images[0].images}
            alt={data.title}
          />
        </div>
          {/* <img src="https://picsum.photos/450/180" alt="" /> */}
        </Link>
        <Link to="" className="pr-4">
        <div className="cards-item__top">
          <img
            src={data.images?.length && data.images[0].images}
            alt={data.title}
          />
        </div>
          {/* <img src="https://picsum.photos/450/180" alt="" /> */}
        </Link>

        
      </Slider>
    </Container>
  );
};

export default Stock;
