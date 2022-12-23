import styled from 'styled-components';
import useSaveTicketReservation from '../../hooks/api/useSaveTicketReservation';
import { toast } from 'react-toastify';

export default function PostTicketReservation({ types, typeSelected, includesHotel, setShow }) {
  const { saveTicketReservation } = useSaveTicketReservation();
  const ticketInfo = types.filter((e) => e.name === typeSelected && e.includesHotel === includesHotel);

  async function postReservation() {
    const newData = {
      ticketTypeId: ticketInfo[0].id,
    };

    try {
      await saveTicketReservation(newData);
      toast('Ticket reservado com sucesso!');
      setShow(true);
    } catch (err) {
      toast('Não foi possível reservar seu ticket!');
    }
  }

  return (
    <>
      <Description>
        Fechado! O total ficou em <b>R$ {ticketInfo[0].price}</b>. Agora é só confirmar:
      </Description>
      <ConfirmButton onClick={postReservation}>
        <h4>RESERVAR INGRESSO</h4>
      </ConfirmButton>
    </>
  );
}

const Description = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 300;
  line-height: 23px;
  color: #8e8e8e;
  margin-top: 37px;
`;

const ConfirmButton = styled.div`
  width: 162px;
  height: 37px;
  background: #e0e0e0;
  border-radius: 4px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  margin-top: 17px;
  margin-bottom: 17px;
  display: flex;
  justify-content: center;
  align-items: center;

  h4 {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 300;
    line-height: 16px;
    color: #000000;
    margin-bottom: 3px;
  }
`;
