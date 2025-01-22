import styled from 'styled-components'

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 430px;
  min-width: 320px;
  gap: 40px;
  padding-top: 50px;
`

export const Title = styled.div`
  font-family: GmarketSans, sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
`

export const Strong = styled.strong`
  font-weight: 600;
`

export const Input = styled.input`
  font-family: Pretendard, sans-serif;
  width: 250px;
  height: 30px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  border: 2px solid black;
  outline: none;
`

export const ModalContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`
