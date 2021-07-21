import React from 'react';

import { Container, DataTitle, DataInput } from './styles';

export function Input({ title, placeholder, type }) {
  return (
    <Container>
      <DataTitle>{title}</DataTitle>
      <DataInput placeholder={placeholder} type={type} />
    </Container>
  );
}
