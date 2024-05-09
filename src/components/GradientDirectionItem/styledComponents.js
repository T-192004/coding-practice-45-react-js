// Style your elements here
import styled from 'styled-components'

export const GradientListItem = styled.li`
  margin: 8px;
`
export const DirectionValueBtn = styled.button`
  width: 120px;
  height: 50px;
  color: #334155;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  padding: 8px;
  opacity: ${props => (props.active ? '1' : '0.5')};
  background-color: ${props => (props.active ? '#ededed' : '#ffffff79')};
  border: none;
  border-radius: 8px;
`
