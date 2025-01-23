import {
  Layout,
  VideoContainer,
  Video,
  Title,
  WarningText,
  PlayButtonImageContainer,
} from '@/pages/VideoQuiz/VideoPage/index.styled'
import VideoSource from '@/assets/videos/video-quiz.mp4'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PlayIcon } from '@/assets/svgs'

const VideoPage = () => {
  const navigate = useNavigate()

  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlaybackRate = (rate: number) => {
    if (videoRef.current) {
      videoRef.current.playbackRate = rate
    }
  }

  useEffect(() => {
    if (localStorage.getItem('isPlayed') === 'true') {
      handlePlaybackRate(1.2)
    } else {
      handlePlaybackRate(1)
    }

    window.onbeforeunload = () => {
      return ''
    }
    document.body.style.overflow = 'hidden'
    document.addEventListener(
      'touchmove',
      (e) => {
        if (e.touches.length > 1) {
          e.preventDefault()
        }
      },
      { passive: false },
    )

    return () => {
      window.onbeforeunload = null
      document.body.style.overflow = ''
    }
  }, [])

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
    }

    localStorage.setItem('isPlayed', 'true')
    setIsPlaying(true)
  }

  const handleVideoEnded = () => {
    navigate('/video/question-one')
  }

  return (
    <Layout>
      <Title>영상 퀴즈</Title>
      <WarningText>영상을 보시기 전 음량을 키워주세요!</WarningText>
      <VideoContainer onClick={handlePlay}>
        {!isPlaying && (
          <PlayButtonImageContainer>
            <PlayIcon width={'100px'} height={'100px'} fill={'white'} />
          </PlayButtonImageContainer>
        )}
        <Video
          ref={videoRef}
          playsInline
          controls={false}
          controlsList={'nodownload'}
          onContextMenu={(e) => e.preventDefault()}
          onEnded={handleVideoEnded}
        >
          <source src={VideoSource} type="video/mp4" />
        </Video>
      </VideoContainer>
    </Layout>
  )
}

export default VideoPage
