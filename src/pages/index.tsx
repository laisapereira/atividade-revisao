import axios from 'axios'
import React, { useState } from 'react'

import Logo from '@/components/Images/logo'
import NumbersLoteria from '@/components/Numbers'
import SelectBox from '@/components/SelectBox'
import { IConcurso } from '@/types/concurso'

import * as L from '../styles/LeftContainer'
import * as R from '../styles/RightContainer'

function HomePage() {
  const [concurso, setConcurso] = useState<IConcurso[] | null>(null)

  const [concursoLoteria, setConcursoLoteria] = useState('2359')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  React.useEffect(() => {
    ;(async () => {
      try {
        const response = await axios.get<IConcurso[]>(
          'https://brainn-api-loterias.herokuapp.com/api/v1/loterias-concursos'
        )

        setConcurso(response.data)
        console.log(response.data)
      } catch (err) {
        setError(error)
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  const selectLoteria = ()


  return (
    <L.ContainerFlex>
      <L.Container>
        <SelectBox />

        <L.Title>
          <Logo />
          <h3>MEGA-SENA</h3>
        </L.Title>

        <L.Inform>
          <p>CONCURSO</p>
          <h3>4531 – 07/04/2020</h3>
        </L.Inform>
      </L.Container>

      <R.Container>
        <h2>oi</h2>
        <h3>
          Este sorteio é meramente ilustrativo e não possui nenhuma ligação com
          a CAIXA.
        </h3>
      </R.Container>
    </L.ContainerFlex>
  )
}

export default HomePage
