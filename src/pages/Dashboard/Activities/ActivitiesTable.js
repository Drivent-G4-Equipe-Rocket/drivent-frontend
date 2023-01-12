import styled from 'styled-components';
import dayjs from 'dayjs';
import Activity from './Activity';

export default function ActivitiesTable({ date, activities }) {
  return(
    <Table>
      <Auditorium>
        <p>Auditório Principal</p>
        <Column>
          {activities.map( item => {return item.location === 'AUDITORIO_PRINCIPAL' && dayjs(item.date).format('DD/MM') === date.split(' ')[1] ? <Activity key={item.id} activityId={item.id} name={item.name} startAt={item.startAt} endAt={item.endAt} vacancies={item.vacancies}/> : null; })}
        </Column>
      </Auditorium>
      <Auditorium>
        <p>Auditório Lateral</p>
        <Column>
          {activities.map( item => {return item.location === 'AUDITORIO_LATERAL' && dayjs(item.date).format('DD/MM') === date.split(' ')[1] ? <Activity key={item.id} activityId={item.id} name={item.name} startAt={item.startAt} endAt={item.endAt} vacancies={item.vacancies}/> : null; })}
        </Column>
      </Auditorium>
      <Auditorium>
        <p>Sala de Workshop</p>
        <Column>
          {activities.map( item => {return item.location === 'SALA_DE_WORKSHOP'&& dayjs(item.date).format('DD/MM') === date.split(' ')[1] ? <Activity key={item.id} activityId={item.id} name={item.name} startAt={item.startAt} endAt={item.endAt} vacancies={item.vacancies}/> : null; })}
        </Column>
      </Auditorium>
    </Table>
  );
}

const Table = styled.div`
  height=392px;
  display:flex;
  margin-top: 70px;
`;

const Auditorium = styled.div`
  p {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    color: #7B7B7B;
    text-align: center;
    margin-bottom: 13px;
  }
`;

const Column = styled.div`
  width: 288px; 
  height: 390px;
  background: #FFFFFF; 
  border: 1px solid #D7D7D7;
`;
