import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../pages/Home'
import Chat from '../pages/Chat'
import Login from '../pages/Login'
import Register from '../pages/Register'
import SetAvatar from '../pages/SetAvatar'
const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Chat/>}/>
            <Route path='/chat' element={<Chat/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/setavatar' element={<SetAvatar/>}/>
            <Route path='*' element={<Home/>}/>

        </Routes>
    </div>
  )
}

export default AllRoutes