import styled from 'styled-components';
import { SubTitle } from '../../../components/PaymentConfirmation';

export default function ChoseActivities() {
  const eventDays = ['Sexta, 22/10', 'Sábado, 23/10', 'Domingo, 24/10'];
  return (
    <Wrapper>
      <SubTitle>Primeiro, filtre pelo dia do evento:</SubTitle>
      <DaysContainer>
        {eventDays.map((item) => {
          return <div>{item}</div>;
        })}
      </DaysContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 20px;
`;

const DaysContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-evenly;

  > div {
    background-color: #e0e0e0;
    margin-right: 15px;
    width: 50%;
    height: 37px;
    font-size: 14px;
    font-weight: 400;
    line-height: 16.41px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  }

  > div:hover {
    cursor: pointer;
    background-color: #ffd37d;
  }
`;
