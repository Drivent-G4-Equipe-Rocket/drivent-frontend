import styled from 'styled-components';
import useHotels from '../../hooks/api/useHotels';
import { Typography } from '@material-ui/core';

export default function HotelBoxSelect() {
  const { hotel } = useHotels();
  console.log(hotel);

  return (
    <>
  
      {hotel?.map((hotel, key) => (
        <ContainerHotel key={key}>
          <ContainerImg > 
            <img src={hotel.image} alt='imagem do hotel'></img>
            <p>{hotel.name}</p>
          </ContainerImg>
          <StyledTypography>Tipo de acomodações:</StyledTypography>
          {hotel.Rooms?.map(room => (
            <SubTitle>{room.name}</SubTitle>
          ))}
          <StyledTypography>Vagas disponíveis:</StyledTypography>
          {hotel.Rooms?.map(room => (
            <SubTitle>{room.name}</SubTitle>
          ))}
          
        </ContainerHotel>))}

    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 2px !important;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  margin-left: 15px !important;
  color: #3C3C3C;
`;

const SubTitle = styled.span`
  margin-bottom: 2px !important;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #3C3C3C;
  margin-left: 15px;
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
  padding: 16px 14px;
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

