import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;

  @media (max-width: 700px) {
    align-items: center;
    justify-items: center;
  }
`;
export const ContainerMobile = styled.div`
  @media (max-width: 1000px) {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #6a16e1;
  }
`;

export const BackgroundImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media (max-width: 1000px) {
    width: 0;
    height: 0;
    background-color: #6a16e1;
  }
`;

export const Title = styled.h1`
  position: absolute;

  color: #fff;
  font-family: 'Roboto Condensed', sans-serif;

  top: 10vh;
  right: 25vh;
  @media (max-width: 1000px) {
    right: 50vh;
  }
  @media (max-width: 700px) {
    right: 35vh;
  }
  @media (max-width: 480px) {
    right: 20vh;
  }
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

export const BtnStartNow = styled.button`
  position: fixed;

  width: 20%;

  bottom: 3vh;
  right: 18vh;
  background-color: #f12711;

  border-radius: 10px;

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
  @media (max-width: 1000px) {
    right: 43vh;
    width: 40%;
  }
  @media (max-width: 700px) {
    right: 30vh;
    width: 40%;
  }
  @media (max-width: 480px) {
    right: 20vh;
    width: 40%;
  }
`;

export const TitleButton = styled.h1`
  color: white;
  font-size: 3vh;

  font-family: 'Roboto Condensed', sans-serif;
`;

export const Arrow = styled.img`
  width: 55px;
`;
