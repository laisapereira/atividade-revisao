import React from 'react'

import { Container, Inform, Title } from '../../styles/LeftContainer'
import Logo from '../Images/logo'
import SelectBox from '../SelectBox'

export default function LeftContainer() {
  return (
    <Container>
      <SelectBox />

      <Title>
        <Logo />
        <h3>MEGA-SENA</h3>
      </Title>

      <Inform>
        <p>CONCURSO</p>
        <h3>4531 – 07/04/2020</h3>
      </Inform>
    </Container>
  )
}
