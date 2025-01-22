import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import MainPage from '@/pages/MainPage'
import DefaultLayout from '@/layout/DefaultLayout.tsx'
import QuizPage from '@/pages/QuizPage'
import VideoPage from '@/pages/VideoQuiz/VideoPage'
import NotFoundPage from '@/pages/NotFoundPage'
import UpDownQuizPage from '@/pages/UpDownQuizPage'
import VideoQuestionOnePage from '@/pages/VideoQuiz/VideoQuestionOnePage'
import FindPersonPage from '@/pages/FindPersonPage'

const createRouter = () => {
  return createBrowserRouter(
    createRoutesFromElements(
      <Route element={<DefaultLayout />}>
        <Route path={''} element={<MainPage />} />
        <Route path={'quiz'} element={<QuizPage />} />
        <Route path={'updown'} element={<UpDownQuizPage />} />
        <Route path={'video'} element={<VideoPage />} />
        <Route path={'video/question-one'} element={<VideoQuestionOnePage />} />
        <Route path={'*'} element={<NotFoundPage />} />
        <Route path={'final'} element={<FindPersonPage />} />
      </Route>,
    ),
  )
}

export default createRouter
