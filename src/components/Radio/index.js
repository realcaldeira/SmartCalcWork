import React from 'react';

import { OptionsRadio, Title, FériasVencidas, Radios } from './styles';

export function Radio({ title, ...rest }) {
  return (
    <OptionsRadio {...rest}>
      <Title>{title}</Title>
      <FériasVencidas {...rest}>
        <Radios name="Dev" type="radio" value="No" title="No" {...rest} />
        <Title>NÃO</Title>
        <Radios name="Dev" type="radio" value="Yes" title="No" {...rest} />
        <Title>SIM</Title>
      </FériasVencidas>
    </OptionsRadio>
  );
}
