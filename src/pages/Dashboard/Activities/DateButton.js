import styled from 'styled-components';
import { useEffect } from 'react';
import { useState } from 'react';

export default function DateButton({ date, setShow, setDate }) {
  function selectDate() {
    setDate(date); 
    setShow(true);
  };

  return(
    <Button onClick={selectDate}>
      {date}
    </Button>
  );
}

const Button = styled.div`
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

  :hover {
    cursor: pointer;
    background-color: #ffd37d;
  }
`;
