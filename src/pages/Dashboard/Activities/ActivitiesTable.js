import styled from 'styled-components';
import { useEffect } from 'react';
import { useState } from 'react';

export default function ActivitiesTable({date, activities}) {
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