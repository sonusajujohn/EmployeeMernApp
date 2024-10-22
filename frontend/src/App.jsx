
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import Add from './components/Add'


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}> </Route>
        <Route path='/add' element={<Add/>}></Route>
    </Routes>
    </>
  )
}

export default App
