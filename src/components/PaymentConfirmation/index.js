import React, { useContext } from 'react';
import { Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import PaymentForm from './PaymentForm';
import ChosenTicketType from './ChosenTicketType';

import TicketTypesContext from '../../contexts/TicketTypesContext';

export default function PaymentConfirmation() {
  const { ticketTypes } = useContext(TicketTypesContext);

  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      <SubTitle variant="h6">Ingresso escolhido</SubTitle>

      <ChosenTicketType data={ticketTypes}></ChosenTicketType>

      <SubTitle variant="h6">Pagamento</SubTitle>

      <PaymentFormContainer>
        <PaymentForm ticketTypes={ticketTypes}></PaymentForm>
      </PaymentFormContainer>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;

const SubTitle = styled(Typography)`
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
