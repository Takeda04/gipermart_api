import { Container } from "@mui/system";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../assets/scss/_detail.scss";
import SecondNavbar from "../../layout/navbar/SecondNavbar";
import Rating from "@mui/material/Rating";
import { Button, Tab, Tabs } from "@mui/material";
import { BiHeart } from "react-icons/bi";
import ImageGallery from "./ImageGallery";
import Counter from "../../components/counter/Counter";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";
import SimilarCarts from "../../components/similarCarts/SimilarCarts";

const Detail = () => {
  const navigate = useNavigate();
  const [counter, setCounter] = useState(1);
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const minusCounter = () => {
    if (counter > 1) {
      setCounter((count) => count - 1);
    } else {
    }
  };

  const plusCounter = () => {
    setCounter((count) => count + 1);
  };

  const [rassrochkaTab, setRassrochkaTab] = useState("");
  const rassrochkaArray = [
    {
      id: 1,
      name: "6 месяц",
    },
    {
      id: 2,
      name: "9 месяц",
    },
    {
      id: 3,
      name: "12 месяц",
    },
  ];

  return (
    <section className="detail">
      <SecondNavbar />
      <Container maxWidth="xl">
        <div className="pages detail-page !pt-8">
          <Link to="/">Магазин /</Link>
          <Link to="/">Аксессуары /</Link>
          <div>
            Acer Aspire 3 Intel Pentium N5030/4GB/500GB HDD/Intel UHD 15.6"
            (A315-34-P59K) Charcoal Black
          </div>
        </div>
        <div className="laptop-detail-name text-2xl f-medium mb-4">
          Acer Aspire 3 Intel Pentium N5030/4GB/500GB HDD/Intel UHD 15.6"
          (A315-34-P59K) Charcoal Black
        </div>
        <div className="flex items-center gap-4 border-b-2">
          <Rating
            name="half-rating"
            defaultValue={2.5}
            precision={0.5}
            size="small"
          />
          <div
            className="detail-comment-length"
            style={{ color: "rgb(181, 238, 111)" }}
          >
            (0)
          </div>
          <Button
            className="!capitalize"
            size="large"
            color="error"
            startIcon={<BiHeart size={20} />}
          >
            Не нравится
          </Button>
        </div>
        <div className="grid lg:grid-cols-12 grid-cols-6 justify-between detail-box mt-8">
          <div className="xl:col-span-4 lg:col-span-6 col-span-6">
            <ImageGallery />
          </div>
          <div className="xl:col-span-5 lg:col-span-6 col-span-6 character-box xl:pl-8 lg:pl-14 mb-6 lg:mt-0 mt-8">
            <div className="mobile-detail-name text-2xl f-medium mb-4">
              Acer Aspire 3 Intel Pentium N5030/4GB/500GB HDD/Intel UHD 15.6"
              (A315-34-P59K) Charcoal Black
            </div>
            <div className="text-lg f-medium">Характеристики</div>
            <div className="mt-4 flex items-center gap-x-4 gap-y-2">
              <div className="gray">Бренд:</div>
              <div>Acer</div>
            </div>
            <div className="mt-4 flex items-center gap-x-4 gap-y-2">
              <div className="gray">Процессор:</div>
              <div>Celeron N5030</div>
            </div>
            <div className="mt-4 flex items-center gap-x-4 gap-y-2">
              <div className="gray">Оперативная память:</div>
              <div>4 GB</div>
            </div>
            <div className="mt-4 flex items-center gap-x-4 gap-y-2">
              <div className="gray">Накопитель:</div>
              <div>HDD 500 GB</div>
            </div>
            <div className="mt-4 flex items-center gap-x-4 gap-y-2">
              <div className="gray">Видеокарта:</div>
              <div>Intel UHD Graphics</div>
            </div>
          </div>
          <div className="xl:col-span-3 lg:col-span-4 col-span-6 lg:col-start-4 lg:col-end-10 xl:mt-0 lg:mt-8">
            <div className="detail-payment rounded">
              <div className="p-4 border">
                <div className="text-4xl f-bold">3 696 000 Сум</div>
                <div className="detail-counter grid grid-cols-3 my-4">
                  <Button onClick={minusCounter} className="minus">
                    <AiOutlineMinus size={24} fill="#C4C4C4" />
                  </Button>
                  <div className="count">{counter}</div>
                  <Button onClick={plusCounter} className="plus">
                    <AiOutlinePlus size={24} fill="#C4C4C4" />
                  </Button>
                </div>
                <Button
                  onClick={() => navigate("/basket")}
                  className="yellow-btn-hover !w-full !py-3 !capitalize !text-base"
                  endIcon={<HiOutlineShoppingCart size={16} />}
                >
                  Корзина
                </Button>
                <div className="text-4xl f-bold my-5">462 000 Сум</div>
                <Button
                  onClick={() => navigate("/basket")}
                  className="yellow-btn-hover !w-full !py-3 !capitalize !text-base"
                >
                  Купить В Рассрочку
                </Button>
              </div>
              <div className="grid grid-cols-3">
                {rassrochkaArray.map((item) => (
                  <Button
                    key={item.id}
                    onClick={() => setRassrochkaTab(item.id)}
                    className={`f-regular !border-t ${
                      item.id === rassrochkaTab && "active"
                    }`}
                    size="large"
                    color="warning"
                  >
                    {item.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          className="!mt-10"
          aria-label="secondary tabs example"
        >
          <Tab value="1" label="Oписание" />
          <Tab value="2" label="Характеристики" />
        </Tabs>
        {value === "1" && (
          <div className="p-6">
            <div className="f-bold mb-2" style={{ fontSize: "15px" }}>
              Мощный процессор
            </div>
            <div className="mb-2" style={{ fontSize: "15px" }}>
              Воспроизводите видео быстро и без задержек, просматривайте
              веб-страницы или выполняйте рабочие задачи благодаря процессору и
              видеокарте от Intel®. Такое сочетание и память гарантируют более
              высокую скорость загрузки приложений, качественную графику и
              эффективную работу в режиме многозадачности.
            </div>
            <div className="f-bold mb-2" style={{ fontSize: "15px" }}>
              Мощный процессор
            </div>
            <div className="mb-2" style={{ fontSize: "15px" }}>
              Воспроизводите видео быстро и без задержек, просматривайте
              веб-страницы или выполняйте рабочие задачи благодаря процессору и
              видеокарте от Intel®. Такое сочетание и память гарантируют более
              высокую скорость загрузки приложений, качественную графику и
              эффективную работу в режиме многозадачности.
            </div>
          </div>
        )}
        {value === "2" && (
          <div className="p-6">
            <div className="mb-4" style={{ fontSize: "15px" }}>
              Процессор: Intel® Pentium N5030
            </div>
            <div className="mb-4" style={{ fontSize: "15px" }}>
              Тех. процесс: 10 нм
            </div>
            <div className="mb-4" style={{ fontSize: "15px" }}>
              Количество ядер: 4
            </div>
            <div className="mb-4" style={{ fontSize: "15px" }}>
              Частота процессора: 1.10-3.30 ГГц
            </div>
          </div>
        )}
      </Container>
      <SimilarCarts />
    </section>
  );
};

export default Detail;
