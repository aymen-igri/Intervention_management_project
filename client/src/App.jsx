import './App.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/AppRoutes'
import MainUserProvider from './context/MainUser/MainUserProvider'
function App() {

  return (
    <MainUserProvider>
            <RouterProvider router={routes} />
    </MainUserProvider>
  )
}

export default App
