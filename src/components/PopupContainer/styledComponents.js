import styled from 'styled-components'

export const RulesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (min-width: 768px) {
    align-self: flex-end;
  }
`

export const PopupSubContainer = styled.div`
  height: 300px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  padding: 20px;
  @media screen and (min-width: 768px) {
    height: 600px;
    width: 600px;
  }
`

export const CloseButton = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  align-self: flex-end;
  margin-bottom: 20px;
`
export const RulesImage = styled.img`
  width: 100%;
  height: 100%;
`

export const RuleButton = styled.button`
  align-self: center;
  height: 40px;
  width: 80px;
  text-align: center;
  font-family: 'Bree Serif';
  font-size: 18px;
  font-weight: 500;
  color: #223a5f;
  background-color: #ffffff;
  border-radius: 8px;
  cursor: pointer;
  outline: none;
  border: none;
  @media screen and (min-width: 768px) {
    height: 50px;
    width: 100px;
  }
`
