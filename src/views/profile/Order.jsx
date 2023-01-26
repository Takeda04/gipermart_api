import { Container } from "@mui/system";
import React from "react";
import { CgFileDocument } from "react-icons/cg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SecondNavbar from "../../layout/navbar/SecondNavbar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const Order = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathName = location.pathname;
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <SecondNavbar />
      <Container maxWidth="xl">
        <div className="pages">
          <Link to="/">Магазин /</Link>
          <Link to="/profile">Личный кабинет /</Link>
          <div>Заказы</div>
        </div>
        <div className="grid xl:grid-cols-12 lg:grid-cols-4 gap-12">
          <div className="xl:col-span-4 lg:col-span-2">
            <div className="user-sidebar">
              <div
                onClick={() => navigate("/profile")}
                className={`item ${pathName === "/profile" && "active"}`}
              >
                <CgFileDocument color="#2E3A59" size={24} />
                Персональные данные
              </div>
              <div
                onClick={() => navigate("/profile/order")}
                className={`item ${pathName === "/profile/order" && "active"}`}
              >
                <CgFileDocument color="#2E3A59" size={24} />
                Мои заказы
              </div>
              <div
                onClick={() => navigate("/profile/adresses")}
                className={`item ${
                  pathName === "/profile/adresses" && "active"
                }`}
              >
                <CgFileDocument color="#2E3A59" size={24} />
                Адреса
              </div>
              <div onClick={() => navigate("/favorites")} className="item">
                <CgFileDocument color="#2E3A59" size={24} />
                Избранные товары
              </div>
            </div>
          </div>
          <div className="xl:col-span-8 lg:col-span-4 order-section">
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
              className="!mb-6"
              aria-label="secondary tabs example"
            >
              <Tab value="1" label="ЗАКАЗЫ" />
              <Tab value="2" label="СПЕЦЗАКАЗ" />
              <Tab value="3" label="РАССРОЧКИ" />
            </Tabs>
            {value === "1" && (
              <>
                <div className="order-block">
                  <div style={{ font: "-webkit-mini-control" }}>
                    Адрес из карты: 41.43254634546 63.2435344
                  </div>
                  <div className="order-cart border-b md:flex gap-x-4 bg-gray md:p-6 p-2">
                    <div>
                      <img
                        src="https://picsum.photos/120/120"
                        alt=""
                      />
                    </div>
                    <div style={{ width: "-webkit-fill-available" }}>
                      <div className="grid lg:grid-cols-2 gap-2 mb-2">
                        <div>
                          <div className="order-name mb-2 f-medium">
                            Acer Aspire 3 Intel Pentium N4500/4GB/1TB HDD/Intel
                            Cor i 10
                          </div>
                          <div className="flex gap-x-6">
                            <div>
                              <strong>ID заказа:</strong>
                              <span
                                style={{ color: "#828282", marginLeft: "4px" }}
                              >
                                №8
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="md:text-end text-lg">
                          <strong>
                            Статус оплаты:{" "}
                            <span className="status-payment">Не оплачено</span>
                          </strong>
                        </div>
                      </div>
                      <div className="grid media-grid grid-cols-2 gap-2">
                        <div className="flex flex-col gap-y-2">
                          <div>
                            <strong>Количество:</strong>
                            <span
                              style={{ color: "#828282", marginLeft: "4px" }}
                            >
                              5
                            </span>
                          </div>
                          <div>
                            <strong>Имя покупателя:</strong>
                            <span
                              style={{ color: "#828282", marginLeft: "4px" }}
                            >
                              Ilhom Nasriddinov
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col gap-y-2 media-pt">
                          <div>
                            <strong>Цвет:</strong>
                            <span style={{ color: "#828282" }}>Чёрный</span>
                          </div>
                          <div>
                            <strong>Номер телефона:</strong>
                            <span
                              style={{ color: "#828282", marginLeft: "4px" }}
                            >
                              +998900511676
                            </span>
                          </div>
                          <div>
                            <strong>Вид оплаты:</strong>
                            <span
                              style={{ color: "#828282", marginLeft: "4px" }}
                            >
                              Наличный
                            </span>
                          </div>
                        </div>
                        <div className="md:col-span-2 media-pt">
                          <strong>Адрес покупателя:</strong>
                          <span style={{ color: "#828282", marginLeft: "4px" }}>
                            Diydor 10
                          </span>
                        </div>
                        <div className="md:col-span-2 media-pt">
                          <strong>Число:</strong>
                          <span style={{ color: "#828282", marginLeft: "4px" }}>
                            2020-05-05 19:38
                          </span>
                        </div>
                      </div>
                      <div className="text-end text-lg mt-6">
                        <strong>
                          Стоимость:{" "}
                          <span className="order-price">500 000</span>
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-block">
                  <div style={{ font: "-webkit-mini-control" }}>
                    Адрес из карты: 41.43254634546 63.2435344
                  </div>
                  <div className="order-cart border-b md:flex gap-x-4 bg-gray md:p-6 p-2">
                    <div>
                      <img
                        src="https://picsum.photos/120/120"
                        alt=""
                      />
                    </div>
                    <div style={{ width: "-webkit-fill-available" }}>
                      <div className="grid lg:grid-cols-2 gap-2 mb-2">
                        <div>
                          <div className="order-name mb-2 f-medium">
                            Acer Aspire 3 Intel Pentium N4500/4GB/1TB HDD/Intel
                            Cor i 10
                          </div>
                          <div className="flex gap-x-6">
                            <div>
                              <strong>ID заказа:</strong>
                              <span
                                style={{ color: "#828282", marginLeft: "4px" }}
                              >
                                №8
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="md:text-end text-lg">
                          <strong>
                            Статус оплаты:{" "}
                            <span className="status-payment">Не оплачено</span>
                          </strong>
                        </div>
                      </div>
                      <div className="grid media-grid grid-cols-2 gap-2">
                        <div className="flex flex-col gap-y-2">
                          <div>
                            <strong>Количество:</strong>
                            <span
                              style={{ color: "#828282", marginLeft: "4px" }}
                            >
                              5
                            </span>
                          </div>
                          <div>
                            <strong>Имя покупателя:</strong>
                            <span
                              style={{ color: "#828282", marginLeft: "4px" }}
                            >
                              Ilhom Nasriddinov
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col gap-y-2 media-pt">
                          <div>
                            <strong>Цвет:</strong>
                            <span style={{ color: "#828282" }}>Чёрный</span>
                          </div>
                          <div>
                            <strong>Номер телефона:</strong>
                            <span
                              style={{ color: "#828282", marginLeft: "4px" }}
                            >
                              +998900511676
                            </span>
                          </div>
                          <div>
                            <strong>Вид оплаты:</strong>
                            <span
                              style={{ color: "#828282", marginLeft: "4px" }}
                            >
                              Наличный
                            </span>
                          </div>
                        </div>
                        <div className="md:col-span-2 media-pt">
                          <strong>Адрес покупателя:</strong>
                          <span style={{ color: "#828282", marginLeft: "4px" }}>
                            Diydor 10
                          </span>
                        </div>
                        <div className="md:col-span-2 media-pt">
                          <strong>Число:</strong>
                          <span style={{ color: "#828282", marginLeft: "4px" }}>
                            2020-05-05 19:38
                          </span>
                        </div>
                      </div>
                      <div className="text-end text-lg mt-6">
                        <strong>
                          Стоимость:{" "}
                          <span className="order-price">500 000</span>
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            {value === "2" && (
              <>
                <div className="order-block">
                  <div style={{ font: "-webkit-mini-control" }}>
                    Адрес из карты: 41.43254634546 63.2435344
                  </div>
                  <div className="order-cart border-b md:flex gap-x-4 bg-gray md:p-6 p-2">
                    <div>
                      <img
                        src="https://picsum.photos/120/120"
                        alt=""
                      />
                    </div>
                    <div style={{ width: "-webkit-fill-available" }}>
                      <div className="grid lg:grid-cols-2 gap-2 mb-2">
                        <div>
                          <div className="order-name mb-2 f-medium">
                            Acer Aspire 3 Intel Pentium N4500/4GB/1TB HDD/Intel
                            Cor i 10
                          </div>
                          <div className="flex gap-x-6">
                            <div>
                              <strong>ID заказа:</strong>
                              <span
                                style={{ color: "#828282", marginLeft: "4px" }}
                              >
                                №8
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="md:text-end text-lg">
                          <strong>
                            Статус оплаты:{" "}
                            <span className="status-payment">Не оплачено</span>
                          </strong>
                        </div>
                      </div>
                      <div className="grid media-grid grid-cols-2 gap-2">
                        <div className="flex flex-col gap-y-2">
                          <div>
                            <strong>Количество:</strong>
                            <span
                              style={{ color: "#828282", marginLeft: "4px" }}
                            >
                              5
                            </span>
                          </div>
                          <div>
                            <strong>Имя покупателя:</strong>
                            <span
                              style={{ color: "#828282", marginLeft: "4px" }}
                            >
                              Ilhom Nasriddinov
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col gap-y-2 media-pt">
                          <div>
                            <strong>Цвет:</strong>
                            <span style={{ color: "#828282" }}>Чёрный</span>
                          </div>
                          <div>
                            <strong>Номер телефона:</strong>
                            <span
                              style={{ color: "#828282", marginLeft: "4px" }}
                            >
                              +998900511676
                            </span>
                          </div>
                          <div>
                            <strong>Вид оплаты:</strong>
                            <span
                              style={{ color: "#828282", marginLeft: "4px" }}
                            >
                              Наличный
                            </span>
                          </div>
                        </div>
                        <div className="md:col-span-2 media-pt">
                          <strong>Адрес покупателя:</strong>
                          <span style={{ color: "#828282", marginLeft: "4px" }}>
                            Diydor 10
                          </span>
                        </div>
                        <div className="md:col-span-2 media-pt">
                          <strong>Число:</strong>
                          <span style={{ color: "#828282", marginLeft: "4px" }}>
                            2020-05-05 19:38
                          </span>
                        </div>
                      </div>
                      <div className="text-end text-lg mt-6">
                        <strong>
                          Стоимость:{" "}
                          <span className="order-price">500 000</span>
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-block">
                  <div style={{ font: "-webkit-mini-control" }}>
                    Адрес из карты: 41.43254634546 63.2435344
                  </div>
                  <div className="order-cart border-b md:flex gap-x-4 bg-gray md:p-6 p-2">
                    <div>
                      <img
                        src="https://picsum.photos/120/120"
                        alt=""
                      />
                    </div>
                    <div style={{ width: "-webkit-fill-available" }}>
                      <div className="grid lg:grid-cols-2 gap-2 mb-2">
                        <div>
                          <div className="order-name mb-2 f-medium">
                            Acer Aspire 3 Intel Pentium N4500/4GB/1TB HDD/Intel
                            Cor i 10
                          </div>
                          <div className="flex gap-x-6">
                            <div>
                              <strong>ID заказа:</strong>
                              <span
                                style={{ color: "#828282", marginLeft: "4px" }}
                              >
                                №8
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="md:text-end text-lg">
                          <strong>
                            Статус оплаты:{" "}
                            <span className="status-payment">Не оплачено</span>
                          </strong>
                        </div>
                      </div>
                      <div className="grid media-grid grid-cols-2 gap-2">
                        <div className="flex flex-col gap-y-2">
                          <div>
                            <strong>Количество:</strong>
                            <span
                              style={{ color: "#828282", marginLeft: "4px" }}
                            >
                              5
                            </span>
                          </div>
                          <div>
                            <strong>Имя покупателя:</strong>
                            <span
                              style={{ color: "#828282", marginLeft: "4px" }}
                            >
                              Ilhom Nasriddinov
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col gap-y-2 media-pt">
                          <div>
                            <strong>Цвет:</strong>
                            <span style={{ color: "#828282" }}>Чёрный</span>
                          </div>
                          <div>
                            <strong>Номер телефона:</strong>
                            <span
                              style={{ color: "#828282", marginLeft: "4px" }}
                            >
                              +998900511676
                            </span>
                          </div>
                          <div>
                            <strong>Вид оплаты:</strong>
                            <span
                              style={{ color: "#828282", marginLeft: "4px" }}
                            >
                              Наличный
                            </span>
                          </div>
                        </div>
                        <div className="md:col-span-2 media-pt">
                          <strong>Адрес покупателя:</strong>
                          <span style={{ color: "#828282", marginLeft: "4px" }}>
                            Diydor 10
                          </span>
                        </div>
                        <div className="md:col-span-2 media-pt">
                          <strong>Число:</strong>
                          <span style={{ color: "#828282", marginLeft: "4px" }}>
                            2020-05-05 19:38
                          </span>
                        </div>
                      </div>
                      <div className="text-end text-lg mt-6">
                        <strong>
                          Стоимость:{" "}
                          <span className="order-price">500 000</span>
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            {value === "3" && (
              <>
                <div className="order-block">
                  <div style={{ font: "-webkit-mini-control" }}>
                    Адрес из карты: 41.43254634546 63.2435344
                  </div>
                  <div className="order-cart border-b md:flex gap-x-4 bg-gray md:p-6 p-2">
                    <div>
                      <img
                        src="https://picsum.photos/120/120"
                        alt=""
                      />
                    </div>
                    <div style={{ width: "-webkit-fill-available" }}>
                      <div className="grid lg:grid-cols-2 gap-2 mb-2">
                        <div>
                          <div className="order-name mb-2 f-medium">
                            Acer Aspire 3 Intel Pentium N4500/4GB/1TB HDD/Intel
                            Cor i 10
                          </div>
                          <div className="flex gap-x-6">
                            <div>
                              <strong>ID заказа:</strong>
                              <span
                                style={{ color: "#828282", marginLeft: "4px" }}
                              >
                                №8
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="md:text-end text-lg">
                          <strong>
                            Статус оплаты:{" "}
                            <span className="status-payment">Не оплачено</span>
                          </strong>
                        </div>
                      </div>
                      <div className="grid media-grid grid-cols-2 gap-2">
                        <div className="flex flex-col gap-y-2">
                          <div>
                            <strong>Количество:</strong>
                            <span
                              style={{ color: "#828282", marginLeft: "4px" }}
                            >
                              5
                            </span>
                          </div>
                          <div>
                            <strong>Имя покупателя:</strong>
                            <span
                              style={{ color: "#828282", marginLeft: "4px" }}
                            >
                              Ilhom Nasriddinov
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col gap-y-2 media-pt">
                          <div>
                            <strong>Цвет:</strong>
                            <span style={{ color: "#828282" }}>Чёрный</span>
                          </div>
                          <div>
                            <strong>Номер телефона:</strong>
                            <span
                              style={{ color: "#828282", marginLeft: "4px" }}
                            >
                              +998900511676
                            </span>
                          </div>
                          <div>
                            <strong>Вид оплаты:</strong>
                            <span
                              style={{ color: "#828282", marginLeft: "4px" }}
                            >
                              Наличный
                            </span>
                          </div>
                        </div>
                        <div className="md:col-span-2 media-pt">
                          <strong>Адрес покупателя:</strong>
                          <span style={{ color: "#828282", marginLeft: "4px" }}>
                            Diydor 10
                          </span>
                        </div>
                        <div className="md:col-span-2 media-pt">
                          <strong>Число:</strong>
                          <span style={{ color: "#828282", marginLeft: "4px" }}>
                            2020-05-05 19:38
                          </span>
                        </div>
                      </div>
                      <div className="text-end text-lg mt-6">
                        <strong>
                          Стоимость:{" "}
                          <span className="order-price">500 000</span>
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-block">
                  <div style={{ font: "-webkit-mini-control" }}>
                    Адрес из карты: 41.43254634546 63.2435344
                  </div>
                  <div className="order-cart border-b md:flex gap-x-4 bg-gray md:p-6 p-2">
                    <div>
                      <img
                        src="https://picsum.photos/120/120"
                        alt=""
                      />
                    </div>
                    <div style={{ width: "-webkit-fill-available" }}>
                      <div className="grid lg:grid-cols-2 gap-2 mb-2">
                        <div>
                          <div className="order-name mb-2 f-medium">
                            Acer Aspire 3 Intel Pentium N4500/4GB/1TB HDD/Intel
                            Cor i 10
                          </div>
                          <div className="flex gap-x-6">
                            <div>
                              <strong>ID заказа:</strong>
                              <span
                                style={{ color: "#828282", marginLeft: "4px" }}
                              >
                                №8
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="md:text-end text-lg">
                          <strong>
                            Статус оплаты:{" "}
                            <span className="status-payment">Не оплачено</span>
                          </strong>
                        </div>
                      </div>
                      <div className="grid media-grid grid-cols-2 gap-2">
                        <div className="flex flex-col gap-y-2">
                          <div>
                            <strong>Количество:</strong>
                            <span
                              style={{ color: "#828282", marginLeft: "4px" }}
                            >
                              5
                            </span>
                          </div>
                          <div>
                            <strong>Имя покупателя:</strong>
                            <span
                              style={{ color: "#828282", marginLeft: "4px" }}
                            >
                              Ilhom Nasriddinov
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col gap-y-2 media-pt">
                          <div>
                            <strong>Цвет:</strong>
                            <span style={{ color: "#828282" }}>Чёрный</span>
                          </div>
                          <div>
                            <strong>Номер телефона:</strong>
                            <span
                              style={{ color: "#828282", marginLeft: "4px" }}
                            >
                              +998900511676
                            </span>
                          </div>
                          <div>
                            <strong>Вид оплаты:</strong>
                            <span
                              style={{ color: "#828282", marginLeft: "4px" }}
                            >
                              Наличный
                            </span>
                          </div>
                        </div>
                        <div className="md:col-span-2 media-pt">
                          <strong>Адрес покупателя:</strong>
                          <span style={{ color: "#828282", marginLeft: "4px" }}>
                            Diydor 10
                          </span>
                        </div>
                        <div className="md:col-span-2 media-pt">
                          <strong>Число:</strong>
                          <span style={{ color: "#828282", marginLeft: "4px" }}>
                            2020-05-05 19:38
                          </span>
                        </div>
                      </div>
                      <div className="text-end text-lg mt-6">
                        <strong>
                          Стоимость:{" "}
                          <span className="order-price">500 000</span>
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Order;
