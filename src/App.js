import {Component} from 'react'

import ChoiceContainer from './components/ChoiceContainer'

import PopupContainer from './components/PopupContainer'

import './App.css'
import {
  MainContainer,
  ScoreContainer,
  Heading,
  ScoreCardContainer,
  Score,
  ScoreStyle,
  ImageContainer,
  ResultContainer,
  ResultSubContainer,
  Container,
  Content,
  Image,
  FinalResult,
  PlayAgainButton,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

const InitialStatus = {
  score: '0',
  finalResult: '',
  choice: false,
  opponentImageId: '',
  ownImageUrl: '',
  opponentImageUrl: '',
}

class App extends Component {
  state = InitialStatus

  componentDidMount() {
    this.getRandomImageUrl()
  }

  addOwnImage = (id, imageUrl) => {
    const {opponentImageId} = this.state
    this.setState({ownImageUrl: imageUrl, choice: true})
    const updatedResult = this.getChoiceResult(id, opponentImageId)
    this.setState({
      finalResult: updatedResult,
    })
    this.getResult(updatedResult)
  }

  getRandomImageUrl = () => {
    const getNumber = Math.floor(Math.random() * choicesList.length)
    this.setState({
      opponentImageId: choicesList[getNumber].id,
      opponentImageUrl: choicesList[getNumber].imageUrl,
    })
  }

  getChoiceResult = (id1, id2) => {
    let result
    if (id1 === id2) {
      result = 'IT IS DRAW'
    } else if (id1 === 'PAPER' && id2 === 'ROCK') {
      result = 'YOU WON'
    } else if (id1 === 'SCISSORS' && id2 === 'ROCK') {
      result = 'YOU LOSE'
    } else if (id1 === 'ROCK' && id2 === 'PAPER') {
      result = 'YOU LOSE'
    } else if (id1 === 'SCISSORS' && id2 === 'PAPER') {
      result = 'YOU WON'
    } else if (id1 === 'ROCK' && id2 === 'SCISSORS') {
      result = 'YOU WON'
    } else if (id1 === 'PAPER' && id2 === 'SCISSORS') {
      result = 'YOU LOSE'
    }

    return result
  }

  getResult = result => {
    const {score} = this.state
    if (result === 'YOU WON') {
      this.setState({score: parseInt(score) + 1})
    } else if (result === 'YOU LOSE') {
      this.setState({score: parseInt(score) - 1})
    } else {
      this.setState({score})
    }
  }

  playAgainButton = () => {
    this.setState(prevState => ({choice: !prevState.choice}))
    this.getRandomImageUrl()
  }

  renderScoreContainer = () => {
    const {score} = this.state
    return (
      <ScoreContainer>
        <Heading>ROCK PAPER SCISSORS</Heading>
        <ScoreCardContainer>
          <Score>Score</Score>
          <ScoreStyle>{score}</ScoreStyle>
        </ScoreCardContainer>
      </ScoreContainer>
    )
  }

  renderPlayingView = () => (
    <>
      <ImageContainer>
        {choicesList.map(eachChoice => (
          <ChoiceContainer
            eachChoice={eachChoice}
            key={eachChoice.id}
            addOwnImage={this.addOwnImage}
          />
        ))}
      </ImageContainer>
    </>
  )

  renderGameResultsView = () => {
    const {ownImageUrl, opponentImageUrl, finalResult} = this.state

    return (
      <>
        <ResultContainer>
          <ResultSubContainer>
            <Container>
              <Content>YOU</Content>
              <Image src={ownImageUrl} alt="your choice" />
            </Container>
            <Container>
              <Content>OPPONENT</Content>
              <Image src={opponentImageUrl} alt="opponent choice" />
            </Container>
          </ResultSubContainer>
          <FinalResult>{finalResult}</FinalResult>
          <PlayAgainButton type="button" onClick={this.playAgainButton}>
            PLAY AGAIN
          </PlayAgainButton>
        </ResultContainer>
      </>
    )
  }

  render() {
    const {choice} = this.state
    return (
      <MainContainer>
        {this.renderScoreContainer()}
        {!choice ? this.renderPlayingView() : this.renderGameResultsView()}
        <PopupContainer />
      </MainContainer>
    )
  }
}

export default App
