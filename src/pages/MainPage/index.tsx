import {
  CommunitySymbol,
  Layout,
  MissionSymbol,
  ModalLayout,
  NotificationBox,
  StrongText,
  SubTitle,
  Title,
  WorshipSymbol,
} from '@/pages/MainPage/index.styled.ts'
import Worship from '@/assets/images/worship.png'
import Community from '@/assets/images/community.png'
import Mission from '@/assets/images/mission.png'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/common/Button.tsx'
import { useState } from 'react'
import { Modal } from '@/components/common/Modal.tsx'

const MainPage = () => {
  const navigate = useNavigate()

  const [showNotification, setShowNotification] = useState(false)

  const handleStartClick = () => {
    setShowNotification(true)
  }

  const handleStartQuizClick = () => {
    navigate('/quiz')
  }

  return (
    <Layout>
      <WorshipSymbol src={Worship} />
      <CommunitySymbol src={Community} />
      <MissionSymbol src={Mission} />
      <Title>이제, 다시 함께</Title>
      <SubTitle>셀끼리함께</SubTitle>
      <Button onClick={handleStartClick}>시작하기</Button>
      {showNotification && (
        <Modal>
          <ModalLayout>
            <NotificationBox>
              퀴즈 진행 중에는 <StrongText>새로고침</StrongText>이나
              <br />
              <StrongText>뒤로가기</StrongText>를 하지 말아주세요!
              <br />
              정상적인 진행이 불가해집니다.
              <br />
              감사합니다! 😊
            </NotificationBox>
            <Button onClick={handleStartQuizClick}>확인</Button>
          </ModalLayout>
        </Modal>
      )}
    </Layout>
  )
}

export default MainPage
