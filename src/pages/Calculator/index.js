import React from 'react';
import Lottie from 'react-lottie';

import {
  Container,
  BackgroundImage,
  ContainerContent,
  Title,
  ContainerInput,
  Data,
  Options,
  LabelOptions,
  Select,
  Option,
  ContainerButton,
  TitleButton,
  LottieContainer,
} from './styles';

import calcAnimation from '../../lottie/calc.json';

import { Input } from '../../components/Input';
import { Radio } from '../../components/Radio';
import Background from '../../assets/background-calculator.jpg';

export default function Calculator() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: calcAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <Container>
      <BackgroundImage src={Background} />

      <ContainerContent>
        <Title>Cálculo de Rescisão do Contrato de Trabalho</Title>

        <ContainerInput>
          <Data>
            <Input title="Data início" type="date" value="DD-MM-YYYY" />
            <Input title="Data término" type="date" value="DD-MM-YYYY" />
            <Input title="Último salário" placeholder="0.00" />
            <Input title="Número de dependentes" placeholder="0" />

            <Options>
              <LabelOptions>Motivo do término de contrato</LabelOptions>
              <Select>
                <Option>Pedido de demissão</Option>
                <Option>Pedido de demissão</Option>
                <Option>Pedido de demissão</Option>
              </Select>
            </Options>
            <Radio title="Você possui férias vencidas?" />
            <Radio title="Você cumpriu aviso prévio?" />

            <ContainerButton>
              <TitleButton>Calcular</TitleButton>
            </ContainerButton>
          </Data>
          <LottieContainer>
            <Lottie options={defaultOptions} height={400} width={400} />
          </LottieContainer>
        </ContainerInput>
      </ContainerContent>
    </Container>
  );
}
