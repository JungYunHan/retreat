import styled from 'styled-components'

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 430px;
  min-width: 320px;
  gap: 20px;
  padding-top: 50px;
`

export const TrainImage = styled.img`
  width: 320px;
  height: 150px;
  object-fit: cover;
`

export const Image = styled.img`
  width: 320px;
  height: 200px;
  object-fit: cover;
`

export const Title = styled.div`
  font-family: GmarketSans, sans-serif;
  font-size: 40px;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
`

export const Strong = styled.strong`
  font-size: 28px;
  font-weight: 600;
`

export const SubText = styled.div`
  font-family: Pretendard, sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
`
