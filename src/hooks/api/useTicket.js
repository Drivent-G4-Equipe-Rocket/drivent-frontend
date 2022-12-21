import useAsync from '../useAsync';
import useToken from '../useToken';

import * as ticketApi from '../../services/ticketApi';

export default function useTicketReservation() {
  const token = useToken();

  const {
    data: ticketTypesData,
    loading: ticketLoading,
    error: ticketError,
    act: getTicketType,
  } = useAsync(() => ticketApi.getTicketType(token));

  return {
    ticketTypesData,
    ticketLoading,
    ticketError,
    getTicketType,
  };
}
