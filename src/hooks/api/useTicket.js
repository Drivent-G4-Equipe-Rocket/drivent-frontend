import useAsync from '../useAsync';
import useToken from '../useToken';

import * as ticketApi from '../../services/ticketApi';

export default function useTicketReservation() {
  const token = useToken();

  const {
    data: ticketTypeData,
    loading: ticketLoading,
    error: ticketError,
    act: getTicketType,
  } = useAsync(() => ticketApi.getTicketType(token));

  return {
    ticketTypeData,
    ticketLoading,
    ticketError,
    getTicketType,
  };
}
