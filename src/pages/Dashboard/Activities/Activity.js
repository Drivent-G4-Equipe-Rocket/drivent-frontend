import styled from 'styled-components';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { IonIcon } from '@ionic/react';
import { enterOutline, closeCircleOutline } from 'ionicons/icons';
import useSaveActivity from '../../../hooks/api/useSaveActivity';
import useSchedule from '../../../hooks/api/useSchedule';
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('America/Sao_Paulo');

export default function Activity({ activityId, name, startAt, endAt, vacancies }) {
  const { saveActivity } = useSaveActivity();
  const [scheduleArray, setSchedule] = useState([]);
  const { schedules } = useSchedule();
  console.log(scheduleArray);

  useEffect(() => {
    if (schedules) {
      setSchedule(schedules);
    }
  }, [schedules]);

  async function postActivity() {
    const newData = {
      activityId: activityId,
    };

    try {
      await saveActivity(newData);
      toast('Inscrição na atividade feita com sucesso!');
    } catch (error) {
      toast('Não foi possível se inscrever na atividade!');
    }
  }

  return (
    <Container>
      <div>
        <h3>{name}</h3>
        <h4>
          {dayjs.utc(startAt).format('hh:mm')} - {dayjs.utc(endAt).format('hh:mm')}
        </h4>
      </div>
      <Icon onClick={postActivity}>
        <div>
          <IonIcon icon={vacancies > 0 ? enterOutline : closeCircleOutline} style={{ color: vacancies > 0 ? '#078632' : '#CC6666' }} />
        </div>
        <div>
          <h4 style={{ color: vacancies > 0 ? '#078632' : '#CC6666' }}>{vacancies > 0 ? `${vacancies} vagas` : 'Esgotado'}</h4>
        </div>
      </Icon>
    </Container>
  );
}

const Container = styled.div`
  width: 265px;
  height: 79px;
  background: #f1f1f1;
  border-radius: 5px;
  margin: 9px;
  padding: 10px;
  display: flex;

  h3 {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    color: #343434;
    margin-bottom: 6px;
  }

  h4 {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 12px;
    color: #343434;
  }
`;

const Icon = styled.div`
  margin-left: 18px;
  padding-left: 10px;
  border-left: 1px solid #cfcfcf;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h4 {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 9px;
    color: #343434;
    margin-top: 3px;
  }
`;
