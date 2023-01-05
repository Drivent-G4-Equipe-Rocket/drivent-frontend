import styled from 'styled-components';
import { SubTitle } from '../../../components/PaymentConfirmation';
import useActivity from '../../../hooks/api/useActivity';
import formatDays from './formatDays';
import { useEffect } from 'react';
import { useState } from 'react';
import ActivitiesTable from './ActivitiesTable';

export default function ChoseActivities() {
  const [activitiesDays, setActivitiesDays] = useState([]);
  const [show, setSchow] = useState(false);
  const [date, setDate] = useState("");
  const { activities } = useActivity();
  console.log(activities);

  function selectDate() {
    setDate(item); //como pegar esse 'item'? Transformar a div em outro componente passando valores como props.
    setSchow(true);
  };

  useEffect(() => {
    if (activities) {
      setActivitiesDays(formatDays(activities));
    }
  }, [activities]);

  return (
    <Wrapper>
      <SubTitle>Primeiro, filtre pelo dia do evento:</SubTitle>
      <DaysContainer>
        { activitiesDays.map((item) => {
          return <div OnClick={selectDate}>{item}</div>;
        }) }
      </DaysContainer>
      { show ? <ActivitiesTable date={date} activities={activities}/> : null }
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

  .selected {
    background-color: #ffd37d;
  }
`;
