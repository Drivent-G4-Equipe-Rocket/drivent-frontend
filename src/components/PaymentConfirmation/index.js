import React, { useContext } from 'react';
import { Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import PaymentForm from './PaymentForm';
import ChosenTicketType from './ChosenTicketType';

import TicketTypesContext from '../../contexts/TicketTypesContext';
import { SuccessfullyPaid } from './SuccessfullyPaid';
import TicketContext from '../../contexts/TicketContext';
import useTicketPaid from '../../hooks/api/useTicketPaid';

export default function PaymentConfirmation() {
  const { ticketTypes } = useContext(TicketTypesContext);
  console.log(ticketTypes);
  const { ticketData } = useContext(TicketContext);
  console.log(ticketData);
  const [ticketStatus, setTicketStatus] = useState(ticketData?.status);
  console.log(ticketStatus);

  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      <SubTitle variant="h6">Ingresso escolhido</SubTitle>

      <ChosenTicketType data={ticketData}></ChosenTicketType>

      <SubTitle variant="h6">Pagamento</SubTitle>

      {ticketData?.status === 'PAID' ? (
        <SuccessfullyPaid />
      ) : (
        <>
          <PaymentFormContainer>
            <PaymentForm
              ticketData={ticketData}
              ticketStatus={ticketStatus}
              setTicketStatus={setTicketStatus}
            ></PaymentForm>
          </PaymentFormContainer>
        </>
      )}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;

const SubTitle = styled(Typography)`
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
