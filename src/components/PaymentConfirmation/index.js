import React, { useContext } from 'react';
import { Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import PaymentForm from './PaymentForm';
import ChosenTicketType from './ChosenTicketType';
import { SuccessfullyPaid } from './SuccessfullyPaid';
import useTicketPaid from '../../hooks/api/useTicketPaid';

export default function PaymentConfirmation() {
  const { ticketTypes } = useContext(TicketTypesContext);
  const { ticketContextData } = useContext(TicketContext);
  const [ticketStatus, setTicketStatus] = useState(ticketData?.status);
  const { ticketData } = useTicketPaid();
  const [showPaymentForm, setShowPaymentForm] = useState(true);

  useEffect(() => {
    if (ticketContextData?.status == 'PAID') {
      setShowPaymentForm(false);
    }
  });


  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      <SubTitle variant="h6">Ingresso escolhido</SubTitle>

      <ChosenTicketType data={ticketContextData}></ChosenTicketType>

      <SubTitle variant="h6">Pagamento</SubTitle>

      {showPaymentForm === false ? (
        <SuccessfullyPaid />
      ) : (
        <>
          <PaymentFormContainer>
            <PaymentForm ticketData={ticketContextData} setShowPaymentForm={setShowPaymentForm}></PaymentForm>
          </PaymentFormContainer>
        </>
      )}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;

export const SubTitle = styled(Typography)`
  margin-bottom: 20px !important;
  color: #8e8e8e;
`;

const PaymentFormContainer = styled.div`
  #PaymentForm {
    margin-left: 0px;
    display: flex;
    justify-content: flex-start;
    > form {
      width: 100%;
      margin-left: 20px;

      .expiryDate {
        width: 70%;
      }
      .CVC {
        width: 30%;
      }
    }
  }
`;
