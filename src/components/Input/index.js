import React from 'react';

import { Container, DataTitle, DataInput } from './styles';

export function Input({ title, placeholder }) {
  return (
    <Container>
      <DataTitle>{title}</DataTitle>
      <DataInput placeholder={placeholder} />
    </Container>
  );
}
