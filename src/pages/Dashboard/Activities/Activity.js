import styled from 'styled-components';
import dayjs from 'dayjs';
import { IonIcon } from '@ionic/react';
import { enterOutline, closeCircleOutline } from 'ionicons/icons';
import useSaveActivity from '../../../hooks/api/useSaveActivity';
import { toast } from 'react-toastify';

export default function Activity({ activityId, name, startAt, endAt, vacancies }) {
  const { saveActivity } = useSaveActivity();
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

  return(
    <Container>
      <div>
        <h3>{name}</h3>
        <h4>{dayjs(startAt).format('hh:mm')} - {dayjs(endAt).format('hh:mm')}</h4>
      </div>
      <Icon onClick={postActivity}>
        <div>
          <IonIcon icon={vacancies > 0 ? enterOutline : closeCircleOutline} color='#078632'/>
        </div>
        <div>
          <h4>{vacancies > 0 ? `${vacancies} vagas` : 'Esgotado'}</h4>
        </div>
      </Icon>
    </Container>
  );
}

const Container = styled.div`
  width: 265px;
  height: 79px;
  background: #F1F1F1;
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
  border-left: 1px solid #CFCFCF;
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
