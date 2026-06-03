import Components from './Components/index'
import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from './Components/ProtectedRoute'

function App() {

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<Components.Home />}
        />
        <Route
          path='/destinations'
          element={<Components.Destination />}
        />
        <Route
          path='/login'
          element={<Components.Login />}
        />
        <Route
          path='/destinations/:id'
          element={<Components.DestinationDetails />}
        />
        <Route
          path='/about'
          element={<Components.About />}
        />
        <Route
          path='/dashboard'
          element={
            <ProtectedRoute>
              <Components.Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path='/signup'
          element={<Components.Signup />}
        />
        <Route
          path='/dashboard/profile'
          element={<Components.Profile />}
        />

        <Route
          path='*'
          element={<Components.NotFound />}
        />

      </Routes>

    </>
  )
}

export default App
