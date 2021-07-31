import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;

  justify-content: space-between;
  align-items: center;

  flex-wrap: wrap;
`;

export const DataTitle = styled.h3`
  font-size: 2.6vh;
  color: #fff;

  width: 200px;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 610px) {
    margin-top: 0px;
    font-size: 2vh;
  }
`;

export const DataInput = styled.input`
  width: 47vh;
  height: 4vh;

  border-width: 0;
  border-radius: 1vh;

  font-size: 2.3vh;

  text-align: center;

  ::placeholder {
    padding: 4vh;

    font-size: 2.3vh;
  }

  ::selection {
    padding: 4vh;

    font-size: 2.3vh;
  }

  :focus {
    outline: 0;
    padding: 0.5vh;

    box-shadow: 0px 4px 4px rgba(1, 0, 0, 0.25);
  }
  @media (max-width: 610px) {
    margin: -25px 0 5px 0;
  }
  @media (max-width: 375px) {
    width: 40vh;
    height: 4vh;
  }
`;
