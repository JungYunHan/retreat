import { RouterProvider } from 'react-router-dom'
import createRouter from './Router.tsx';

const App = () => {
  return (
      <RouterProvider router={createRouter()}></RouterProvider>
  )
}

export default App
