import { Container } from "@mui/system";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../assets/scss/_basket.scss";
import Title from "../../components/title/Title";
import { BiTrash } from "react-icons/bi";
import Counter from "../../components/counter/Counter";
import SecondNavbar from "../../layout/navbar/SecondNavbar";
import { Button } from "@mui/material";
import BasketModal from "../../components/modal/BasketModal";

const Basket = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  const handleClickOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <SecondNavbar />
      <BasketModal closeModal={handleCloseModal} openModal={openModal} />
      <Container maxWidth="xl">
        <Title title="Корзина" style="mt-6" />
        <div className="grid lg:grid-cols-12 grid-cols-6 gap-4 mb-12">
          <div className="xl:col-span-9 lg:col-span-8 col-span-6">
            <div className="basket-cart">
              <div className="basket-image">
                <img
                  src="https://picsum.photos/168/98"
                  alt=""
                />
              </div>
              <div className="basket-text">
                <Link to="" className="basket-name">
                  Acer Aspire 3 Intel Pentium N4500/4GB/1TB HDD/Intel UHD 15.6"
                  (A315-34-C7AH) Pure Silver
                </Link>
                <div className="basket-price">3 113 600 Сум</div>
                <div className="basket-action">
                  <div className="basket-remove">
                    <BiTrash size={16} />
                    Удалить
                  </div>
                  <Counter />
                </div>
              </div>
            </div>
            <div className="basket-cart">
              <div className="basket-image">
                <img
                  src="https://picsum.photos/168/98"
                  alt=""
                />
              </div>
              <div className="basket-text">
                <Link to="" className="basket-name">
                  Acer Aspire 3 Intel Pentium N4500/4GB/1TB HDD/Intel UHD 15.6"
                  (A315-34-C7AH) Pure Silver
                </Link>
                <div className="basket-price">3 113 600 Сум</div>
                <div className="basket-action">
                  <div className="basket-remove">
                    <BiTrash size={16} />
                    Удалить
                  </div>
                  <Counter />
                </div>
              </div>
            </div>
            <div className="basket-cart">
              <div className="basket-image">
                <img
                  src="https://picsum.photos/168/98"
                  alt=""
                />
              </div>
              <div className="basket-text">
                <Link to="" className="basket-name">
                  Acer Aspire 3 Intel Pentium N4500/4GB/1TB HDD/Intel UHD 15.6"
                  (A315-34-C7AH) Pure Silver
                </Link>
                <div className="basket-price">3 113 600 Сум</div>
                <div className="basket-action">
                  <div className="basket-remove">
                    <BiTrash size={16} />
                    Удалить
                  </div>
                  <Counter />
                </div>
              </div>
            </div>
          </div>
          <div className="xl:col-span-3 lg:col-span-4 col-span-6">
            <div className="price-box">
              <div className="px-6">
                <div className="text-2xl f-bold">В корзине</div>
                <div className="mt-1">Товаров: 5</div>
                <div className="text-2xl f-bold mt-1">16 150 400 Сум</div>
              </div>
              <Button
                onClick={() => navigate("/checkout")}
                className="yellow-btn-hover !w-full !rounded-none !text-base !py-3 f-light !my-3"
              >
                Оформить заказ
              </Button>
              <div className="px-6">
                <div className="text-2xl f-bold">12 месяц</div>
                <div className="mt-1">Товаров: 5</div>
                <div className="text-2xl f-bold mt-4">2 018 800 Сум</div>
                <div className="mt-1">
                  Рассрочку можно офромить только до 15 000 000 сум
                </div>
              </div>
              <Button
                onClick={setOpenModal}
                className="yellow-btn-hover !w-full !rounded-none !text-base !py-3 f-light !mt-5"
              >
                Оформить Рассрочку
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Basket;
