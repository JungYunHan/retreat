import styled from 'styled-components'

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 430px;
  min-width: 320px;
  gap: 20px;
  padding: 20px 0;
`

export const VideoContainer = styled.div`
  position: relative;
  width: 100%;
`

export const Video = styled.video`
  width: 100%;
  height: 600px;
  object-fit: cover;
`

export const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SubmitButton = styled.button`
  width: 120px;
  height: 30px;
  background-color: #10954d;
  color: #ffffff;
  font-size: 16px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 8px;
`
