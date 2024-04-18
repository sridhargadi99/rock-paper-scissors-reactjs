import styled from 'styled-components'

export const ChoiceLink = styled.li`
  list-style-type: none;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 250px;
  }
`

export const ChoiceButton = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  background-color: transparent;
`

export const Image = styled.img`
  width: 80%;
`
