import React from 'react';

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
} from './styles';

import { Input } from '../../components/Input';
import { Radio } from '../../components/Radio';

import Background from '../../assets/background-calculator.jpg';

export default function Calculator() {
  return (
    <Container>
      <BackgroundImage src={Background} />

      <ContainerContent>
        <Title>Cálculo de Rescisão do Contrato de Trabalho</Title>

        <ContainerInput>
          <Data>
            <Input title="Data início" placeholder="DD/MM/AAAA" />
            <Input title="Data término" placeholder="DD/MM/AAAA" />
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
            <Radio />
            <Radio />
          </Data>
        </ContainerInput>
      </ContainerContent>
    </Container>
  );
}
