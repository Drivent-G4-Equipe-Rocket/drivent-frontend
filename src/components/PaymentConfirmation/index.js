import React, { useContext } from 'react';
import { Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../Form/Button';
import PaymentForm from './PaymentForm';
import useTicketReservation from '../../hooks/api/useTicket';
import ChosenTicketType from './ChosenTicketType';
import { useForm } from '../../hooks/useForm';
import paymentValidations from './PaymentFormValidations';
import { toast } from 'react-toastify';
import TicketTypesContext from '../../contexts/TicketTypesContext';

export default function PaymentConfirmation() {
  const { ticketTypes } = useContext(TicketTypesContext);
  console.log(ticketTypes);

  //constante abaixo vou usar para enviar dados do cartão
  const { handleSubmit, handleChange, data, errors, setData, customHandleChange } = useForm({
    validations: paymentValidations,
    onSubmit: async(data) => {
      const newData = {
        issuer: data.issuer,
        number: data.number,
        name: data.name,
        expirationDate: data.expiry,
        cvv: data.cvv,
      };
      try {
        // await payTicket(newData);
        toast('Ticket pago com sucesso!');
      } catch (error) {
        toast('Não foi possível pagar seu ticket!');
      }
    },
  });

  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      <SubTitle variant="h6">Ingresso escolhido</SubTitle>

      <ChosenTicketType data={ticketTypes}></ChosenTicketType>

      <SubTitle variant="h6">Pagamento</SubTitle>

      <PaymentFormContainer>
        <PaymentForm onSubmit={handleSubmit}></PaymentForm>
      </PaymentFormContainer>
      <SubmitContainer>
        <Button type="submit">Finalizar Pagamento</Button>
      </SubmitContainer>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;

const SubTitle = styled(Typography)`
  color: #8e8e8e;
`;

const SubmitContainer = styled.div`
  margin-top: 40px !important;
  width: 100% !important;

  > button {
    margin-top: 0 !important;
  }
`;

const PaymentFormContainer = styled.div`
  width: 100%;
  #PaymentForm {
    margin-left: 0px;
    display: flex;
    justify-content: flex-start;
    > form {
      margin-left: 20px;

      > input {
        margin: 5px;
        border-radius: 5px;
        border: solid #8e8e8e 1px;
        height: 20%;
        width: 55%;
      }
      > input::placeholder {
        text-align: start;
        font-size: 16px;
        padding: 3px 0px 3px 10px;
      }
      .expiryDate {
        width: 30%;
      }
      .CVC {
        width: 15%;
      }
    }
  }
`;
