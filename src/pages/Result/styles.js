import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
`;

export const BackgroundImage = styled.img`
  position: fixed;
  width: 100%;
  height: 100%;
`;

export const ContainerDatails = styled.div`
  position: fixed;
  width: 100%;
  flex-direction: column;

  align-items: center;
  text-align: center;

  flex-wrap: wrap;
`;

export const TitleResultado = styled.h3`
  left: -15%;
  flex-direction: column;
  font-size: 64px;
  color: white;
`;

export const Title = styled.h2`
  color: #4a00e0;
  font-size: 5vh;
`;
export const ResultTotal = styled.h2`
  color: #4a00e0;

  font-size: 9vh;
  font-weight: bold;
  left: 25%;
  top: 40%;
`;

export const ButtonDetails = styled.button`
  left: 25.5%;

  width: 40vh;
  height: 8%;

  background-color: #f12711;

  text-align: center;
  text-decoration: none;

  justify-content: center;
  align-items: center;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

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

export const ButtonTitle = styled.h2`
  font-weight: bold;
  margin: 10px;
  color: #fff;
`;

export const ContainerLottie = styled.div`
  position: fixed;

  left: 10%;
  bottom: -4%;

  @media (max-width: 1000px) {
    visibility: hidden;
  }
`;
