import axios from 'axios'
import React, { useState } from 'react'

import { LoteryNumbers } from '@/styles/RightContainer'
import { INumbers } from '@/types/concurso'

export interface IPropsLoteria {
  loteria: string
}

export default function NumbersLoteria({ loteria }: IPropsLoteria) {
  const [Dadosloteria, setDadosLoteria] = useState<INumbers>()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  React.useEffect(() => {
    ;(async () => {
      try {
        const response = await axios.get<INumbers>(
          `https://brainn-api-loterias.herokuapp.com/api/v1/concursos/${loteria}`
        )

        setDadosLoteria(response.data)
        console.log(response.data)
      } catch (err) {
        setError(error)
      } finally {
        setLoading(false)
      }
    })()
  }, [loteria])

  return Dadosloteria ? (
    <div>
      {Dadosloteria.numeros.map(numero => (
        <LoteryNumbers>{numero}</LoteryNumbers>
      ))}
    </div>
  ) : (
    <div>
      <h1>Teste...</h1>
    </div>
  )
}
