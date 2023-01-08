import styled from 'styled-components';

export default function UnauthourizedPayment() { 
  return (<>
    <HotelAndRoomsErrorMessage>Você precisa ter confirmado pagamento antes <br/> de fazer a escolha de hospedagem</HotelAndRoomsErrorMessage>
  </>);
};

const HotelAndRoomsErrorMessage = styled.p`
  width: 459px;
  font-size: 20px;
  line-height: 23px;
  text-align: center;

  color: #8E8E8E;
`;
