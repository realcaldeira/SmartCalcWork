import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
`;
export const LottieContainer = styled.div`
  position: absolute;

  top: 18.65136298421808vh;
  right: 9.469153515064562vh;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const BtnStartNow = styled.button`
  position: fixed;

  width: 20%;

  bottom: 21px;
  right: 125px;
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
`;

export const TitleButton = styled.h1`
  color: white;
  font-size: 3vh;
`;

export const Arrow = styled.img`
  width: 55px;
`;
