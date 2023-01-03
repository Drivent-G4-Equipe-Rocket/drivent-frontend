import styled from 'styled-components';
import useHotels from '../../hooks/api/useHotels';

export default function HotelBoxSelect() {
  const { hotel } = useHotels();

  return (
    <>
  
      {hotel?.map((hotel, key) => (
        <ContainerHotel key={key}>
          <ContainerImg > 
            <img src={hotel.image} alt='imagem do hotel'></img>
            <p>{hotel.name}</p>
          </ContainerImg>
        </ContainerHotel>))}

    </>
  );
}

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

