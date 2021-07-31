import React from 'react';

import { Container, DataTitle, DataInput } from './styles';

export function Input({ title, placeholder, type, ...rest }) {
  return (
    <Container {...rest}>
      <div>
        <DataTitle>{title}</DataTitle>
      </div>
      <div>
        <DataInput placeholder={placeholder} type={type} {...rest} />
      </div>
    </Container>
  );
}
