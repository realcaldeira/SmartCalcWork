import React from 'react';

import { Container, BackgroundImage, ContainerInput, Data } from './styles';

import { Input } from '../../components/Input';

import Background from '../../assets/background-calculator.jpg';

export default function Calculator() {
  return (
    <Container>
      <BackgroundImage src={Background} />

      <ContainerInput>
        <Data>
          <Input title="Data início" placeholder="DD/MM/AAAA" />
          <Input title="Data término" placeholder="DD/MM/AAAA" />
          <Input title="Último salário" placeholder="0.00" />
          <Input title="Número de dependentes" placeholder="0" />
        </Data>
      </ContainerInput>
    </Container>
  );
}
