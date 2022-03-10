import React from 'react'

import {
  ContainerBackground,
  DesktopBackground,
  HeaderBackground,
} from '../../styles/LeftContainer'

export default function SideBar() {
  return (
    <ContainerBackground>
      <DesktopBackground>
        <svg
          width="current"
          height="current"
          viewBox="0 0 613 1080"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="svg_div"
        >
          <path
            d="M613 0C613 0 361.26 501.011 613 1080H0V0H613Z"
            fill="currentColor"
          />
        </svg>
      </DesktopBackground>

      <HeaderBackground>
        <svg
          width="524"
          height="570"
          viewBox="0 0 524 570"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M871.477 569.828C871.477 569.828 306.227 281.609 -347 569.828V-132L871.477 -132V569.828Z"
            fill="currentColor"
          />
        </svg>
      </HeaderBackground>
    </ContainerBackground>
  )
}
