import React from 'react';

import { Container, DataTitle, DataInput } from './styles';

export function Input({ title, placeholder, type, ...rest }) {
  return (
    <Container {...rest}>
      <DataTitle>{title}</DataTitle>
      <DataInput placeholder={placeholder} type={type} {...rest} />
    </Container>
  );
}
