import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {RiCloseLine} from 'react-icons/ri'

import {
  RulesContainer,
  RuleButton,
  PopupSubContainer,
  CloseButton,
  RulesImage,
} from './styledComponents'

const PopupContainer = () => (
  <RulesContainer>
    <Popup
      model
      trigger={<RuleButton type="button">Rules</RuleButton>}
      position="center center"
    >
      {close => (
        <PopupSubContainer>
          <CloseButton type="button" onClick={() => close()}>
            <RiCloseLine size="25" />
          </CloseButton>
          <RulesImage
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
          />
        </PopupSubContainer>
      )}
    </Popup>
  </RulesContainer>
)

export default PopupContainer
