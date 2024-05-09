import {Component} from 'react'
import {
  AppContainer,
  Heading,
  Paragraph,
  GraidentList,
  ColorContainer,
  ColorInputContainer,
  ColorInputBox,
  GenerateButton,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    activeDirection: gradientDirectionsList[0].directionId,
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    bgGradients: {
      direction: '',
      firstColor: '',
      secondColor: '',
    },
  }

  componentDidMount = () => {
    this.generateNewBg()
  }

  updateDirection = directionId => {
    this.setState({activeDirection: directionId})
  }

  updateFirstColor = event => {
    this.setState({firstColor: event.target.value})
  }

  updateSecondColor = event => {
    this.setState({secondColor: event.target.value})
  }

  generateNewBg = () => {
    const {activeDirection, firstColor, secondColor} = this.state
    this.setState({
      bgGradients: {
        direction: activeDirection,
        firstColor,
        secondColor,
      },
    })
  }

  render() {
    const {activeDirection, firstColor, secondColor, bgGradients} = this.state
    return (
      <AppContainer bgGradients={bgGradients} data-testid="gradientGenerator">
        <Heading>Generate a CSS Color Gradient</Heading>
        <Paragraph>Choose Direction</Paragraph>
        <GraidentList>
          {gradientDirectionsList.map(direction => (
            <GradientDirectionItem
              direction={direction}
              activeDirection={activeDirection}
              key={direction.directionId}
              updateDirection={this.updateDirection}
            />
          ))}
        </GraidentList>
        <Paragraph>Pick the Colors</Paragraph>
        <ColorContainer>
          <ColorInputContainer>
            <Paragraph>{firstColor}</Paragraph>
            <ColorInputBox
              type="color"
              value={firstColor}
              onChange={this.updateFirstColor}
            />
          </ColorInputContainer>
          <ColorInputContainer>
            <Paragraph>{secondColor}</Paragraph>
            <ColorInputBox
              type="color"
              value={secondColor}
              onChange={this.updateSecondColor}
            />
          </ColorInputContainer>
        </ColorContainer>
        <GenerateButton
          data-testid="gradientGenerator"
          onClick={this.generateNewBg}
        >
          Generate
        </GenerateButton>
      </AppContainer>
    )
  }
}

export default GradientGenerator
