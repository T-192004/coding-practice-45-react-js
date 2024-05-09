// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  background-image: linear-gradient(
    to ${props => props.bgGradients.direction},
    ${props => props.bgGradients.firstColor},
    ${props => props.bgGradients.secondColor}
  );
  background-size: cover;
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: 600;
`
export const Paragraph = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 400;
`
export const GraidentList = styled.ul`
  list-style: none;
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin: 10px 0px 10px 0px;
`
export const ColorContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  margin: 10px;
  padding: 5px;
`
export const ColorInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 140px;
  margin: 5px;
`
export const ColorInputBox = styled.input`
  border: solid 1px #1e293b;
  width: 100%;
  height: 100%;
  margin: 5px;
  opacity: 0.8;
`
export const GenerateButton = styled.button`
  width: 150px;
  height: 60px;
  padding: 10px;
  margin: 10px;
  color: #1e293b;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 20px;
  background-color: #00c9b7;
  border: none;
  border-radius: 8px;
`
