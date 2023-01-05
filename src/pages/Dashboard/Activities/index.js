import useTicketPaid from '../../../hooks/api/useTicketPaid';
import { Typography, styled } from '@material-ui/core';
import { PaymentMissing } from './PaymentMissing';
import { TicketTypeCheck } from './TicketTypeCheck';
import ChoseActivities from './ChoseActivities';

export default function Activities() {
  const { ticketData } = useTicketPaid();
  return (
    <>
      <StyledTypography variant="h4">Escolha de atividades </StyledTypography>
      {ticketData?.status === 'RESERVED' ? (
        <PaymentMissing />
      ) : ticketData?.TicketType.isRemote === false ? (
        <ChoseActivities />
      ) : (
        <TicketTypeCheck />
      )}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
