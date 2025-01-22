import {
  BlueCell,
  Input,
  InputBox,
  Layout,
  ModalBox,
  ModalInput,
  ModalTitle,
  PinkCell,
  QuizContent,
  QuizTitle,
  RedCell,
  YellowCell,
} from '@/pages/UpDownQuizPage/index.styled.ts'
import { ChangeEvent, useState } from 'react'
import { Modal } from '../../components/common/Modal.tsx'
import { Button } from '../../components/common/Button.tsx'
import { Modal } from '@/components/common/Modal.tsx'
import { Button } from '@/components/common/Button.tsx'
import { useNavigate } from 'react-router-dom'

const UpDownQuizPage = () => {
  const ANSWER_ONE = '날마다마음을같이하여성전에모이기를힘쓰고'
  const ANSWER_TWO =
    '날마다마음을같이하여성전에모이기를힘쓰고집에서떡을떼며기쁨과순전한마음으로음식을먹고'

  const navigate = useNavigate()

  const [inputs, setInputs] = useState({
    1: '',
    2: '',
    3: '',
    4: '',
  })
  const [modalInputs, setModalInputs] = useState('')
  const [attemptCount, setAttemptCount] = useState<number>(0)
  const [isAnswerCorrectModalOpen, setIsAnswerCorrectModalOpen] =
    useState(false)
  const [isAnswerWrongModalOpen, setIsAnswerWrongModalOpen] = useState(false)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setInputs({
      ...inputs,
      [name]: value.replace(/[^0-9]/g, ''),
    })
  }

  const isCorrect = Object.values(inputs).join('') === '0246'

  const handleModalInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setModalInputs(e.target.value)
  }

  const handleButtonClick = () => {
    const modalInput = modalInputs.replace(/\s/g, '')

    setAttemptCount(attemptCount + 1)

    if (modalInput === ANSWER_ONE || modalInput === ANSWER_TWO) {
      setIsAnswerCorrectModalOpen(true)
    } else {
      setIsAnswerWrongModalOpen(true)
    }
  }

  const handleCloseAnswerCorrectModal = () => {
    setIsAnswerCorrectModalOpen(false)
    navigate('/video')
  }

  const handleCloseAnswerWrongModal = () => {
    setIsAnswerWrongModalOpen(false)
  }

  return (
    <Layout>
      <QuizTitle>영상 퀴즈 코드</QuizTitle>
      <QuizContent>
        <RedCell $top $right $bottom>
          상
        </RedCell>
        <BlueCell $right $bottom $left>
          상
        </BlueCell>
        <YellowCell $top $right $bottom $left>
          하
        </YellowCell>
        <PinkCell $right $bottom $left>
          하
        </PinkCell>
        <PinkCell $top $right $left>
          상
        </PinkCell>
        <YellowCell $top $bottom $left>
          상
        </YellowCell>
        <BlueCell $top $right>
          하
        </BlueCell>
        <RedCell $top $bottom $left>
          하
        </RedCell>
      </QuizContent>
      <InputBox>
        ACTS
        <Input
          $color={'#ee64b3'}
          name={'1'}
          maxLength={1}
          autoComplete={'off'}
          onChange={handleInputChange}
        />
        <Input
          $color={'#f25f4f'}
          name={'2'}
          maxLength={1}
          autoComplete={'off'}
          onChange={handleInputChange}
        />
        <Input
          $color={'#1aadff'}
          name={'3'}
          maxLength={1}
          autoComplete={'off'}
          onChange={handleInputChange}
        />
        <Input
          $color={'#feff1b'}
          name={'4'}
          maxLength={1}
          autoComplete={'off'}
          onChange={handleInputChange}
        />
      </InputBox>

      {isCorrect && (
        <Modal>
          <ModalBox>
            <ModalTitle>ACTS 0246</ModalTitle>
            <ModalInput
              $color={'#fff'}
              autoComplete={'off'}
              onChange={handleModalInputChange}
            />
            <Button onClick={handleButtonClick}>제출하기</Button>
          </ModalBox>
        </Modal>
      )}
      {isAnswerCorrectModalOpen && (
        <Modal onOverlayClick={handleCloseAnswerCorrectModal}>
          <div>정답입니다!</div>
        </Modal>
      )}
      {isAnswerWrongModalOpen && (
        <Modal onOverlayClick={handleCloseAnswerWrongModal}>
          {attemptCount < 3 && <div>틀렸습니다. 다시 입력해주세요.</div>}
          {attemptCount >= 3 && <div>수련회 주제 말씀이 뭐였죠?</div>}
        </Modal>
      )}
    </Layout>
  )
}

export default UpDownQuizPage
