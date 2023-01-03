import styled from 'styled-components';

export function PaymentMissing() {
  return (
    <>
      <MessageContainer>Você precisa ter confirmado pagamento antes de fazer a escolha de atividades</MessageContainer>
    </>
  );
}

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  height: 70%;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #8e8e8e;
  margin: 0px auto 0px auto;
`;
