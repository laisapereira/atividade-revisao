import React from 'react'

import { Container } from '@/styles/RightContainer'

import NumbersLoteria from '../Numbers'

export default function RightContainer() {
  return (
    <Container>
      <NumbersLoteria />
      <h3>
        Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a
        CAIXA.
      </h3>
    </Container>
  )
}
