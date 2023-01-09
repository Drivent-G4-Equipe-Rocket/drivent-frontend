import styled from 'styled-components';
import useHotels from '../../hooks/api/useHotels';
import { Typography } from '@material-ui/core';

export default function HotelBoxSelect() {
  const { hotel } = useHotels();

  function availableVacancies(hotel) {
    let TotalVacancies = 0;
    
    hotel.Rooms?.map((room) => {
      TotalVacancies += room.capacity - room.Booking.length;
    });
  
    return TotalVacancies;
  }

  return (
    <>
  
      {hotel?.map((hotel, key) => (
        <ContainerHotel >
          <ContainerImg > 
            <img src={hotel.image} alt='imagem do hotel'></img>
            <p>{hotel.name}</p>
          </ContainerImg>
          <StyledTypography>Tipo de acomodações:</StyledTypography>
          {hotel.Rooms?.map(room => (
            <SubTitle>{room.name}</SubTitle>
          ))}
          <StyledTypography>Vagas disponíveis:</StyledTypography>
          
          <SubTitle>{availableVacancies(hotel)}</SubTitle>
          
        </ContainerHotel>))}

    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-top: 14px !important;
  font-family: 'Roboto' !important;
  font-style: normal !important;
  font-weight: 700 !important;
  font-size: 12px !important;
  line-height: 14px !important;
  margin-left: 15px !important;
  color: #3C3C3C !important;
`;

const SubTitle = styled.span`
  margin-bottom: 2px !important;
  font-family: 'Roboto' !important;
  font-style: normal !important;
  font-weight: 400 !important;
  font-size: 12px !important;
  line-height: 14px !important;
  color: #3C3C3C !important;
  margin-left: 15px !important;
`;

const ContainerHotel = styled.div`
  margin-bottom: 20px !important;
  width: 196px;
  height: 264px;
  margin-right: 19px;
  background: #EBEBEB;
  border-radius: 10px;
`;
const ContainerImg = styled.div`
  padding: 16px 14px 0px 14px;
  img {
    width: 168px;
    height: 109px;
    border-radius: 5px;
  }
  p{
    width: 120px;
    height: 23px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #343434;
  }
`;

