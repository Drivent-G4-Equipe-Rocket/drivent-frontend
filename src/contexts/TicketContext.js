import { createContext, useEffect, useState } from 'react';
import useTicketPaid from '../hooks/api/useTicketPaid';

const TicketContext = createContext();
export default TicketContext;

export function TicketProvider({ children }) {
  const [ticket, setTicket] = useState([]);
  const { ticketData } = useTicketPaid();
  useEffect(() => {
    setTicket(ticketData);
  });

  return <TicketContext.Provider value={{ ticket, setTicket }}>{children}</TicketContext.Provider>;
}
