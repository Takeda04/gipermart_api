import { Button, Dialog } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NavbarCatalog = ({ openModal, closeModal }) => {
  return (
    <div>
      <Dialog
        open={openModal}
        onClose={closeModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="navbar-catalog-modal"
      >
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-x-4 gap-y-6">
          <div className="catalog-box flex flex-col gap-y-2">
            <Link to="" className="catalog-main">
              <div className="main-image">
                <img
                  src="https://picsum.photos/96/96"
                  alt=""
                />
              </div>
              <div className="main-name">ноутбуки и принтеры</div>
            </Link>
            <Link to="" className="red">
              Смартфоны
            </Link>
            <Link to="" className="red">
              Смартфоны
            </Link>
            <Link to="" className="red">
              Смартфоны
            </Link>
          </div>
          <div className="catalog-box flex flex-col gap-y-2">
            <Link to="" className="catalog-main">
              <div className="main-image">
                <img
                  src="https://picsum.photos/96/96"
                  alt=""
                />
              </div>
              <div className="main-name">ноутбуки и принтеры</div>
            </Link>
            <Link to="" className="red">
              Смартфоны
            </Link>
            <Link to="" className="red">
              Смартфоны
            </Link>
            <Link to="" className="red">
              Смартфоны
            </Link>
          </div>
          <div className="catalog-box flex flex-col gap-y-2">
            <Link to="" className="catalog-main">
              <div className="main-image">
                <img
                  src="https://picsum.photos/96/96"
                  alt=""
                />
              </div>
              <div className="main-name">ноутбуки и принтеры</div>
            </Link>
            <Link to="" className="red">
              Смартфоны
            </Link>
            <Link to="" className="red">
              Смартфоны
            </Link>
            <Link to="" className="red">
              Смартфоны
            </Link>
          </div>
          <div className="catalog-box flex flex-col gap-y-2">
            <Link to="" className="catalog-main">
              <div className="main-image">
                <img
                  src="https://picsum.photos/96/96"
                  alt=""
                />
              </div>
              <div className="main-name">ноутбуки и принтеры</div>
            </Link>
            <Link to="" className="red">
              Смартфоны
            </Link>
            <Link to="" className="red">
              Смартфоны
            </Link>
            <Link to="" className="red">
              Смартфоны
            </Link>
          </div>
          <div className="catalog-box flex flex-col gap-y-2">
            <Link to="" className="catalog-main">
              <div className="main-image">
                <img
                  src="https://picsum.photos/96/96"
                  alt=""
                />
              </div>
              <div className="main-name">ноутбуки и принтеры</div>
            </Link>
            <Link to="" className="red">
              Смартфоны
            </Link>
            <Link to="" className="red">
              Смартфоны
            </Link>
            <Link to="" className="red">
              Смартфоны
            </Link>
          </div>
          <div className="catalog-box flex flex-col gap-y-2">
            <Link to="" className="catalog-main">
              <div className="main-image">
                <img
                  src="https://picsum.photos/96/96"
                  alt=""
                />
              </div>
              <div className="main-name">ноутбуки и принтеры</div>
            </Link>
            <Link to="" className="red">
              Смартфоны
            </Link>
            <Link to="" className="red">
              Смартфоны
            </Link>
            <Link to="" className="red">
              Смартфоны
            </Link>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default NavbarCatalog;
