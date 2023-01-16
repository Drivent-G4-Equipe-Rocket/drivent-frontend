import styled from 'styled-components';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { IonIcon } from '@ionic/react';
import { enterOutline, closeCircleOutline, checkmarkCircleOutline } from 'ionicons/icons';
import { useState, useEffect } from 'react';
import useSaveActivity from '../../../hooks/api/useSaveActivity';
import useSchedule from '../../../hooks/api/useSchedule';
import { toast } from 'react-toastify';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('America/Sao_Paulo');

export default function Activity({ activityId, name, startAt, endAt, vacancies }) {
  const { schedules } = useSchedule();
  const [isSubscribed, setSubscribed] = useState(false);
  const { saveActivity } = useSaveActivity();
  const difference = dayjs(endAt).format('H') - dayjs(startAt).format('H');

  useEffect(() => {
    if (schedules) {
      schedules.forEach(e => {
        if(e.activityId === activityId) {
          setSubscribed(true);
        }
      });
    }
  }, [schedules]);

  async function postActivity() {
    const newData = {
      activityId: activityId,
    };

    try {
      await saveActivity(newData);
      setSubscribed(true);
      toast('Inscrição na atividade feita com sucesso!');
    } catch (error) {
      toast('Não foi possível se inscrever na atividade!');
    }
  }

  return (
    <Container style={{ background: isSubscribed ? '#D0FFDB' : '', height: `${difference*80}px` }}>
      <Left>
        <h3>{name}</h3>
        <h4>
          {dayjs.utc(startAt).format('hh:mm')} - {dayjs.utc(endAt).format('hh:mm')}
        </h4>
      </Left>
      <Icon onClick={postActivity}>
        <div>
          <IonIcon icon={isSubscribed ? checkmarkCircleOutline : (vacancies > 0 ? enterOutline : closeCircleOutline)} style={{ color: isSubscribed || vacancies > 0 ? '#078632' : '#CC6666' }} />
        </div>
        <div>
          <h4 style={{ color: isSubscribed || vacancies > 0 ? '#078632' : '#CC6666' }}>{isSubscribed ? 'Inscrito' : (vacancies > 0 ? `${vacancies} vagas` : 'Esgotado')}</h4>
        </div>
      </Icon>
    </Container>
  );
}

const Container = styled.div`
  width: 265px;
  background: #f1f1f1;
  border-radius: 5px;
  margin: 9px;
  padding: 10px;
  display: flex;
`;

const Left = styled.div`
  width: 170px;

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
  padding-left: 14px;
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
