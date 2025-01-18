import styled from 'styled-components'
import { Styles } from 'styled-components/dist/types'

interface Props {
  style?: Styles<object>
}

export const Button = styled.button<Props>`
  font-family: Pretendard, sans-serif;
  width: fit-content;
  min-width: 120px;
  height: 50px;
  background-color: #10954d;
  color: #ffffff;
  padding: 0 10px;
  font-size: 16px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 8px;
  z-index: 10;

  ${({ style }) => style}
`
