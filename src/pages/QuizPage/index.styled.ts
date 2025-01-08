import styled from 'styled-components';

export const Layout = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 430px;
    min-width: 320px;
    gap: 30px;
    padding: 20px 0;
`

export const QuizTitle = styled.h1`
    text-align: center;
    font-size: 24px;
    font-weight: 700;
`

export const PuzzleContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(11, 1fr);
    gap: 1px; /* 칸 사이 간격 */
    margin: 20px 0;
    border: 1px solid #333;
`

export const PuzzleWhiteCell = styled.div<{ $correct? : boolean }>`
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
    border: 1px solid ${({ $correct }) => $correct ? '#00f603' : '#333'};
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
    font-size: 14px;
    font-weight: bold;
`

export const PuzzleNumberText = styled.span`
  position: absolute;
  top: 2px;
  left: 2px;
  font-size: 10px;
`