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

export const Title = styled.div`
  font-family: GmarketSans, sans-serif;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`

export const VideoContainer = styled.div`
  position: relative;
  width: 100%;
`

export const Video = styled.video`
  width: 100%;
  height: 550px;
  object-fit: cover;
  background-color: black;
`

export const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
