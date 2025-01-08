import { Layout, MainImage } from './index.styled.ts'
import MainPoster from '@/assets/images/main.jpeg'
import { useNavigate } from 'react-router-dom'

const MainPage = () => {
  const navigate = useNavigate()

  const handleStartQuiz = () => {
    navigate('/quiz')
  }

  return (
    <Layout>
      <MainImage src={MainPoster} />
      <button onClick={handleStartQuiz}>퀴즈 시작하기</button>
    </Layout>
  )
}

export default MainPage
