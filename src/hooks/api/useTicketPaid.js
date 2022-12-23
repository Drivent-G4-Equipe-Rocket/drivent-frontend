import useAsync from '../useAsync';
import useToken from '../useToken';

import * as ticketApi from '../../services/ticketApi';

export default function useTicketPaid() {
  const token = useToken();

  const {
    data: ticketData,
    loading: ticketLoading,
    error: ticketError,
    act: getTicket,
  } = useAsync(() => ticketApi.getTicket(token));

  return {
    ticketData,
    ticketLoading,
    ticketError,
    getTicket,
  };
}
