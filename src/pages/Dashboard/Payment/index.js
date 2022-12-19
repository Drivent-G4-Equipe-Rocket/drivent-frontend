import Button from '../../../components/Form/Button';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { useEffect, useState } from 'react';
import axios from 'axios';
import useToken from '../../../hooks/useToken';
export default function Payment() {
  const [isButtonSelected, setIsButtonSelected] = useState(null);
  const token = useToken();

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  };
  
  useEffect(async() => {
    const response = await axios.get('http://localhost:4000/tickets/types', config);
    console.log(response.data);
  }, []);

  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      <StyledTypography variant="h6" color='#8E8E8E'>primeiro, escolha sua modalidade de ingresso</StyledTypography>
      <StyledDiv> 
        <StyledDivSelect onClick={() => {setIsButtonSelected('Presencial');}} selected={ isButtonSelected === 'Presencial'? true: false } color='#FFF'> <p>Presencial</p> <p>R$ 250</p> </StyledDivSelect>
        <StyledDivSelect onClick={() => {setIsButtonSelected('Online');}} selected={ isButtonSelected === 'Online'? true: false } color='#FFF'> <p>Online</p> <p>R$ 100</p> </StyledDivSelect>
      </StyledDiv>
      <StyledTypography variant="h6" color='#8E8E8E'>fechado! o total ficou em R$ 100. agora é so confirmar</StyledTypography>

      <Button>RESERVAR INGRESSO</Button>
    </>
  );
}
const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
  color: ${props => props.color};
`;

const StyledDiv= styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledDivSelect = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  border: ${props => (props.selected)? '3px solid #008000' : '1px solid #CECECE' };
  border-radius: 20px;
  width: 145px;
  height: 145px;
  margin-right: 24px;
  background-color: ${props => (props.selected)? '#FFEED2' : '#FFF'};
  :hover{
    cursor: pointer;
    border: 3px solid #008000;
  }
  
`;
