import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const ContainerContent = styled.div`
  display: flex;

  justify-content: center;
`;

export const Title = styled.h1`
  position: absolute;
  font-size: 2.6vh;
  color: #fff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const ContainerInput = styled.form`
  padding-top: 21vh;
  position: absolute;

  left: 11vh;
`;

export const Data = styled.div`
  justify-content: space-between;
  width: 100%;
`;
export const Options = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Select = styled.select`
  width: 50vh;
  height: 4vh;

  border-radius: 1vh;
`;

export const Option = styled.option``;

export const LabelOptions = styled.h3`
  font-size: 2.6vh;
  color: #fff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
