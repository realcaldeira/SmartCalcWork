import React, { useEffect } from 'react';

import {
  Container,
  BackgroundImage,
  TitleResult,
  ContainerDatails,
  Box,
  Title,
  TitleDatails,
} from './styles';

import Background from '../../assets/background-result.jpg';

import { useStateMachine } from 'little-state-machine';
import { updateDatails } from '../../routes';

export default function ResultDatails() {
  const { state } = useStateMachine(updateDatails);

  function details() {
    const ref = state.dataResults.ref;
    const saldoDeSalario = state.dataResults.saldoDeSalario;

    console.log(ref);
    console.log(saldoDeSalario);
  }

  useEffect(() => {
    details();
  }, []);
  return (
    <Container>
      <BackgroundImage src={Background} />

      <TitleResult>Resultado</TitleResult>

      <ContainerDatails>
        <Box>
          <Title>EVENTO</Title>
          <TitleDatails>Saldo de Salário</TitleDatails>
          <TitleDatails>Aviso Prévio Indenizado</TitleDatails>
          <TitleDatails>13º Salário Proporcional</TitleDatails>
          <TitleDatails>13º Salário Aviso Prévio</TitleDatails>
          <TitleDatails>Férias Vencidas</TitleDatails>
          <TitleDatails>Férias Proporcionais</TitleDatails>
          <TitleDatails>Férias sobre aviso prévio</TitleDatails>
          <TitleDatails>1/3 Férias</TitleDatails>
          <TitleDatails>INSS Salário*</TitleDatails>
          <TitleDatails>IRRF 13º Salário**</TitleDatails>
          <TitleDatails>INSS 13º Salário*</TitleDatails>
          <TitleDatails>Total</TitleDatails>
        </Box>

        <Box>
          <Title>REF.</Title>
          <TitleDatails>6</TitleDatails>
          <TitleDatails>0</TitleDatails>
          <TitleDatails> 1/12</TitleDatails>
          <TitleDatails> 0/12</TitleDatails>
          <TitleDatails>0</TitleDatails>
          <TitleDatails> 1/12</TitleDatails>
          <TitleDatails> 0/12</TitleDatails>
          <TitleDatails>-</TitleDatails>
          <TitleDatails>7.5%</TitleDatails>
          <TitleDatails>0%</TitleDatails>
          <TitleDatails>7.5%</TitleDatails>
          <TitleDatails>-</TitleDatails>
        </Box>

        <Box>
          <Title>PROVENTO</Title>

          <TitleDatails> R$ 200,00</TitleDatails>
          <TitleDatails>-</TitleDatails>
          <TitleDatails>R$ 83,33</TitleDatails>
          <TitleDatails> R$ 0,00</TitleDatails>
          <TitleDatails>R$ 0,00</TitleDatails>
          <TitleDatails> R$ 83,33</TitleDatails>
          <TitleDatails> R$ 0,00</TitleDatails>
          <TitleDatails>R$ 27,78</TitleDatails>
          <TitleDatails>-</TitleDatails>
          <TitleDatails>-</TitleDatails>
          <TitleDatails>-</TitleDatails>
          <TitleDatails>R$ 394,44</TitleDatails>
        </Box>

        <Box>
          <Title>DESCONTO</Title>

          <TitleDatails> -</TitleDatails>
          <TitleDatails>R$ 1.000,00</TitleDatails>
          <TitleDatails>-</TitleDatails>
          <TitleDatails>-</TitleDatails>
          <TitleDatails>-</TitleDatails>
          <TitleDatails> -</TitleDatails>
          <TitleDatails>-</TitleDatails>
          <TitleDatails>-</TitleDatails>
          <TitleDatails>R$ 15,00</TitleDatails>
          <TitleDatails>R$ 0,00</TitleDatails>
          <TitleDatails> R$ 6,24</TitleDatails>
          <TitleDatails>R$ 1.021,24</TitleDatails>
        </Box>
      </ContainerDatails>
    </Container>
  );
}
