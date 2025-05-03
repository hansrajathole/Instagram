import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Protected from '../Protected/Protected'
import Profile from '../../views/Profile/Profile'
import UserProfile from '../../views/UserProfile/UserProfile'
import CreatePost from '../../views/Create/CreatePost'
import EditProfile from '../../views/EditProfile/EditProfile'
import Feed from '../../Pages/Feed'

const MainLayout = () => {
  return (
    <div className='flex max-sm:flex-col'>
      <div className='w-[20%] min-w-[200px] max-sm:w-[100%]'>
      <Navbar/>
      </div>
      <div className=' w-[80%] p-[20px] max-sm:w-full max-sm:p-5'>
        <Routes>
          <Route path="/" element={<Protected><Feed /></Protected>} />
          <Route path="/profile" element={<Protected><Profile /></Protected>} />
          <Route path='/user/:userId' element={<Protected><UserProfile/></Protected>}/>
          <Route path='/create' element={<Protected><CreatePost/></Protected>}/>
          <Route path='/editprofile' element={<Protected><EditProfile/></Protected>}/>
        </Routes>
      </div>
    </div>
  )
}

export default MainLayout