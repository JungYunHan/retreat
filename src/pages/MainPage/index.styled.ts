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
  gap: 20px;
`

export const WorshipSymbol = styled.img`
  position: absolute;
  top: 7%;
  left: -15%;
  width: 250px;
  height: 250px;
  object-fit: cover;
  z-index: 1;
`

export const CommunitySymbol = styled.img`
  position: absolute;
  top: 33%;
  right: -20%;
  width: 250px;
  height: 250px;
  object-fit: cover;
  z-index: 1;
`

export const MissionSymbol = styled.img`
  position: absolute;
  bottom: 5%;
  left: 25%;
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
