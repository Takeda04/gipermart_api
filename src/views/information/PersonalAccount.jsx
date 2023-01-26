import { Container } from '@mui/system';
import React from 'react'
import Title from '../../components/title/Title'
import SecondNavbar from '../../layout/navbar/SecondNavbar'

const PersonalAccount = () => {
  return (
    <>
      <SecondNavbar />
      <section className="other">
        <Container maxWidth="xl">
          <Title title="ЛИЧНЫЙ КАБИНЕТ" />
          <p>
            7.2. При регистрации на сайте Интернет-магазина Покупатель обязуется
            предоставить следующую регистрационную информацию:
          </p>
          <p>
            7.2.1. Фамилия, имя, отчество, возраст Покупателя или указанного им
            лица (получателя);
          </p>
          <p>
            7.2.2. Адрес, по которому следует доставить Товар (если доставка до
            адреса Покупателя);
          </p>
          <p>7.2.3. Адрес электронной почты;</p>
          <p>7.2.4. Контактные телефоны.</p>
          <p>
            7.3. Наименование, количество, ассортимент, артикул, цена выбранного
            Покупателем Товара указываются в корзине Покупателя на сайте
            Интернет-магазина.
          </p>
        </Container>
      </section>
    </>
  );
}

export default PersonalAccount