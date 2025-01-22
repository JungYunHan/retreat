import styled from 'styled-components'

export const Layout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 430px;
  min-width: 320px;
  min-height: 100vh;
  gap: 20px;
`

export const WorshipSymbol = styled.img`
  position: absolute;
  top: calc(15% - 125px);
  left: -15%;
  width: 250px;
  height: 250px;
  object-fit: cover;
  z-index: 1;
`

export const CommunitySymbol = styled.img`
  position: absolute;
  top: calc(50% - 125px);
  right: -20%;
  width: 250px;
  height: 250px;
  object-fit: cover;
  z-index: 1;
`

export const MissionSymbol = styled.img`
  position: absolute;
  bottom: -25px;
  left: calc(50% - 100px);
  width: 200px;
  height: 200px;
  object-fit: cover;
  z-index: 1;
`

export const Title = styled.h1`
  font-family: GmarketSans, sans-serif;
  font-size: 32px;
  display: flex;
  flex-direction: column;
  z-index: 10;
`

export const SubTitle = styled.h2`
  font-family: Pretendard, sans-serif;
  font-size: 20px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  z-index: 10;
`
