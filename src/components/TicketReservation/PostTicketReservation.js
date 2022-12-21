import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Button from '../../components/Form/Button';
export default function PostTicketReservation() {
  return (
    <>
      <StyledTypography variant="h6" color='#8E8E8E'>Fechado! O total ficou em <b>R$ 600</b>. Agora é só confirmar:</StyledTypography>
      <Button>RESERVAR INGRESSO</Button>
    </>
  );
}
const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
  color: ${props => props.color};
`;
