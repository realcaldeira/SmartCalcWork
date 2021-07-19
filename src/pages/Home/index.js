import React from 'react';

import { Container, BackgroundImage, BtnStartNow, TitleButton } from './styles';

import Background from '../../assets/background-home.jpg';
import arrowRight from '../../assets/arrow-right.png';

export default function Home() {
  function handleStartNow() {
    alert('Teste');
  }

  return (
    <Container>
      <BackgroundImage src={Background} />

      <BtnStartNow onClick={handleStartNow}>
        <TitleButton>Start now</TitleButton>
      </BtnStartNow>
    </Container>
  );
}
