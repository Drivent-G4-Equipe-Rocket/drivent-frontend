
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { FaCheckCircle } from 'react-icons/fa';

export function SuccessfullyPaid() {
  return (
    <>
      <StyledFlex>
        <FaCheckCircle color='#36B853' size='3rem'/>
        <StyledColum>
          <StyledParagraph variant="h6" color='#454545' weight='700'>Pagamento confirmado</StyledParagraph>
          <StyledParagraph variant="h6" color='#8E8E8E'weight='500'>Prossiga para escolha de hospedagem e atividades</StyledParagraph>
        </StyledColum>
      </StyledFlex>
    </>
  );
}

const StyledParagraph = styled.p`
  font-weight: ${props => props.weight};
  font-size: 16px;
  line-height: 19px;
  color: ${props => props.color};
`;

const StyledFlex = styled.div`
    display: flex;
`;
const StyledColum = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 14px;
`;
