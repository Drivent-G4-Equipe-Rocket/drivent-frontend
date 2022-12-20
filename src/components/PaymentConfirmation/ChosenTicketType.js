import styled from 'styled-components';

export default function ChosenTicketType({ data }) {
  return (
    <TicketChosenContainer>
      <TicketTitle>
        {data[0]?.isRemote ? 'Online' : 'Presencial'} +{data[0]?.includesHotel ? ' Com Hotel' : ' Sem Hotel'}
      </TicketTitle>
      <TicketPrice>R$ {data[0].price}</TicketPrice>
    </TicketChosenContainer>
  );
}

const TicketPrice = styled.div`
  color: #8e8e8e;
  font-size: 14px;
  font-weight: light;
`;

const TicketTitle = styled.div`
  font-weight: 400;
`;

const TicketChosenContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 33%;
  height: 15%;
  border-radius: 20px;
  background-color: #ffeed2;
  margin-bottom: 20px;
`;
