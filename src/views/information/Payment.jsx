import { Container } from '@mui/system'
import React from 'react'
import Title from '../../components/title/Title'
import SecondNavbar from '../../layout/navbar/SecondNavbar'

const Payment = () => {
  return (
    <>
      <SecondNavbar />
      <section className="other">
        <Container maxWidth="xl">
          <Title title="СПОСОБЫ ОПЛАТЫ" />
          <p>
            10.1. Произвести оплату Покупатель может следующими способами: -
            оплата наличными средствами; - оплата банковской пластиковой картой
          </p>
        </Container>
      </section>
    </>
  );
}

export default Payment