import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Sidebar = () => {
  return (
    <div className=' border-r border-gray-200 min-h-full pt-6 flex flex-col '>
      <NavLink end={true} to='/admin' className={({isActive})=>`flex items-center gap-3 py-3.5 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-gray-100 border-r-4 border-black"}`}>
        <img src={assets.home_icon} alt="" className='min-w-4 w-5'/>
        <p className='hidden md:inline-block'> Dashboard</p>
      </NavLink>

      <NavLink to='/admin/Addblog' className={({isActive})=>`flex items-center gap-3 py-3.5 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-gray-100 border-r-4 border-black"}`}>
        <img src={assets.add_icon} alt="" className='min-w-4 w-5'/>
        <p className='hidden md:inline-block'> Add Blogs</p>
 </NavLink>

        <NavLink to='/admin/Listblog' className={({isActive})=>`flex items-center gap-3 py-3.5 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-gray-100 border-r-4 border-black"}`}>
        <img src={assets.list_icon} alt="" className='min-w-4 w-5'/>
        <p className='hidden md:inline-block'> Blogs</p>
      </NavLink>

      <NavLink to='/admin/Comments' className={({isActive})=>`flex items-center gap-3 py-3.5 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-gray-100 border-r-4 border-black"}`}>
        <img src={assets.comment_icon} alt="" className='min-w-4 w-5'/>
        <p className='hidden md:inline-block'> Comments</p>
      </NavLink>
     

    </div>
  )
}

export default Sidebar  
