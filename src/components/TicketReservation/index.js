import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { useContext, useState } from 'react';
import TicketTypesContext from '../../contexts/TicketTypesContext';
import TicketSelection from './TicketSelection';
import HotelIncludedSelection from './HotelIncludedSelection';
import PostTicketReservation from './PostTicketReservation';

export default function TicketReservation({ setShow }) {
  const [hotelSelectionIsOpen, setHotelSelectionOpen] = useState(false);
  const [postReservationIsOpen, setPostReservationOpen] = useState(false);
  const [typeSelected, setTypeSelected] = useState('None');
  const [includesHotel, setIncludesHotel] = useState(false);
  const { ticketTypes } = useContext(TicketTypesContext);

  return (
    <>
      <StyledTypography variant="h4">Ingresso e Pagamento</StyledTypography>
      <TicketSelection
        isOpenHotel={hotelSelectionIsOpen}
        toggleHotelComponent={setHotelSelectionOpen}
        isOpenPost={postReservationIsOpen}
        togglePostComponent={setPostReservationOpen}
        setTypeSelected={setTypeSelected}
      />
      {hotelSelectionIsOpen ? (
        <HotelIncludedSelection
          isOpenPost={postReservationIsOpen}
          togglePostComponent={setPostReservationOpen}
          setIncludesHotel={setIncludesHotel}
        />
      ) : null}
      {postReservationIsOpen ? (
        <PostTicketReservation
          types={ticketTypes}
          typeSelected={typeSelected}
          includesHotel={includesHotel}
          setShow={setShow}
        />
      ) : null}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
