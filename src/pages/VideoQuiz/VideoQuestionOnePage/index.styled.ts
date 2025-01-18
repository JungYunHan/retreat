import styled from 'styled-components'

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 430px;
  min-width: 320px;
  height: 100%;
  gap: 40px;
  padding: 20px 0;
`

export const Title = styled.div`
  font-family: GmarketSans, sans-serif;
  font-size: 20px;
  font-weight: bold;
  line-height: 1.5;
  text-align: center;
`

export const Input = styled.input`
  font-family: Pretendard, sans-serif;
  width: 250px;
  height: 30px;
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
