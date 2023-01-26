import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import Title from "../title/Title";
import "../../assets/scss/_brands.scss";
import { Link } from "react-router-dom";
// import Slider from "react-slick";
// import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import ky from "ky";

const Brands = () => {
  const [brands, setBrand] = useState([]);

  async function getAll() {
    try {
      const todo = await ky
        .get("https://yruoebgair.tk/outside/slider/")
        .json()
        .then((res) => setBrand(res));
      console.log(todo);
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    getAll();
  }, []);

  return (
    <Container maxWidth="xl">
      <Title title={"Популярные бренды"} style={'f-bold'} />

      <div className="brands my-4">
        {brands?.map((item, i) => (
          <Link to="/" className="brand " key={i}>
            <img src={item.images} alt="brands" />
          </Link>
        ))}
      </div>

      {/* 
        <Link to="/" className="brand">
          <img src="https://picsum.photos/160/88" alt="" />
        </Link>
        <Link to="/" className="brand">
          <img src="https://picsum.photos/160/88" alt="" />
        </Link>
        <Link to="/" className="brand">
          <img src="https://picsum.photos/160/88" alt="" />
        </Link>
        <Link to="/" className="brand">
          <img src="https://picsum.photos/160/88" alt="" />
        </Link>
        <Link to="/" className="brand">
          <img src="https://picsum.photos/160/88" alt="" />
        </Link>
        <Link to="/" className="brand">
          <img src="https://picsum.photos/160/88" alt="" />
        </Link>
        <Link to="/" className="brand">
          <img src="https://picsum.photos/160/88" alt="" />
        </Link>
        <Link to="/" className="brand">
          <img src="https://picsum.photos/160/88" alt="" />
        </Link>
        <Link to="/" className="brand">
          <img src="https://picsum.photos/160/88" alt="" />
        </Link>
        <Link to="/" className="brand">
          <img src="https://picsum.photos/160/88" alt="" />
        </Link>
      </div> */}
    </Container>
  );
};

export default Brands;
