import { createContext, useEffect, useState } from 'react';
import useTicketReservation from '../hooks/api/useTicket';

const TicketTypesContext = createContext();
export default TicketTypesContext;

export function TicketTypesProvider({ children }) {
  const [ticketTypes, setTicketTypes] = useState([]);
  const { ticketTypesData } = useTicketReservation();
  useEffect(() => {
    setTicketTypes(ticketTypesData);
  });

  return <TicketTypesContext.Provider value={{ ticketTypes, setTicketTypes }}>{children}</TicketTypesContext.Provider>;
}
