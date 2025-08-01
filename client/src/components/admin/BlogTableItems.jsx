import React from 'react'
import { assets } from '../../assets/assets';

const BlogTableItems = ({blog,fetchBlogs,index}) => {
    const {title,createdAt}= blog;
    const BlogDate=new Date(createdAt);
  return (
    <tr className='border-y border-gray-300'>
        <th className='px-2 py-4'>{index}</th>
        <td className='px-2 py-4 text-blue-800 text-l'>{title}</td>
        <td className="max-sm:hidden px-2 py-4">{BlogDate.toLocaleDateString()}</td>
        <td className="max-sm:hidden px-2 py-4">
            <p className={`text-sm font-semibold ${blog.isPublished ? 'text-teal-600' : 'text-orange-700'}`}>
                {blog.isPublished ? 'Published': 'Unpublished'}</p>
        </td>
       <td className='px-2 py-4 text-xs'>
  <div className="flex items-center gap-3">
    <button className='border px-2 py-0.5 mt-1 rounded cursor-pointer'>
      {blog.isPublished ? 'Unpublished' : 'Publish'}
    </button>
    <img 
      src={assets.cross_icon} 
      className='w-6 hover:scale-110 transition-all cursor-pointer' 
      alt="cross" 
    />
  </div>
</td>

    </tr>
  )
}

export default BlogTableItems
