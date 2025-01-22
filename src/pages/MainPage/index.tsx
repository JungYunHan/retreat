import {
  CommunitySymbol,
  Layout,
  MissionSymbol,
  SubTitle,
  Title,
  WorshipSymbol,
} from '@/pages/MainPage/index.styled.ts'
import Worship from '@/assets/images/worship.png'
import Community from '@/assets/images/community.png'
import Mission from '@/assets/images/mission.png'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/common/Button.tsx'
import { useEffect } from 'react'

const MainPage = () => {
  const navigate = useNavigate()

  const handleStartQuiz = () => {
    navigate('/quiz')
  }

  return (
    <Layout>
      <WorshipSymbol src={Worship} />
      <CommunitySymbol src={Community} />
      <MissionSymbol src={Mission} />
      <Title>이제, 다시 함께</Title>
      <SubTitle>셀끼리함께</SubTitle>
      <Button onClick={handleStartQuiz}>시작하기</Button>
    </Layout>
  )
}

export default MainPage
