import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;

  flex-wrap: wrap;
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
  font-size: 4vh;
  color: #fff;
  margin-top: 6.1vh;

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

export const Selection = styled.select`
  width: 47vh;
  height: 4vh;

  border-radius: 1vh;
`;

export const Option = styled.option`
  border-width: 0;
  width: 50vh;
  height: 4vh;

  border-width: 0;
  border-radius: 1vh;

  font-size: 2.3vh;
`;

export const LabelOptions = styled.h3`
  font-size: 2.6vh;
  color: #fff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const LottieContainer = styled.div`
  position: fixed;

  top: 18vh;
  right: 9.5vh;

  @media (max-width: 1000px) {
    right: 35vh;
  }
  @media (max-width: 700px) {
    right: 18vh;
  }
  @media (max-width: 480px) {
    right: 4vh;
  }
`;

export const Error = styled.p`
  color: red;

  margin: -2% 0;
`;

export const InputButton = styled.input.attrs({ type: 'submit' })`
  position: fixed;
  left: 73vh;

  width: 25vh;
  height: 7vh;

  text-align: center;

  background-color: #f12711;

  text-decoration: none;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  //Title
  font-weight: bold;
  font-size: 18px;
  color: #ffffff;

  &:hover {
    box-shadow: -8px 8px 0 0 #000;
    transform: translate(8px, -8px);
    -webkit-transform: translate(8px, -8px);
    -moz-transform: translate(8px, -8px);
    -ms-transform: translate(8px, -8px);
    -o-transform: translate(8px, -8px);

    border: solid 2px #000;
    border-radius: 8px;
    margin: 7px 0;
    cursor: pointer;
    transition: all ease-in 0.3s;
    -webkit-transition: all ease-in 0.3s;
    -moz-transition: all ease-in 0.3s;
    -ms-transition: all ease-in 0.3s;
    -o-transition: all ease-in 0.3s;
  }
`;
