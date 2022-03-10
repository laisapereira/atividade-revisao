import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${props => props.theme.colors.megasena};
  width: 40vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
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
  }
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: white;
  font-size: 2rem;

  h3 {
    color: white;
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
`

export const ContainerFlex = styled.div`
  display: flex;

  #div5534 {
    background-color: ${props => props.theme.colors.quina};
  }
  #div2200 {
    background-color: ${props => props.theme.colors.lotofacil};
  }
  #div2167 {
    background-color: ${props => props.theme.colors.lotomania};
  }
  #div1622 {
    background-color: ${props => props.theme.colors.timemania};
  }
  #div440 {
    background-color: ${props => props.theme.colors.sorte};
  }
`
