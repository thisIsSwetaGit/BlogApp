import React from 'react'
import { assets } from '../../assets/assets';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const BlogTableItems = ({blog,fetchBlogs,index}) => {
    const {title,createdAt}= blog;
    const BlogDate=new Date(createdAt);

    const {axios} = useAppContext();
    const deleteBlog = async () => {
      const confirm = window.confirm("Are you sure you want to delete this blog?");
      if(!confirm) return;
      try {
        const {data} = await axios.delete('/api/blog/delete',{id:blog._id})
        if(data.success) {
          toast.success(data.message);
          await fetchBlogs();
        }else{
          toast.error(data.message);
        }
      } catch (error) {
        toast.error(error.message);
      }
      }
      const togglePublish = async () => {
        try {
          const {data} = await axios.post('/api/blog/toggle-publish',{id:blog._id})
          if(data.success) {
            toast.success(data.message);
            await fetchBlogs();
          }else{
            toast.error(data.message);
          }
        } catch (error) {
          toast.error(error.message);
        }
      }
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
    <button onClick={togglePublish} className='border px-2 py-0.5 mt-1 rounded cursor-pointer'>
      {blog.isPublished ? 'Unpublished' : 'Publish'}
    </button>
    <img 
      src={assets.cross_icon} 
      className='w-6 hover:scale-110 transition-all cursor-pointer' 
      alt="cross" onClick={deleteBlog} 
    />
  </div>
</td>

    </tr>
  )
}

export default BlogTableItems
