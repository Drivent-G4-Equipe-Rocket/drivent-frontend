import styled from 'styled-components';
import { SubTitle } from '../../../components/PaymentConfirmation';
import useActivity from '../../../hooks/api/useActivity';
import dayjs from 'dayjs';
import formatDays from './formatDays';
import { useEffect } from 'react';
import { useState } from 'react';

export default function ChoseActivities() {
  const [activitiesDays, setActivitiesDays] = useState([]);
  const { activities } = useActivity();
  console.log(activities);

  useEffect(() => {
    if (activities) {
      setActivitiesDays(formatDays(activities));
    }
  }, [activities]);

  return (
    <Wrapper>
      <SubTitle>Primeiro, filtre pelo dia do evento:</SubTitle>
      <DaysContainer>
        {activitiesDays.map((item) => {
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

  .selected {
    background-color: #ffd37d;
  }
`;
