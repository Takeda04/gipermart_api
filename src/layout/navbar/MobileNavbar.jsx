import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../../assets/scss/_navbar.scss";
import { GoHome } from "react-icons/go";
import { BiHeart } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { SlPlane } from "react-icons/sl";

const MobileNavbar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="mobile-navbar border-t">
      <Link to="/" className={`${pathname === "/" && "router-active"}`}>
        <GoHome size={24} />
      </Link>
      <Link
        to="/favorites"
        className={`${pathname === "/favorites" && "router-active"}`}
      >
        <BiHeart size={24} />
      </Link>
      <Link
        to="/profile/order"
        className={`mobile-plane ${pathname === "/profile/order" && "router-active"}`}
      >
        <SlPlane className="dis" size={24} />
      </Link>
      <Link
        to="/basket"
        className={`${pathname === "/basket" && "router-active"}`}
      >
        <HiOutlineShoppingCart size={24} />
      </Link>
      <Link
        to="/profile"
        className={`${pathname === "/profile" && "router-active"}`}
      >
        <CgProfile size={24} />
      </Link>
    </div>
  );
};

export default MobileNavbar;
