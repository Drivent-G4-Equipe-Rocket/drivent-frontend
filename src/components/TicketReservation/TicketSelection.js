import { useState } from 'react'; 
import styled from 'styled-components';

export default function TicketSelection({ types, isOpenHotel, toggleHotelComponent, isOpenPost, togglePostComponent }) {
  console.log(types);
  const [isFirstSelected, setFirstSelected] = useState(false);
  const [isSecondSelected, setSecondSelected] = useState(false);

  openClosePostComponent();

  function selectPresentialTicket() {
    setFirstSelected(!isFirstSelected);
    setSecondSelected(false);
    toggleHotelComponent(!isOpenHotel);
    togglePostComponent(false);
  };

  function selectOnlineTicket() {
    setSecondSelected(!isSecondSelected);
    setFirstSelected(false);
    toggleHotelComponent(false);
    togglePostComponent(!isOpenPost);
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
      <Description>Primeiro, escolha sua modalidade de ingresso</Description>
      <ButtonPair>
        <SelectionButton onClick={selectPresentialTicket} style={{ background: isFirstSelected ?  '#FFEED2' : '#FFFFFF' }}>
          <h4>Presencial</h4>
          <h5>R$ {types[0].price}</h5>
        </SelectionButton>
        <SelectionButton onClick={selectOnlineTicket} style={{ background: isSecondSelected ?  '#FFEED2' : '#FFFFFF' }}>
          <h4>Online</h4>
          <h5>R$ {types[2].price}</h5>
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
