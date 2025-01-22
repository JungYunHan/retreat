import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import MainPage from './pages/MainPage'
import DefaultLayout from './layout/DefaultLayout.tsx'
import QuizPage from './pages/QuizPage'
import VideoPage from './pages/VideoQuiz/VideoPage'
import NotFoundPage from './pages/NotFoundPage'
import UpDownQuizPage from './pages/UpDownQuizPage'
import VideoQuestionOnePage from './pages/VideoQuiz/VideoQuestionOnePage'
import MainPage from '@/pages/MainPage'
import DefaultLayout from '@/layout/DefaultLayout.tsx'
import QuizPage from '@/pages/QuizPage'
import VideoPage from '@/pages/VideoQuiz/VideoPage'
import NotFoundPage from '@/pages/NotFoundPage'
import UpDownQuizPage from '@/pages/UpDownQuizPage'
import VideoQuestionOnePage from '@/pages/VideoQuiz/VideoQuestionOnePage'

const createRouter = () => {
  return createBrowserRouter(
    createRoutesFromElements(
      <Route element={<DefaultLayout />}>
        <Route path={''} element={<MainPage />}></Route>
        <Route path={'quiz'} element={<QuizPage />}></Route>
        <Route path={'updown'} element={<UpDownQuizPage />}></Route>
        <Route path={'video'} element={<VideoPage />}></Route>
        <Route
          path={'video/question-one'}
          element={<VideoQuestionOnePage />}
        ></Route>
        <Route path={'*'} element={<NotFoundPage />}></Route>
      </Route>,
    ),
  )
}

export default createRouter
