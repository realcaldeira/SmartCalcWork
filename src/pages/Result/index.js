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

    const restDays = DateFinal - DateInitial;

    if (DateInitialFormatted === DateFinalFormatted) {
      // Valor dos dias trabalhados
      const restCash = +((ultimoSalario / 30) * restDays).toFixed(2);
      console.log(restCash);
    } else {
      if (DateMothTotal > 0) {
        // Trabalhou mais de 1 mês
        const restCashVacation = (ultimoSalario + ultimoSalario) / 3;
        const restCashAndVocationFormatted =
          (+restCashVacation
            .toString()
            .replace('.', '')
            .split('')
            .splice(0, 3)
            .join('') /
            12) *
          DateMothTotal;

        const decimoTerceiroProporcional = +(
          (ultimoSalario / 12) *
          DateMothTotal
        ).toFixed(2);
        const fgts = +(
          (8 % (DateMothTotal * Number(ultimoSalario))) *
          100
        ).toFixed(2);

        const multaFgts = 40 % fgts;

        console.log('FGTS', fgts);
        console.log('Multa FGTS', multaFgts);

        console.log(restCashVacation);
        console.log('13º Salário Proporcional', decimoTerceiroProporcional);
        console.log(
          'Valor correto do décimo terceiro',
          restCashAndVocationFormatted,
        );
      } else {
        console.log('else');
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
