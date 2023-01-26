import React from "react";
import SecondNavbar from "../../layout/navbar/SecondNavbar";
import Title from "../../components/title/Title";
import Cart from "../../components/cart/Cart";
import { Container } from "@mui/system";
import "../../assets/scss/_search.scss";

const SearchPage = () => {
  return (
    <>
      <SecondNavbar />
      <Container maxWidth="xl">
        <Title
          title='Результаты поиска по запросу "samsung"'
          style="f-medium mt-8 mb-4"
        />
        <div className="search-page mb-12">
          <Cart />
        </div>
      </Container>
    </>
  );
};

export default SearchPage;
