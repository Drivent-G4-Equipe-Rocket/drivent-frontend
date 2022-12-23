import useAsync from '../useAsync';
import useToken from '../useToken';

import * as reservationApi from '../../services/reservationApi';

export default function useSaveTicketReservation() {
  const token = useToken();

  const {
    loading: saveTicketReservationLoading,
    error: saveTicketReservationError,
    act: saveTicketReservation
  } = useAsync((data) => reservationApi.save(data, token), false);

  return {
    saveTicketReservationLoading,
    saveTicketReservationError,
    saveTicketReservation
  };
}
