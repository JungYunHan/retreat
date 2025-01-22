import styled from 'styled-components'

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 430px;
  min-width: 320px;
  gap: 20px;
  padding-top: 50px;
  padding-bottom: 20px;
`

export const Title = styled.div`
  font-family: GmarketSans, sans-serif;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`

export const WarningText = styled.div`
  font-family: Pretendard, sans-serif;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: red;
`

export const VideoContainer = styled.div`
  position: relative;
  width: 100%;
`

export const Video = styled.video`
  width: 100%;
  height: 250px;
  object-fit: contain;
  background-color: black;

  &::-webkit-media-controls-fullscreen-button {
    display: none;
  }
  &::-webkit-media-controls-timeline {
    display: none;
  }
`

export const PlayButtonImageContainer = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 250px;
  background-color: black;
  opacity: 0.5;
  cursor: pointer;
`
