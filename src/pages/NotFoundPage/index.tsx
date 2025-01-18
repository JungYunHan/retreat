import styled from 'styled-components'
import { Button } from '../../components/common/Button.tsx'
import { useNavigate } from 'react-router-dom'
import Train from '@/assets/images/train.png'

const NotFoundPage = () => {
  const navigate = useNavigate()

  const handleBackButtonClick = () => {
    navigate(-1)
  }

  return (
    <Layout>
      <Image src={Train} />
      <Title>404 error</Title>
      <Content>
        <div>페이지를 찾을 수 없습니다.</div>
        <div>페이지의 주소가 잘못되었거나,</div>
        <div>변경 혹은 삭제된 것 같아요.</div>
      </Content>
      <Button onClick={handleBackButtonClick}>이전 페이지로 돌아가기</Button>
    </Layout>
  )
}

export default NotFoundPage

const Layout = styled.div`
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

const Image = styled.img`
  width: 320px;
  height: 200px;
  object-fit: cover;
`

const Title = styled.h1`
  font-family: GmarketSansBold, sans-serif;
`

const Content = styled.div`
  font-family: Pretendard, sans-serif;
  text-align: center;
  color: #6b7684;
`
