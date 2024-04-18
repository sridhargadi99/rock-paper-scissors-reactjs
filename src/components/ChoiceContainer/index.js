import {ChoiceLink, ChoiceButton, Image} from './styledComponents'

const ChoiceContainer = props => {
  const {eachChoice, addOwnImage} = props
  const {id, imageUrl} = eachChoice
  const getIdLowerCase = id.toLowerCase()
  const clickOwnImage = () => addOwnImage(id, imageUrl)

  return (
    <ChoiceLink>
      <ChoiceButton
        data-testid={`${getIdLowerCase}Button`}
        onClick={clickOwnImage}
      >
        <Image src={imageUrl} alt={id} />
      </ChoiceButton>
    </ChoiceLink>
  )
}

export default ChoiceContainer
