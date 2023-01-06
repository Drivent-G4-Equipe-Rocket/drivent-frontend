import styled from 'styled-components';
import { useEffect } from 'react';
import { useState } from 'react';

export default function ActivitiesTable({ date, activities }) {
  return(
    <Table>
      <Auditorium>
        <p>Auditório Principal</p>
        <Column>
        </Column>
      </Auditorium>
      <Auditorium>
        <p>Auditório Lateral</p>
        <Column>
        </Column>
      </Auditorium>
      <Auditorium>
        <p>Sala de Workshop</p>
        <Column>
        </Column>
      </Auditorium>
    </Table>
  );
}

const Table = styled.div`
  height=392px;
  display:flex;
`;

const Auditorium = styled.div`
  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    color: #7B7B7B;
  }
`;

const Column = styled.div`
  border: 1px solid #D7D7D7;
`;
