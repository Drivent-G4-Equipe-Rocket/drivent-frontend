import styled from 'styled-components';
import { SubTitle } from '../../../components/PaymentConfirmation';
import useActivity from '../../../hooks/api/useActivity';
import formatDays from './formatDays';
import { useEffect } from 'react';
import { useState } from 'react';
import ActivitiesTable from './ActivitiesTable';
import DateButton from './DateButton';

export default function ChoseActivities() {
  const [activitiesDays, setActivitiesDays] = useState([]);
  const [show, setShow] = useState(false);
  const [activityDate, setDate] = useState('');
  const { activities } = useActivity();

  useEffect(() => {
    if (activities) {
      setActivitiesDays(formatDays(activities));
    }
  }, [activities]);

  return (
    <Wrapper>
      <SubTitle>Primeiro, filtre pelo dia do evento:</SubTitle>
      <DaysContainer>
        {activitiesDays?.map((item) => {
          return <DateButton date={item} activityDate={activityDate} setShow={setShow} setDate={setDate} />;
        })}
      </DaysContainer>
      {show ? <ActivitiesTable date={activityDate} activities={activities} /> : null}
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
`;
