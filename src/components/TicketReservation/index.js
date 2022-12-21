import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import TicketSelection from './TicketSelection';
import PostTicketReservation from './PostTicketReservation';
import useTicketReservation from '../../hooks/api/useTicketReservation';

export default function TicketReservation() {
  const { ticketData } = useTicketReservation();
  const [ type, setType ] = useState([]);
  
  useEffect(() => {
    if(ticketData) {
      setType(ticketData);
    }
  }, []);
  return (
    <>
      <StyledTypography variant="h4">Ingresso e Pagamento</StyledTypography>
      <TicketSelection types={ticketData}/>
      <PostTicketReservation/>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;
