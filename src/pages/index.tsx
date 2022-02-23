import LeftContainer from '@/components/LeftContainer'
import RightContainer from '@/components/RightContainer'

import { ContainerFlex } from '../styles/LeftContainer'

function Home() {
  return (
    <ContainerFlex>
      <LeftContainer />
      <RightContainer />
    </ContainerFlex>
  )
}

export default Home
