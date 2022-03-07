import Logo from '@/components/Images/logo'
import NumbersLoteria from '@/components/Numbers'
import SelectBox from '@/components/SelectBox'

import * as L from '../styles/LeftContainer'
import * as R from '../styles/RightContainer'

function Home() {
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

export default Home
