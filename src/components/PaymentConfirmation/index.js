import { Typography } from '@material-ui/core';
import { useState } from 'react';
import styled from 'styled-components';

export default function PaymentConfirmation() {
  const [ticketType, setTicketType] = useState({
    isOnline: false,
    hasHotel: true,
  });
  let onlineText = '';
  let hotelText = '';
  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      <SubTitle variant="h6">Ingresso escolhido</SubTitle>
      <TicketChosenContainer ticketType={ticketType}>
        {ticketType.isOnline ? (onlineText = 'Online') : (onlineText = 'Presencial')} +
        {ticketType.hasHotel ? (hotelText = ' Com Hotel') : (hotelText = ' Sem Hotel')}
      </TicketChosenContainer>
      <SubTitle variant="h6">Pagamento</SubTitle>
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
