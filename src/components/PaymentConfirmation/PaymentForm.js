import React, { useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import Button from '../Form/Button';
import { PaymentInputWrapper } from './PaymentInputWrapper';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import useSavePayment from '../../hooks/api/useSavePayment';

export default function PaymentForm({ ticketTypes }) {
  const { savePayment } = useSavePayment();
  const ticketId = ticketTypes[0]?.id;
  const [issuer, setIssuer] = useState('');
  const [maxLength, setMaxLength] = useState();
  const [cardData, setCardData] = useState({
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  });

  function handleInputFocus(event) {
    setCardData({
      ...cardData,
      focus: event.target.name,
    });
  }

  function handleInputChange(event) {
    setCardData({
      ...cardData,
      [event.target.name]: event.target.value,
    });
  }

  async function handlePaymentSubmit(event) {
    event.preventDefault();
    const newCardData = {
      ...cardData,
      issuer,
      number: Number(cardData.number),
      cvc: Number(cardData.cvc),
    };
    delete newCardData.focus;
    const paymentBody = {
      ticketId,
      cardData: { ...newCardData },
    };
    try {
      const result = await savePayment(paymentBody);
      console.log(result);
      toast('Ticket pago com sucesso!');
    } catch (error) {
      toast('Não foi possível pagar seu ticket!');
    }
  }

  return (
    <div id="PaymentForm">
      <Cards
        cvc={cardData.cvc}
        expiry={cardData.expiry}
        focused={cardData.focus}
        name={cardData.name}
        number={cardData.number}
        callback={({ issuer, maxLength }) => {
          setIssuer(issuer);
          setMaxLength(maxLength);
        }}
      />
      <form onSubmit={handlePaymentSubmit}>
        <PaymentInputWrapper>
          <input
            required
            type="tel"
            name="number"
            placeholder="Número do cartão"
            pattern="[\d| ]{16,22}"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </PaymentInputWrapper>

        <PaymentInputWrapper>
          <input
            required
            type="text"
            name="name"
            placeholder="Nome"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </PaymentInputWrapper>

        <PaymentInputWrapper>
          <input
            required
            className="expiryDate"
            type="tel"
            name="expiry"
            placeholder="Válido até"
            pattern="\d\d/\d\d"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />

          <input
            required
            className="CVC"
            type="tel"
            name="cvc"
            placeholder="CVC"
            pattern="\d{3,4}"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </PaymentInputWrapper>

        <SubmitContainer>
          <Button type="submit">Finalizar Pagamento</Button>
        </SubmitContainer>
      </form>
    </div>
  );
}

const SubmitContainer = styled.div`
  margin-top: 40px !important;
  width: 100% !important;

  > button {
    margin-top: 0 !important;
  }
`;
