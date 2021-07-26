import React from 'react';

import Lottie from 'react-lottie';

import {
  Container,
  BackgroundImage,
  ContainerDatails,
  TitleResultado,
  Title,
  ResultTotal,
  ButtonDetails,
  ButtonTitle,
  ContainerLottie,
} from './styles';

import resultAnimation from '../../lottie/result.json';

import Background from '../../assets/background-result.jpg';

import { useStateMachine } from 'little-state-machine';
import { updateData } from '../../routes';

export default function Result() {
  const { state } = useStateMachine(updateData);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: resultAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <Container>
      <BackgroundImage src={Background} />

      <ContainerDatails>
        <TitleResultado>{state.data.dataInicio}</TitleResultado>
        <Title>
          O valor líquido (depois dos descontos) da sua rescisão é de:
        </Title>
        <ResultTotal>R$ 592,76</ResultTotal>
        <ButtonDetails to="/resultDatails">
          <ButtonTitle>Ver mais detalhes</ButtonTitle>
        </ButtonDetails>
        <ContainerLottie>
          <Lottie options={defaultOptions} height={300} width={300} />
        </ContainerLottie>
      </ContainerDatails>
    </Container>
  );
}
