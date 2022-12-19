import styled from 'styled-components';
import useSaveTicketReservation from '../../hooks/api/useSaveTicketReservation';

export default function PostTicketReservation() {
  const { saveTicketReservationLoading, saveTicketReservation } = useSaveTicketReservation();
  return (
    <>
      <Description>Fechado! O total ficou em <b>R$ 600</b>. Agora é só confirmar:</Description>
      <ConfirmButton><h4>RESERVAR INGRESSO</h4></ConfirmButton>
    </>
  );
}

const Description = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 300;
  line-height: 23px;
  color: #8E8E8E; 
  margin-top: 37px;
`;

const ConfirmButton = styled.div`
  width: 162px;
  height: 37px;
  background: #E0E0E0;
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
