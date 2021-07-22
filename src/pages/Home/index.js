import React from 'react';
import Lottie from 'react-lottie';

import {
  Container,
  ContainerMobile,
  LottieContainer,
  BackgroundImage,
  Title,
  BtnStartNow,
  TitleButton,
} from './styles';

import Background from '../../assets/background-home.jpg';
import animationData from '../../lottie/finance.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export default function Home() {
  function handleStartNow() {
    alert('Teste');
  }

  return (
    <Container>
      <ContainerMobile>
        <BackgroundImage src={Background} />
        <Title>SmartCalcWork</Title>
        <LottieContainer>
          <Lottie options={defaultOptions} height={400} width={400} />
        </LottieContainer>

        <BtnStartNow to="/calculator">
          <TitleButton>Start now</TitleButton>
        </BtnStartNow>
      </ContainerMobile>
    </Container>
  );
}
