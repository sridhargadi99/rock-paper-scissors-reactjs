import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #223a5f;
  min-height: 100vh;
  padding: 15px;
  @media screen and (min-width: 768px) {
    align-items: center;
    padding: 30px;
  }
`

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 5px solid #ffffff;
  padding: 10px 20px 10px 20px;
  border-radius: 8px;
  margin-bottom: 30px;
  @media screen and (min-width: 768px) {
    width: 800px;
  }
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 27px;
  font-weight: 700;
  color: #ffffff;
  max-width: 120px;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`
export const ScoreCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-radius: 8px;
  height: 120px;
  width: 120px;
  padding: 15px 10px 15px 10px;
  @media screen and (min-width: 768px) {
    height: 150px;
    width: 150px;
    padding: 20px 10px 20px 10px;
  }
`
export const Score = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 700;
  color: #223a5f;
  margin-top: 0px;
  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`
export const ScoreStyle = styled.p`
  font-size: 28px;
  font-family: 'Roboto';
  font-weight: 700;
  color: #223a5f;
  margin-top: 0px;
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`
export const ImageContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 0px;
  flex-wrap: wrap;
  align-self: center;
  @media screen and (min-width: 768px) {
    width: 500px;
  }
`

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 500px;
  }
`

export const ResultSubContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
`
export const Content = styled.p`
  font-family: 'Bree Serif';
  font-size: 22px;
  font-weight: 500;
  color: #ffffff;
  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`

export const Image = styled.img`
  height: 150px;
  width: 150px;
  @media screen and (min-width: 768px) {
    height: 200px;
    width: 200px;
  }
`
export const FinalResult = styled.p`
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: 700;
  color: #ffffff;
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`
export const PlayAgainButton = styled.button`
  height: 40px;
  width: 150px;
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
    width: 180px;
    font-size: 22px;
  }
`
