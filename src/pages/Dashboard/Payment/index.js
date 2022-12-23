import { useContext, useEffect, useState } from 'react';
import PaymentConfirmation from '../../../components/PaymentConfirmation';
import TicketReservation from '../../../components/TicketReservation';
import TicketContext from '../../../contexts/TicketContext';
import useTicketPaid from '../../../hooks/api/useTicketPaid';

export default function Payment() {
  const { ticketData } = useTicketPaid();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (ticketData) {
      setShow(true);
    }
  });

  return <>{show ? <PaymentConfirmation /> : <TicketReservation setShow={setShow} />}</>;
}
