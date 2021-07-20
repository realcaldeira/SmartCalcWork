import React from 'react';
import Lottie from 'react-lottie';

import {
  Container,
  LottieContainer,
  BackgroundImage,
  BtnStartNow,
  TitleButton,
} from './styles';

import Background from '../../assets/background-home.jpg';
import animationData from '../../lottie/finance.json';

export default function Home() {
  function handleStartNow() {
    alert('Teste');
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Container>
      <BackgroundImage src={Background} />

      <LottieContainer>
        <Lottie options={defaultOptions} height={400} width={400} />
      </LottieContainer>

      <BtnStartNow onClick={handleStartNow}>
        <TitleButton>Start now</TitleButton>
      </BtnStartNow>
    </Container>
  );
}
