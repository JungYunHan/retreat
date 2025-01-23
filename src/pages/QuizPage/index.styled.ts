import styled from 'styled-components'

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 430px;
  min-width: 320px;
  gap: 20px;
  padding-top: 50px;
  padding-bottom: 20px;
`

export const QuizTitle = styled.h1`
  font-family: GmarketSans, sans-serif;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  color: #21211f;
`

export const PuzzleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(11, 1fr);
  gap: 1px; /* 칸 사이 간격 */
  border: 1px solid #dedede;
`

export const PuzzleWhiteCell = styled.div<{ $correct?: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  box-sizing: border-box;
  background-color: #ffffff;
  border: 1px solid ${({ $correct }) => ($correct ? '#00f603' : '#333')};
`

export const PuzzleGreyCell = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  box-sizing: border-box;
  background-color: #cccccc;
  border: 1px solid #999;
`

export const PuzzleInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  font-family: Pretendard, sans-serif;
`

export const PuzzleNumberText = styled.label`
  font-family: Pretendard, sans-serif;
  position: absolute;
  top: 2px;
  left: 2px;
  font-size: 8px;
  color: #21211f;
`

export const FinalAnswerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 40px);
  width: 100%;

  > div:first-child {
    border-left: 1px solid #333;
  }
`

export const FinalAnswerCell = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-top: 1px solid #333;
  border-right: 1px solid #333;
  border-bottom: 1px solid #333;
  border-left: none;
  outline: none;
`

export const FinalAnswerInput = styled.input`
  font-family: Pretendard, sans-serif;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`

export const FinalAnswerNumberBox = styled.label`
  font-family: Pretendard, sans-serif;
  position: absolute;
  top: 2px;
  left: 2px;
  width: 12px;
  height: 12px;
  color: #f60100;
  font-size: 10px;
  line-height: 11px;
  text-align: center;
  border: 1px solid #f60100;
  border-radius: 50%;
`

export const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
