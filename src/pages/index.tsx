import axios from 'axios'
import React, { useState } from 'react'

import Logo from '@/components/Images/logo'
import NumbersLoteria from '@/components/Numbers'
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
        console.log(concursoLoteria)
      } catch (err) {
        setError(error)
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  const selectLoteria = (lottery: string) => {
    switch (lottery) {
      case '2359':
        return 'Mega-Sena'
      case '5534':
        return 'Quina'
      case '2200':
        return 'Lotofácil'
      case '2167':
        return 'Lotomania'
      case '1622':
        return 'Timemania'
      case '440':
        return 'Dia de Sorte'
      default:
        return 'Mega-Sena'
    }
  }

  return concurso ? (
    <L.ContainerFlex>
      <L.Container>
        <select
          name="select"
          defaultValue={concursoLoteria}
          onChange={e => setConcursoLoteria(e.target.value)}
        >
          <option value="2359">MEGA-SENA</option>
          <option value="5534">QUINA</option>
          <option value="2200">LOTOFÁCIL</option>
          <option value="2167">LOTOMANIA</option>
          <option value="1622">TIMEMANIA</option>
          <option value="440">DIA DA SORTE</option>
        </select>

        <L.Title>
          <Logo />
          <h3>{`${selectLoteria(concursoLoteria)}`}</h3>
        </L.Title>

        <L.Inform>
          <p>CONCURSO</p>
          <h3>4531 – 07/04/2020</h3>
        </L.Inform>
      </L.Container>

      <R.Container>
        <NumbersLoteria loteria={concursoLoteria} />
        <h3>
          Este sorteio é meramente ilustrativo e não possui nenhuma ligação com
          a CAIXA.
        </h3>
      </R.Container>
    </L.ContainerFlex>
  ) : (
    <h1>oioi</h1>
  )
}

export default HomePage
