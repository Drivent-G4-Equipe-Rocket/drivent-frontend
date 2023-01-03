
import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import HotelBoxSelect from './HotelBoxSelect';

export default function HotelConfirmation() {
  return (
    <>
      <StyledTypography variant="h4">Escolha de hotel e quartos</StyledTypography>
      <SubTitle variant="h6">Primeiro, escolha seu hotel</SubTitle>
      <HotelBoxSelect></HotelBoxSelect>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;

const SubTitle = styled(Typography)`
  margin-bottom: 20px !important;
  color: #8e8e8e;
`;
