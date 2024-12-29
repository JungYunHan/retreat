import styled from 'styled-components';

export const Layout = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 430px;
    min-width: 320px;
    gap: 30px;
    padding: 20px;
`

export const QuizTitle = styled.h1`
    text-align: center;
    font-size: 24px;
    font-weight: 700;
`

export const QuizQuestion = styled.h2`
    font-size: 20px;
    font-weight: 700;
`

export const QuizAnswerInput = styled.input`
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid black;
    font-size: 16px;
`