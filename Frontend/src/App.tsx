import { useEffect } from 'react'
import {Routes, Route} from 'react-router-dom'
import AOS from 'aos'
import Login from './pages/Login'
import Signin from './pages/Signin'
import CardManagement from './pages/CardManagement'
import CardRegistration from './pages/CardRegistration'
import 'aos/dist/aos.css'
import './App.css'
import './assets/styles/Login.scss'
import './assets/styles/Signin.scss'
import './assets/styles/CardManagement.scss'
import './assets/styles/CardRegistration.scss'
import './assets/styles/Header.scss'
import './assets/styles/HeaderPage.scss'
import './assets/styles/Footer.scss'
import './assets/styles/FooterPage.scss'
import './assets/styles/Banner.scss'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, [])

  return (
    <div>
      <Routes>
        <Route path= '/' element={<Login/>} />
        <Route path= '/Signin' element={<Signin/>} />
        <Route path= '/CardManagement' element={<CardManagement/>} />
        <Route path= '/CardRegistration' element={<CardRegistration/>} />
      </Routes>
    </div>
  )
}

export default App
