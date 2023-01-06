import styled from 'styled-components';
import dayjs from 'dayjs';

export default function Activity({ name, startAt, endAt, vacancies }) {
  return(
    <Container>
      <h3>{name}</h3>
      <h4>{dayjs(startAt).format('hh:mm')} - {dayjs(endAt).format('hh:mm')}</h4>
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
