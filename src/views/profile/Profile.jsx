import { Container } from "@mui/system";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SecondNavbar from "../../layout/navbar/SecondNavbar";
import "../../assets/scss/_profile.scss";
import { CgFileDocument } from "react-icons/cg";
import Title from "../../components/title/Title";
import {
  Button,
  Dialog,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Profile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathName = location.pathname;

  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);

  const handleClickOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleClickOpenModal2 = () => {
    setOpenModal2(true);
  };

  const handleCloseModal2 = () => {
    setOpenModal2(false);
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <SecondNavbar />
      <Container maxWidth="xl">
        <div className="pages">
          <Link to="/">Магазин /</Link>
          <div>Личный кабинет</div>
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
          <div className="xl:col-span-8 lg:col-span-4">
            <Title title="Персональные данные" style="f-medium" />
            <div className="grid lg:grid-cols-6 gap-x-4 lg:gap-y-0 gap-y-1 mt-8">
              <div>ID пользователя:</div>
              <div
                className="col-span-4 flex items-center justify-center h-px bg-black m-auto"
                style={{ width: "-webkit-fill-available" }}
              ></div>
              <div>VXNlcjoxMjcx</div>
            </div>
            <div className="grid lg:grid-cols-6 gap-x-4 lg:gap-y-0 gap-y-1 mt-8">
              <div>Имя и фамилия:</div>
              <div
                className="col-span-4 flex items-center justify-center h-px bg-black m-auto"
                style={{ width: "-webkit-fill-available" }}
              ></div>
              <div>Ilhom Nasriddinov</div>
            </div>
            <div className="grid lg:grid-cols-6 gap-x-4 lg:gap-y-0 gap-y-1 mt-8">
              <div>Номер телефона:</div>
              <div
                className="col-span-4 flex items-center justify-center h-px bg-black m-auto"
                style={{ width: "-webkit-fill-available" }}
              ></div>
              <div>+998900511676</div>
            </div>
            <Button
              color="error"
              size="large"
              className="!my-6"
              style={{ color: "#e44542" }}
              onClick={handleClickOpenModal}
            >
              Изменить
            </Button>
            <Title title="Пароль" style="f-medium" />
            <div className="grid lg:grid-cols-6 gap-x-4 lg:gap-y-0 gap-y-1 mt-8">
              <div>Текущий пароль:</div>
              <div
                className="col-span-4 flex items-center justify-center h-px bg-black m-auto"
                style={{ width: "-webkit-fill-available" }}
              ></div>
              <div>********</div>
            </div>
            <div className="flex items-center justify-between">
              <Button
                color="error"
                size="large"
                className="!my-6"
                style={{ color: "#e44542" }}
                onClick={handleClickOpenModal2}
              >
                Изменить
              </Button>
              <Button
                color="error"
                size="large"
                className="!my-6"
                style={{ color: "#e44542" }}
              >
                Выйти
              </Button>
            </div>
          </div>
        </div>
      </Container>
      <div>
        <Dialog
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <div className="!p-8">
            <div>Имя</div>
            <TextField defaultValue="Ilhom" className="!w-full !my-4" />
            <div>фамилия</div>
            <TextField defaultValue="Nasriddinov" className="!w-full !my-4" />
            <Button
              className="yellow-btn-hover !w-full !rounded-none !py-3 !text-base"
              onClick={handleCloseModal}
              autoFocus
            >
              Изменить
            </Button>
          </div>
        </Dialog>
      </div>
      <div>
        <Dialog
          open={openModal2}
          onClose={handleCloseModal2}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <div className="!p-8">
            <div>Последний пароль</div>
            <OutlinedInput
              className="!w-full !my-4"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <div>Пароль</div>
            <OutlinedInput
              className="!w-full !my-4"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <div>Подтвердить Пароль</div>
            <OutlinedInput
              className="!w-full !my-4"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <Button
              className="yellow-btn-hover !w-full !rounded-none !py-3 !text-base"
              onClick={handleCloseModal2}
            >
              Изменить
            </Button>
          </div>
        </Dialog>
      </div>
    </>
  );
};

export default Profile;
