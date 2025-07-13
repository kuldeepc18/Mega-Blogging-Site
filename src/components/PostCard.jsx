import React from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {
    return (
        <Link to={`/post/${$id}`} className='block group'>
            <div className='w-full bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600 group-hover:-translate-y-1'>
                <div className='w-full mb-4 overflow-hidden rounded-lg'>
                    <img 
                        src={appwriteService.getFilePreview(featuredImage)} 
                        alt={title} 
                        className='w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300' 
                    />
                </div>
                <h2 className='text-xl font-bold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 line-clamp-2'>
                    {title}
                </h2>
            </div>
        </Link>
    )
} 

export default PostCard