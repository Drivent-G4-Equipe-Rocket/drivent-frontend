import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { useContext, useState } from 'react';
import TicketTypesContext from '../../contexts/TicketTypesContext';
import { toast } from 'react-toastify';
import TicketSelection from './TicketSelection';
import HotelIncludedSelection from './HotelIncludedSelection';
import PostTicketReservation from './PostTicketReservation';

export default function TicketReservation() {
  const [hotelSelectionIsOpen, setHotelSelectionOpen] = useState(false);
  const [postReservationIsOpen, setPostReservationOpen] = useState(false);
  const { ticketTypes } = useContext(TicketTypesContext);
  console.log(ticketTypes);

  return (
    <>
      <StyledTypography variant="h4">Ingresso e Pagamento</StyledTypography>
      <TicketSelection types={ticketTypes} isOpenHotel={hotelSelectionIsOpen} toggleHotelComponent={setHotelSelectionOpen} isOpenPost={postReservationIsOpen} togglePostComponent={setPostReservationOpen}/>
      { hotelSelectionIsOpen ? <HotelIncludedSelection types={ticketTypes} isOpenPost={postReservationIsOpen} togglePostComponent={setPostReservationOpen}/> : null }
      { postReservationIsOpen ? <PostTicketReservation/> : null }
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;
