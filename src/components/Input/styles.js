import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;

  justify-content: space-between;
  align-items: center;
`;

export const DataTitle = styled.h3`
  font-size: 2.6vh;
  color: #fff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const DataInput = styled.input`
  width: 50vh;
  height: 4vh;

  border-width: 0;
  border-radius: 1vh;

  font-size: 2.3vh;

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
`;
