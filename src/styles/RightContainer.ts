import styled from 'styled-components'

export const Container = styled.div`
  background-color: whitesmoke;
  width: 60vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    font-weight: 400;
    padding-top: 3rem;
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
`

export const LoteryNumbers = styled.h2`
  background-color: white;
  padding: 2.5rem;
  border-radius: 90%;

  text-align: center;
`
