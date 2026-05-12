import UserContextProvider from './Context/UserContextProvider'
import './App.css'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'

function App() {
  

  return (
    <UserContextProvider>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
