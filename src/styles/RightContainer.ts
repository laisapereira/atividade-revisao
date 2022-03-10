import styled from 'styled-components'

export const Container = styled.div`
  background-color: whitesmoke;
  width: 80vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    font-weight: 400;
    padding-top: 6rem;
  }

  div {
    display: flex;
    gap: 3.5rem;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 60vh;
  }

  @media screen and (max-width: 800px) {
    width: auto;
    height: auto;

    div {
      gap: 2.5rem;
      height: 5vh;
      margin-top: 20rem;
      margin-left: -4rem;
      padding-bottom: 10rem;
    }
  }
`

export const LoteryNumbers = styled.h2`
  background-color: white;
  padding: 2.5rem;
  border-radius: 90%;
  text-align: center;

  @media screen and (max-width: 800px) {
    padding: 1.5rem;
  }
`
