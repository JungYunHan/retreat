import {Layout, QuizAnswerInput, QuizQuestion, QuizTitle} from './index.styled.ts';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const QuizPage = () => {
    const navigate = useNavigate()

    const [answer, setAnswer] = useState('')

    const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAnswer(e.target.value)
    }

    const handleSubmitClick = () => {
        if (answer === '베드로') {
            alert('정답입니다!')
            navigate('/')
        } else {
            alert('틀렸습니다!')
        }
    }

    return <Layout>
        <QuizTitle>성경 퀴즈</QuizTitle>
        <QuizQuestion>1. 예수를 3번 부인한 인물은?</QuizQuestion>
        <QuizAnswerInput type='text' onChange={handleAnswerChange} />
        <button onClick={handleSubmitClick}>제출</button>
    </Layout>
}

export default QuizPage