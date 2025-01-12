import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import MainPage from './pages/MainPage'
import DefaultLayout from './layout/DefaultLayout.tsx'
import QuizPage from './pages/QuizPage'
import VideoQuizPage from './pages/VideoQuizPage'

const createRouter = () => {
  return createBrowserRouter(
    createRoutesFromElements(
      <Route element={<DefaultLayout />}>
        <Route path={''} element={<MainPage />}></Route>
        <Route path={'quiz'} element={<QuizPage />}></Route>
        <Route path={'video'} element={<VideoQuizPage />}></Route>
      </Route>,
    ),
  )
}

export default createRouter
