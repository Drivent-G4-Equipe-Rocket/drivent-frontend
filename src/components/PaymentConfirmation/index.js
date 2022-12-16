import { Typography } from '@material-ui/core';
import { useState } from 'react';
import styled from 'styled-components';
import Button from '../Form/Button';
import PaymentForm from './PaymentForm';

export default function PaymentConfirmation() {
  const [ticketType, setTicketType] = useState({
    isOnline: false,
    hasHotel: true,
  });

  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      <SubTitle variant="h6">Ingresso escolhido</SubTitle>
      <TicketChosenContainer ticketType={ticketType}>
        {ticketType.isOnline ? 'Online' : 'Presencial'} +{ticketType.hasHotel ? ' Com Hotel' : ' Sem Hotel'}
      </TicketChosenContainer>
      <SubTitle variant="h6">Pagamento</SubTitle>

      <PaymentFormContainer>
        <PaymentForm></PaymentForm>
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

const TicketChosenContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33%;
  height: 15%;
  border-radius: 20px;
  background-color: #ffeed2;
  margin-bottom: 20px;
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
