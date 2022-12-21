import styled from 'styled-components';

export const PaymentInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  > input {
    width: 100%;
    height: 50px;
    border-radius: 5px;
    margin: 5px;
    border: 1px solid #8e8e8e;
  }
  > input::placeholder {
    font-size: 16px;
    padding-left: 10px;
  }
`;
