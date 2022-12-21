import useAsync from '../useAsync';
import useToken from '../useToken';

import * as reservationApi from '../../services/reservationApi';

export default function useTicketReservation() {
  const token = useToken();
  
  const {
    data: ticketData,
    loading: ticketReservationLoading,
    error: ticketReservationError,
    act: getTicketInformation
  } = useAsync(async() => await reservationApi.getTicketInformation(token));

  return {
    ticketData,
    ticketReservationLoading,
    ticketReservationError,
    getTicketInformation
  };
}
