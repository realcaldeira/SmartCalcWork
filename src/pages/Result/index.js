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

  function logica() {
    const dataInicio = state.data.dataInicio;
    const dataTermino = state.data.dataTermino;
    const ultimoSalario = state.data.ultimoSalario;
    const numeroDependentes = state.data.numeroDependentes;
    const motivoTermino = state.data.motivoTermino;
    const feriasVen = state.data.feriasVen;
    const avisoPrev = state.data.avisoPrev;

    console.log(dataInicio);
    console.log(dataTermino);
    console.log(ultimoSalario);
    console.log(numeroDependentes);
    console.log(motivoTermino);
    console.log(feriasVen);
    console.log(avisoPrev);

    const DateInitial = dataInicio.replace('-', '').replace('-', '');
    const DateFinal = dataTermino.replace('-', '').replace('-', '');

    const DateInitialFormatted = DateInitial.split('').splice(0, 6).join('');
    const DateFinalFormatted = DateFinal.split('').splice(0, 6).join('');

    const DateMothTotal = DateFinalFormatted - DateInitialFormatted;

    if (DateInitialFormatted === DateFinalFormatted) {
      if (DateMothTotal > 0) {
        const restDays = DateFinal - DateInitial;
        const restCash = +((ultimoSalario / 30) * restDays).toFixed(2);

        const restCashVacation =
          DateMothTotal(ultimoSalario + ultimoSalario) / 3;
        const restCashAndVocationFormatted =
          +restCashVacation
            .toString()
            .replace('.', '')
            .split('')
            .splice(0, 3)
            .join('') + restCash;

        console.log(DateMothTotal);
        console.log(restCashVacation);
        console.log(restCashAndVocationFormatted);
        console.log(restDays);
        console.log(restCash);
      } else {
        console.log('não é');
      }
    }
  }

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
        <TitleResultado>Resultado</TitleResultado>
        <Title>
          O valor líquido (depois dos descontos) da sua rescisão é de:
        </Title>
        <ResultTotal>R$ 592,76</ResultTotal>
        <ButtonDetails onClick={logica}>
          <ButtonTitle>Ver mais detalhes</ButtonTitle>
        </ButtonDetails>
        {/* <ButtonDetails to="/resultDatails">
          <ButtonTitle>Ver mais detalhes</ButtonTitle>
        </ButtonDetails> */}
        <ContainerLottie>
          <Lottie options={defaultOptions} height={300} width={300} />
        </ContainerLottie>
      </ContainerDatails>
    </Container>
  );
}
