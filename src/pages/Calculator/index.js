import React from 'react';
import Lottie from 'react-lottie';

import { useForm } from 'react-hook-form';

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
  Error,
} from './styles';

import calcAnimation from '../../lottie/calc.json';

import { Input } from '../../components/Input';
import { Radio } from '../../components/Radio';
import Background from '../../assets/background-calculator.jpg';

export default function Calculator() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    alert(JSON.stringify(data));
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: calcAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const Select = React.forwardRef(({ onChange, onBlur, name }, ref) => (
    <>
      <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
        <option value="20">Pedido de demissão</option>
        <option value="300">Pedido de demissão</option>
        <option value="240">Pedido de demissão</option>
      </select>
    </>
  ));
  return (
    <Container>
      <BackgroundImage src={Background} />

      <ContainerContent>
        <Title>Cálculo de Rescisão do Contrato de Trabalho</Title>

        <ContainerInput onSubmit={handleSubmit(onSubmit)}>
          <Data>
            <Input
              title="Data início"
              type="date"
              {...register('dataInicio')}
            />
            {errors.dataInicio && <Error>Você precisa preencher a data</Error>}
            <Input
              title="Data término"
              type="date"
              {...register('dataTermino')}
            />
            {errors.dataTermino && <Error>Você precisa preencher a data</Error>}
            <Input
              title="Último salário"
              placeholder="0.00"
              type="number"
              {...register('ultimoSalario', { required: true })}
            />
            {errors.ultimoSalario && (
              <Error>Você precisa digitar seu último salário</Error>
            )}
            <Input
              title="Número de dependentes"
              placeholder="0"
              type="number"
              {...register('numeroDependentes', { required: true })}
            />
            {errors.numeroDependentes && (
              <Error>Você precisa digitar seu número de dependentes</Error>
            )}

            <Options>
              <LabelOptions>Motivo do término de contrato</LabelOptions>
              <Select {...register('terminoContrato')} />
            </Options>
            <Radio
              title="Você possui férias vencidas?"
              {...register('feriasVen', { required: true })}
            />
            {errors.feriasVen && <Error>Você selecionar uma opção.</Error>}
            <Radio
              title="Você cumpriu aviso prévio?"
              {...register('avisoPrev', { required: true })}
            />
            {errors.avisoPrev && <Error>Você selecionar uma opção.</Error>}

            <Input type="submit"></Input>

            <ContainerButton to="/result">
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
