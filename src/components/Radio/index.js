import React from 'react';

import { OptionsRadio, Title, FériasVencidas, Radios } from './styles';

export function Radio({ title }) {
  return (
    <OptionsRadio>
      <Title>{title}</Title>
      <FériasVencidas>
        <Radios type="radio" value="option1" checked={true} />
        <Title>NÃO</Title>
        <Radios type="radio" value="option2" />
        <Title>SIM</Title>
      </FériasVencidas>
    </OptionsRadio>
  );
}
