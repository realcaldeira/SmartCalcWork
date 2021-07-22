import React from 'react';
import Lottie from 'react-lottie';

import { Container, LottieContainer } from './styles';

import animationError from '../../lottie/error.json';

export default function Error() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationError,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Container>
      <LottieContainer>
        <Lottie options={defaultOptions} height={200} width={500} />
      </LottieContainer>
    </Container>
  );
}
