import styled from 'styled-components'

export const Container = styled.div`
  border-bottom-right-radius: 80%;
  border-top-right-radius: 70%;
  background-color: ${props => props.theme.colors.megasena};
  width: 40vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-left: 6vw;
  padding-right: 10vw;
  gap: 20rem;
`
