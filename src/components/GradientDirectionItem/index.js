// Write your code here
import {GradientListItem, DirectionValueBtn} from './styledComponents'

const GradientDirectionItem = props => {
  const {direction, activeDirection, updateDirection} = props
  const {displayText, directionId} = direction
  const onClickGradientItemBtn = () => {
    updateDirection(directionId)
  }
  const active = activeDirection === directionId
  return (
    <GradientListItem>
      <DirectionValueBtn active={active} onClick={onClickGradientItemBtn}>
        {displayText}
      </DirectionValueBtn>
    </GradientListItem>
  )
}

export default GradientDirectionItem
