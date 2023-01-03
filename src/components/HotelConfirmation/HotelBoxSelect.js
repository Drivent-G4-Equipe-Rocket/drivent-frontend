import styled from 'styled-components';
import useHotels from '../../hooks/api/useHotels';

export default function HotelBoxSelect() {
  const { hotel } = useHotels();
  console.log(hotel[0].image);

  return (
    
    <ContainerHotel>
      <ContainerImg img={hotel[0]?.image}></ContainerImg>
    </ContainerHotel>
    
  );
}

const ContainerHotel = styled.div`
  margin-bottom: 20px !important;
  width: 196px;
  height: 264px;
  background: #EBEBEB;
  border-radius: 10px;
`;
const ContainerImg = styled.div`
  width: 168px;
  height: 109px;
  background: ${props => props.img};
  border-radius: 5px;
`;

