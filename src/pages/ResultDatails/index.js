import React from 'react';

import {
  Container,
  BackgroundImage,
  ContainerDatails,
  TitleResultado,
  ContainerTitles,
  Title,
} from './styles';

import Background from '../../assets/background-result.jpg';

export default function ResultDatails() {
  return (
    <Container>
      <BackgroundImage src={Background} />

      <ContainerDatails>
        <TitleResultado>Resultado</TitleResultado>

        <ContainerTitles>
          <Title>EVENTO</Title>
          <Title>REF.</Title>
          <Title>PROVENTO</Title>
          <Title>DESCONTO</Title>
        </ContainerTitles>
      </ContainerDatails>
    </Container>
  );
}
