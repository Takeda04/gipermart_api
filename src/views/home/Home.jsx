import React from "react";
import Departments from "../../components/departments/Departments";
import Media from "../../components/media/Media";
import Brands from "../../components/popular/Brands";
import Recommendations from "../../components/recommendations/Recommendations";
import SportCarts from "../../components/sport/SportCarts";
import Stock from "../../components/stock/Stock";
import Category from "../category/Category";
import HomeSlider from "../slider/Slider";

const Home = () => {
  return (
    <>
      <HomeSlider />
      <Category />
      <Recommendations />
      <Stock />
      <Departments />
      <Media />
      <SportCarts />
      <Brands />
    </>
  );
};

export default Home;
