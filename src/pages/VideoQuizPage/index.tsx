import {
  Layout,
  VideoContainer,
  Video,
  SubmitButtonContainer,
  SubmitButton,
} from './index.styled.ts'
import VideoSource from '@/assets/videos/video-test.mp4'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const VideoQuizPage = () => {
  const navigate = useNavigate()

  const [showControls, setShowControls] = useState(true)

  useEffect(() => {
    if (localStorage.getItem('isPlayed')) {
      setShowControls(false)
    }
  }, [])

  const handlePlay = () => {
    setShowControls(false)
    localStorage.setItem('isPlayed', 'true')
  }

  const handleSubmitButtonClick = () => {
    navigate('/')
  }

  return (
    <Layout>
      <VideoContainer>
        <Video playsInline onClick={handlePlay} controls={showControls}>
          <source src={VideoSource} type="video/mp4" />
        </Video>
      </VideoContainer>
      <SubmitButtonContainer>
        <SubmitButton onClick={handleSubmitButtonClick}>
          퀴즈 풀러가기
        </SubmitButton>
      </SubmitButtonContainer>
    </Layout>
  )
}

export default VideoQuizPage
