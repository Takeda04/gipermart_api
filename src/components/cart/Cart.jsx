import React, { useState, useEffect } from "react";
import "../../assets/scss/_cart.scss";
import { BiHeart } from "react-icons/bi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Cart = ({ cart, favorite }) => {
  const navigate = useNavigate();
  // const [isLoading, setIsLoading] = useState(false);
  // const [wishAllId, setWishAllId] = useState([]);
  const [bannerData, setBannerData] = useState([]);
  useEffect(() => {
    axios
      .get("https://yruoebgair.tk/outside/slider/")
      .then((res) => {
        setBannerData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return bannerData?.map((item, i) => (
    <div className="cart" key={i}>
      <button
        className={`${!favorite ? "favorite" : "favorited"} favorite-icon`}
      >
        <BiHeart size={24} />
      </button>
      <div>
        <div className="flex flex-col">
          <div
            onClick={() => navigate("/detail")}
            className="cart-image"
            key={i}
          >
            <img src={item.images} alt={"products"} />
          </div>

          <div onClick={() => navigate("/detail")} className="cart-name">
            Acer Aspire 3 Intel Pentium N4500/4GB/1TB HDD/Intel Cor i 10
          </div>

          <div className="rassrochka f-bold text-center">
            389 200 сум/ 12 мес
          </div>
          <div className="cart-action">
            <div className="cart-price f-bold">3 113 600 Сум</div>
            <button className="cart-basket hover:shadow-lg shadow-none">
              <HiOutlineShoppingCart stroke="rgb(33, 26, 26)" size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default Cart;
