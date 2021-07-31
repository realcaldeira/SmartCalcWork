import styled from 'styled-components';

export const OptionsRadio = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;

  flex-wrap: wrap;
`;

export const Title = styled.h1`
  font-size: 2.6vh;
  color: #fff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 610px) {
    font-size: 2vh;
  }
`;

export const FériasVencidas = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10vh;

  padding-right: 12vh;
  @media (max-width: 610px) {
    margin-top: -5px;
  }
`;
export const Radios = styled.input`
  margin-right: 2.1vh;
  margin-left: 5.1vh;

  height: 5vh;
  width: 3vh;

  :focus {
    outline: 0;
  }
  @media (max-width: 610px) {
    margin-top: -5px;
  }
`;
