import {
  Layout,
  VideoContainer,
  Video,
  SubmitButtonContainer,
  Title,
} from './index.styled.ts'
import VideoSource from '@/assets/videos/video-test.mp4'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../../components/common/Button.tsx'

const VideoPage = () => {
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
    navigate('/video/question-one')
  }

  return (
    <Layout>
      <Title>영상은 1회 재생됩니다. 집중해서 보세요.</Title>
      <VideoContainer>
        <Video
          playsInline
          onClick={handlePlay}
          onPlay={handlePlay}
          controls={showControls}
        >
          <source src={VideoSource} type="video/mp4" />
        </Video>
      </VideoContainer>
      <SubmitButtonContainer>
        <Button onClick={handleSubmitButtonClick}>퀴즈 풀러가기</Button>
      </SubmitButtonContainer>
    </Layout>
  )
}

export default VideoPage
