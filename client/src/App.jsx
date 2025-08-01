import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Layout from './pages/admin/Layout'
import Dashboard from './pages/admin/Dashboard'
import Addblog from './pages/admin/Addblog' 
import Comments from './pages/admin/Comments'
import Listblog from './pages/admin/Listblog'
import Login from './pages/admin/Login'
import 'quill/dist/quill.snow.css'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/admin" element={true ?<Layout />: <Login/>} >
        <Route index element={<Dashboard />} />
        <Route path='addBlog' element={<Addblog />} />
        <Route path='comments' element={<Comments />} />
        <Route path='listBlog' element={<Listblog />} />
        </Route>
      </Routes>
      </div>
  )
}

export default App
