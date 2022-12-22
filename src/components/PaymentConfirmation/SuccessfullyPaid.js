
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

export function SuccessfullyPaid() {
  return (
    <>
      <StyledTypography variant="h6" color='#8E8E8E'>Ingresso e pagamento</StyledTypography>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
  color: ${props => props.color};
`;
