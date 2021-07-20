import React from 'react';

import { OptionsRadio, Title, FériasVencidas, Radios } from './styles';

export function Radio() {
  return (
    <OptionsRadio>
      <Title>Você possui férias vencidas?</Title>
      <FériasVencidas>
        <Radios type="radio" value="option1" checked={true} />
        <Title>NÃO</Title>
        <Radios type="radio" value="option2" />
        <Title>SIM</Title>
      </FériasVencidas>
    </OptionsRadio>
  );
}
