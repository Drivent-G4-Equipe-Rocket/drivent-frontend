import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import useTicketPaid from '../../../hooks/api/useTicketPaid';
import UnauthourizedPayment from './unauthorizedPayment';
import UnauthourizedTicketType from './unauthorizedTicketType';

export default function Hotel() {
  const { ticketData }  = useTicketPaid();
  console.log(ticketData);

  if (ticketData?.status === 'RESERVED') {
    return (<>
      <StyledTypography variant="h4">Escolha de Hotel e quarto</StyledTypography>
      <HotelsAndRoomsContainer><UnauthourizedPayment/></HotelsAndRoomsContainer>
    </>); 
  } else if (ticketData?.ticketTypeId === 2 || ticketData?.ticketTypeId === 3 || ticketData?.ticketTypeId === 4) {
    return (<>
      <StyledTypography variant="h4">Escolha de Hotel e quarto</StyledTypography>
      <HotelsAndRoomsContainer><UnauthourizedTicketType/></HotelsAndRoomsContainer>
    </>); 
  } else {
    return (<>
      <StyledTypography variant="h4">Escolha de Hotel e quarto</StyledTypography>
      <HotelsAndRoomsContainer>Em breve</HotelsAndRoomsContainer>
    </>);
  }
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;

const HotelsAndRoomsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80%;
  margin-bottom: 40px;
`;
