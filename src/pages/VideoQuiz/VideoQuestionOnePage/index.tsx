import { Input, Layout, ModalContentBox, Title } from './index.styled.ts'
import { Button } from '../../../components/common/Button.tsx'
import { ChangeEvent, useState } from 'react'
import { Modal } from '../../../components/common/Modal.tsx'
import { useNavigate } from 'react-router-dom'

const VideoQuestionOnePage = () => {
  const navigate = useNavigate()
  const [input, setInput] = useState('')
  const [isAnswerCorrectModalOpen, setIsAnswerCorrectModalOpen] =
    useState(false)
  const [isAnswerWrongModalOpen, setIsAnswerWrongModal] = useState(false)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleButtonClick = () => {
    if (input === '1' || input === '1번') {
      setIsAnswerCorrectModalOpen(true)
    } else {
      setIsAnswerWrongModal(true)
    }
  }

  const handleIsAnswerCorrectModalClose = () => {
    setIsAnswerCorrectModalOpen(false)
    navigate('/')
  }

  const handleModalButtonClick = () => {
    setIsAnswerWrongModal(false)
  }

  return (
    <Layout>
      <Title>
        건희 형이 '테스트'라는 단어를
        <br />몇 번 말했나요?
      </Title>
      <Input onChange={handleInputChange} />
      <Button onClick={handleButtonClick}>제출하기</Button>

      {isAnswerCorrectModalOpen && (
        <Modal onOverlayClick={handleIsAnswerCorrectModalClose}>
          <div>정답입니다</div>
        </Modal>
      )}
      {isAnswerWrongModalOpen && (
        <Modal>
          <ModalContentBox>
            <div>틀렸습니다</div>
            <Button onClick={handleModalButtonClick}>영상 다시 보기</Button>
          </ModalContentBox>
        </Modal>
      )}
    </Layout>
  )
}

export default VideoQuestionOnePage
