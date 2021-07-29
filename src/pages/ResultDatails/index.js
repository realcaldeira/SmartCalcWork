import React from 'react';

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

  const ref = state.dataResults.ref;
  const saldoDeSalario = state.dataResults.saldoDeSalario;
  const saldoDeSalarioProvento = state.dataResults.saldoDeSalarioProvento;
  const restCash = state.dataResults.restCash;
  const inssSalario = state.dataResults.inssSalario;
  const inssDecimo = state.dataResults.inssDecimo;

  const decimoTerceiroProporcional =
    state.dataResults.decimoTerceiroProporcional;
  const soma = state.dataResults.soma;
  const sub = state.dataResults.sub;
  const total = state.dataResults.total;

  console.log(saldoDeSalario);
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
          <TitleDatails>{ref}</TitleDatails>
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

          <TitleDatails> R$ {restCash}</TitleDatails>
          <TitleDatails>
            R$ {[saldoDeSalarioProvento ? saldoDeSalarioProvento : '-']}
          </TitleDatails>
          <TitleDatails>R$ {decimoTerceiroProporcional}</TitleDatails>
          <TitleDatails> R$ 0,00</TitleDatails>
          <TitleDatails>R$ 0,00</TitleDatails>
          <TitleDatails> R$ {decimoTerceiroProporcional}</TitleDatails>
          <TitleDatails> R$ 0,00</TitleDatails>
          <TitleDatails>R$ 27,78</TitleDatails>
          <TitleDatails>-</TitleDatails>
          <TitleDatails>-</TitleDatails>
          <TitleDatails>-</TitleDatails>
          <TitleDatails>R$ {soma}</TitleDatails>
        </Box>

        <Box>
          <Title>DESCONTO</Title>

          <TitleDatails> -</TitleDatails>
          <TitleDatails>
            R$ {[saldoDeSalario ? saldoDeSalario : '-']}
          </TitleDatails>
          <TitleDatails>-</TitleDatails>
          <TitleDatails>-</TitleDatails>
          <TitleDatails>-</TitleDatails>
          <TitleDatails> -</TitleDatails>
          <TitleDatails>-</TitleDatails>
          <TitleDatails>-</TitleDatails>
          <TitleDatails>R$ {inssSalario}</TitleDatails>
          <TitleDatails>R$ 0,00</TitleDatails>
          <TitleDatails> R$ {inssDecimo}</TitleDatails>
          <TitleDatails>R$ {sub}</TitleDatails>
        </Box>
      </ContainerDatails>
    </Container>
  );
}
