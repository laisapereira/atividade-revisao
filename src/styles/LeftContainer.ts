import styled from 'styled-components'

export const Container = styled.div`
  width: 40vw;
  height: 100vh;
  padding-left: 6vw;
  padding-right: 10vw;
  gap: 20rem;

  select {
    background-color: white;
    font-weight: 500;
    width: 21rem;
    font-size: 1.4rem;
    border-radius: 0.5rem;
    padding: 0.8rem;
    margin-top: 2.5rem;
    filter: drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.05));
  }

  section {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 10rem;
    gap: 21rem;
  }

  @media screen and (max-width: 800px) {
    section {
      gap: 5rem;
    }
  }
`

export const Title = styled.div`
  margin-left: 7rem;

  h3 {
    color: white;
    padding-top: 1rem;
    font-size: 2rem;
  }

  @media screen and (max-width: 800px) {
    h3 {
      text-transform: uppercase;
      font-size: 1.8rem;
    }
  }
`

export const Inform = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  p {
    font-weight: 400;
    font-size: 1rem;
    padding-bottom: 0.6rem;
  }

  span {
    display: none;
  }

  @media screen and (max-width: 800px) {
    flex-direction: row;
    align-items: center;

    span {
      display: inline-flex;
    }

    h3 {
      display: none;
    }
  }
`

export const ContainerBackground = styled.div`
  margin-left: -2rem;
`

export const HeaderBackground = styled.div`
  display: none;

  @media screen and (max-width: 800px) {
    display: flex;
  }
`

export const DesktopBackground = styled.div`
  @media screen and (max-width: 800px) {
    display: none;
  }
`

export const ContainerLogo = styled.div`
  margin-left: -6rem;
  @media screen and (max-width: 800px) {
    svg,
    path {
      margin-top: -12rem;
    }
  }
`

export const ContainerFlex = styled.div`
  display: flex;

  #div2359 {
    color: ${props => props.theme.colors.megasena};
    background-color: whitesmoke;
    margin-left: -12vw;
    position: relative;

    svg,
    path {
      stroke: currentColor;
      position: absolute;
    }
  }

  @media screen and (max-width: 800px) {
    svg,
    path {
      stroke: currentColor;
      position: absolute;
      height: 55vh;
    }
  }

  #div5534 {
    color: ${props => props.theme.colors.quina};
    background-color: whitesmoke;
    margin-left: -12vw;
    position: relative;

    svg,
    path {
      stroke: currentColor;
      position: absolute;
    }
  }
  #div2200 {
    color: ${props => props.theme.colors.lotofacil};
    background-color: whitesmoke;
    margin-left: -12vw;
    position: relative;

    svg,
    path {
      stroke: currentColor;
      position: absolute;
    }
  }
  #div2167 {
    color: ${props => props.theme.colors.lotomania};
    background-color: whitesmoke;
    margin-left: -12vw;
    position: relative;

    svg,
    path {
      stroke: currentColor;
      position: absolute;
    }
  }
  #div1622 {
    color: ${props => props.theme.colors.timemania};
    background-color: whitesmoke;
    margin-left: -12vw;
    position: relative;

    svg,
    path {
      stroke: currentColor;
      position: absolute;
    }
  }
  #div440 {
    color: ${props => props.theme.colors.sorte};

    background-color: whitesmoke;
    margin-left: -12vw;
    position: relative;

    svg,
    path {
      stroke: currentColor;
      position: absolute;
    }
  }

  @media screen and (min-width: 300px) and (max-width: 600px) {
  }
`
