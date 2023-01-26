import React, { useState } from "react";
import SecondNavbar from "../../layout/navbar/SecondNavbar";
import "../../assets/scss/_basket.scss";
import { Container } from "@mui/system";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Button, Dialog, IconButton } from "@mui/material";
import { BiPencil, BiTrash } from "react-icons/bi";
import Title from "../../components/title/Title";

const Checkout = () => {
  const [selectedValue, setSelectedValue] = React.useState("a");
  const [disabledButton, setDisabledButton] = useState(false);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const [openModal2, setOpenModal2] = useState(false);
  const handleCloseModal2 = () => {
    setOpenModal2(false);
  };
  const handleClickOpenModal2 = () => {
    setOpenModal2(true);
  };

  return (
    <>
      <SecondNavbar />
      <div>
        <Dialog
          open={openModal2}
          onClose={handleCloseModal2}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <div className="!p-8">
            <Title title="Изменить адрес" style="f-medium mb-4" />
            <div>Имя</div>
            <TextField defaultValue="Ilhom" className="!w-full !my-4" />
            <div>Номер телефона</div>
            <TextField defaultValue="+998900511676" className="!w-full !my-4" />
            <div>Адрес</div>
            <TextField defaultValue="Diydor 10" className="!w-full !my-4" />
            <div>Город</div>
            <TextField defaultValue="UZ" className="!w-full !my-4" />
            <Button
              className="yellow-btn-hover !w-full !rounded-none !py-3 !text-base"
              onClick={handleCloseModal2}
              autoFocus
            >
              Обновлять
            </Button>
          </div>
        </Dialog>
      </div>
      <Container maxWidth="xl">
        <div className="checkout-section grid lg:grid-cols-2 grid-cols-1 mt-6">
          <div className="left lg:pr-4 lg:border-r border-black">
            <div className="md:text-4xl text-2xl f-bold my-6">Оформление заказа</div>
            <div className="border-4 border p-5 mb-4">
              <div className="flex items-center justify-end">
                <IconButton onClick={handleClickOpenModal2}>
                  <BiPencil color="#999" size={20} />
                </IconButton>
                <IconButton>
                  <BiTrash color="#999" size={20} />
                </IconButton>
              </div>
              <div className="flex items-baseline gap-4 mb-2 leading-none">
                <div className="f-bold text-xl">Имя</div>
                <div>ILKHOM</div>
              </div>
              <div className="flex items-baseline gap-4 mb-2 leading-none">
                <div className="f-bold text-xl">Tелефон</div>
                <div>+998994064667</div>
              </div>
              <div className="flex items-baseline gap-4 mb-2 leading-none">
                <div className="f-bold text-xl">Адрес</div>
                <div>Chilonzor 20kv Diydor 10</div>
              </div>
            </div>
            <div className="text-2xl f-medium mt-2">Контактные данные</div>
            <div className="mt-4">Контактное лицо (ФИО)</div>
            <TextField
              className="!rounded-none w-full !my-4"
              id="outlined-required"
            />
            <div className="mt-4">Контактный телефон</div>
            <TextField
              className="!rounded-none w-full !my-4"
              id="outlined-required"
              defaultValue="+998 __ ___ __ __"
            />
            <div className="text-2xl f-medium">Доставка</div>
            <div className="mt-4">Адрес</div>
            <div className="mt-4 mb-1">Регион/область*</div>
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <div className="mt-4 mb-1">Город/район*</div>
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <div className="mt-4 mb-1">Адрес*</div>
            <TextField
              className="!rounded-none w-full"
              id="outlined-required"
            />
            <div className="mt-4 mb-1">Комментарии к заказу</div>
            <TextField
              id="outlined-multiline-flexible"
              className="w-full"
              multiline
              minRows={4}
              maxRows={4}
            />
            <div className="grid md:grid-cols-2 gap-4 my-4">
              <label className="payment-box">
                <Radio
                  color="warning"
                  checked={selectedValue === "a"}
                  onChange={handleChange}
                  value="a"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                />
                <div className="p-6">
                  <div className="text-xl leading-none">Наличными курьеру</div>
                  <div className="text-sm" style={{ color: "#999" }}>
                    Наличными курьеру
                  </div>
                </div>
              </label>
              <label className="payment-box">
                <Radio
                  color="warning"
                  checked={selectedValue === "b"}
                  onChange={handleChange}
                  value="b"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "B" }}
                />
                <img
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "contain",
                  }}
                  src="https://logobank.uz:8005/media/logos_png/payme-01.png"
                  alt=""
                />
              </label>
            </div>
            <FormControlLabel
              control={
                <Checkbox
                  onChange={(e) => setDisabledButton(e.target.checked)}
                />
              }
              label="Подтвердить"
            />
            <Button
              disabled={!disabledButton}
              className={`yellow-btn-hover !rounded-none !py-3 !text-base !my-4 !w-full`}
            >
              Подтвердить заказ
            </Button>
          </div>
          <div className="right lg:pl-4 mb-8">
            <div className="checkout-cart p-1">
              <div className="checkout-image">
                <img
                  src="https://picsum.photos/80/50"
                  alt=""
                />
              </div>
              <div className="checkout-name">
                Acer Aspire 3 Intel Pentium N4500/4GB/1TB HDD/Intel UHD 15.6"
                (A315-34-C7AH) Pure Silver
              </div>
              <div className="checkout-price gap-x-2">
                4 x <span className="f-bold price">3 113 600 Сум</span>
              </div>
            </div>
            <div className="checkout-cart p-1">
              <div className="checkout-image">
                <img
                  src="https://picsum.photos/80/50"
                  alt=""
                />
              </div>
              <div className="checkout-name">
                Acer Aspire 3 Intel Pentium N4500/4GB/1TB HDD/Intel UHD 15.6"
                (A315-34-C7AH) Pure Silver
              </div>
              <div className="checkout-price gap-x-2">
                4 x <span className="f-bold price">3 113 600 Сум</span>
              </div>
            </div>
            <div className="checkout-cart p-1">
              <div className="checkout-image">
                <img
                  src="https://picsum.photos/80/50"
                  alt=""
                />
              </div>
              <div className="checkout-name">
                Acer Aspire 3 Intel Pentium N4500/4GB/1TB HDD/Intel UHD 15.6"
                (A315-34-C7AH) Pure Silver
              </div>
              <div className="checkout-price gap-x-2">
                4 x <span className="f-bold price">3 113 600 Сум</span>
              </div>
            </div>
            <div className="border-t border-b py-6 my-6">
              <div className="flex items-center justify-between">
                <div>Сумма по товарам</div>
                <div className="text-xl f-bold">16 150 400 Сум</div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div>Стоимость доставки</div>
                <div className="text-xl f-bold">0</div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="text-xl">Итого:</div>
              <div className="text-xl f-bold">16 150 400 Сум</div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
