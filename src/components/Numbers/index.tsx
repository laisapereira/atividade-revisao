import axios from 'axios'
import React, { useState } from 'react'

import { Number } from '@/styles/RightContainer'
import { ILoteria1 } from '@/types/concurso'

export default function Numbers() {
  const [loteria, setLoteria] = useState<ILoteria1[] | undefined>()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  React.useEffect(() => {
    console.log('oi')
    ;(async () => {
      try {
        const response = await axios.get<ILoteria1[]>(
          'https://brainn-api-loterias.herokuapp.com/api/v1/loterias-concursos'
        )

        setLoteria(response.data)
      } catch (err) {
        setError(error)
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  console.log(loteria)

  return loteria ? (
    <div>
      <p>oioi</p>
      <Number>oi</Number>
    </div>
  ) : (
    <div>
      <h1>oi</h1>
    </div>
  )
}
