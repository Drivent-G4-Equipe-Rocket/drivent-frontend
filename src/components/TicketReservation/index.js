import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { toast } from 'react-toastify';
import TicketSelection from './TicketSelection';
import HotelIncludedSelection from './HotelIncludedSelection';
import PostTicketReservation from './PostTicketReservation';
import useTicketReservation from '../../hooks/api/useTicketReservation';

export default function TicketReservation() {
  const { ticketData } = useTicketReservation();
  console.log(ticketData);
  const [ type, setType ] = useState([]);

  useEffect(() => {
    if(ticketData) {
      setType(ticketData);
    }
  }, []);

  return (
    <>
      <StyledTypography variant="h4">Ingresso e Pagamento</StyledTypography>
      <TicketSelection type={type}/>
      <HotelIncludedSelection/>
      <PostTicketReservation/>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;
