import { useState } from 'react';
import styled from 'styled-components';

export default function HotelIncludedSelection({ types, togglePostComponent }) {
  const [isFirstSelected, setFirstSelected] = useState(false);
  const [isSecondSelected, setSecondSelected] = useState(false);

  openClosePostComponent();

  function selectNoHotelOption() {
    setFirstSelected(!isFirstSelected);
    setSecondSelected(false);
  };

  function selectHotelOption() {
    setSecondSelected(!isSecondSelected);
    setFirstSelected(false);
  };

  function openClosePostComponent() {
    if(isFirstSelected || isSecondSelected) {
      togglePostComponent(true);
    } else {
      togglePostComponent(false);
    }
  };

  return (
    <>
      <Description>Ótimo! Agora escolha sua modalidade de hospedagem</Description>
      <ButtonPair>
        <SelectionButton onClick={selectNoHotelOption} style={{ background: isFirstSelected ?  '#FFEED2' : '#FFFFFF' }}>
          <h4>Sem Hotel</h4>
          <h5>+ R$ 0</h5>
        </SelectionButton>
        <SelectionButton onClick={selectHotelOption} style={{ background: isSecondSelected ?  '#FFEED2' : '#FFFFFF' }}>
          <h4>Com Hotel</h4>
          <h5>+ R$ 350</h5>
        </SelectionButton>
      </ButtonPair>
    </>
  );
}

const Description = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 300;
  line-height: 23px;
  color: #8E8E8E; 
  margin-top: 37px;
`;

const ButtonPair = styled.div`
  display: flex;
`;

const SelectionButton = styled.div`
  width: 145px;
  height: 145px;
  background: #FFFFFF;
  border-radius: 20px;
  border: 1px solid #CECECE;
  margin-top: 17px;
  margin-right: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 300;
    line-height: 19px;
    color: #454545;
    margin-bottom: 3px;
  }

  h5 {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 300;
    line-height: 16px;
    color: #898989;
  }
`;
