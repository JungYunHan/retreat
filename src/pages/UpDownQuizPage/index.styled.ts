import styled from 'styled-components'

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 430px;
  min-width: 320px;
  gap: 50px;
  padding: 20px 0;
`

export const QuizTitle = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  color: #21211f;
`

export const QuizContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 70px);
  grid-template-rows: repeat(2, 70px);
  gap: 15px;
  margin: auto;
`

export const RedCell = styled.div<{
  $top?: boolean
  $right?: boolean
  $bottom?: boolean
  $left?: boolean
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  background-color: #f25f4f;
  border-top: ${({ $top }) => ($top ? '3px solid black' : 'none')};
  border-right: ${({ $right }) => ($right ? '3px solid black' : 'none')};
  border-bottom: ${({ $bottom }) => ($bottom ? '3px solid black' : 'none')};
  border-left: ${({ $left }) => ($left ? '3px solid black' : 'none')};
`

export const BlueCell = styled.div<{
  $top?: boolean
  $right?: boolean
  $bottom?: boolean
  $left?: boolean
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  background-color: #1aadff;
  border-top: ${({ $top }) => ($top ? '3px solid black' : 'none')};
  border-right: ${({ $right }) => ($right ? '3px solid black' : 'none')};
  border-bottom: ${({ $bottom }) => ($bottom ? '3px solid black' : 'none')};
  border-left: ${({ $left }) => ($left ? '3px solid black' : 'none')};
`

export const YellowCell = styled.div<{
  $top?: boolean
  $right?: boolean
  $bottom?: boolean
  $left?: boolean
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  background-color: #feff1b;
  border-top: ${({ $top }) => ($top ? '3px solid black' : 'none')};
  border-right: ${({ $right }) => ($right ? '3px solid black' : 'none')};
  border-bottom: ${({ $bottom }) => ($bottom ? '3px solid black' : 'none')};
  border-left: ${({ $left }) => ($left ? '3px solid black' : 'none')};
`

export const PinkCell = styled.div<{
  $top?: boolean
  $right?: boolean
  $bottom?: boolean
  $left?: boolean
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  background-color: #ee64b3;
  border-top: ${({ $top }) => ($top ? '3px solid black' : 'none')};
  border-right: ${({ $right }) => ($right ? '3px solid black' : 'none')};
  border-bottom: ${({ $bottom }) => ($bottom ? '3px solid black' : 'none')};
  border-left: ${({ $left }) => ($left ? '3px solid black' : 'none')};
`

export const InputBox = styled.div`
  font-family: Pretendard, sans-serif;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

export const Input = styled.input<{ $color: string }>`
  width: 30px;
  height: 30px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  border: 2px solid black;
  background-color: ${({ $color }) => $color};
  outline: none;
`

export const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 20px;
`

export const ModalTitle = styled.h1`
  font-family: GmarketSans, sans-serif;
  text-align: center;
  font-size: 24px;
  font-weight: 600;
`

export const ModalInput = styled.input<{ $color: string }>`
  width: 100%;
  height: 30px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  border: 2px solid black;
  background-color: ${({ $color }) => $color};
  outline: none;
`
