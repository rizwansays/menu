import {Routes, Route, Navigate} from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import WebDevelopment from './pages/WebDevelopment'
// import './App.css'

function App() {

  return (
    <>
      <Routes>
      <Route path='/' element ={<Navigate to='home' />} />
      <Route path='home' element = {<Home/>}/>
      <Route path='about' element = {<About />} />
      <Route path='courses' element = {<Courses />} />
      <Route path='courses/web-development' element = {<WebDevelopment />} />
      
    </Routes>
    </>
  )
}

export default App
