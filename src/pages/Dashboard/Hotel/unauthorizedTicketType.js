import styled from 'styled-components';

export default function UnauthourizedTicketType() { 
  return (<>
    <HotelAndRoomsErrorMessage>Sua modalidade de ingresso não inclui hospedagem <br/> Prossiga para a escolha de atividades</HotelAndRoomsErrorMessage>
  </>);
};

const HotelAndRoomsErrorMessage = styled.p`
  width: 459px;
  font-size: 20px;
  line-height: 23px;
  text-align: center;

  color: #8E8E8E;
`;
