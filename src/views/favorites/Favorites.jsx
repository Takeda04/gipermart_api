import { Container } from "@mui/system";
import React from "react";
import Title from "../../components/title/Title";
import SecondNavbar from "../../layout/navbar/SecondNavbar";
import Cart from "../../components/cart/Cart";
import "../../assets/scss/_favorites.scss";

const Favorites = () => {
  return (
    <>
      <SecondNavbar />
      <Container maxWidth="xl">
        <Title title="Избранные товары" style="f-bold mb-6 mt-12" />
        <div className="favorites mb-12">
          <Cart favorite={true} />
        </div>
      </Container>
    </>
  );
};

export default Favorites;
