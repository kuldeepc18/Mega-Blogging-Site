import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../components'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    if (posts.length === 0) {
        return (
            <div className="w-full py-16">
                <Container>
                    <div className="text-center">
                        <div className="mb-8">
                            <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-200 mb-4">
                                Welcome to BlogHub
                            </h1>
                            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                                Discover amazing stories and insights from our community of writers. 
                                Login to start reading and sharing your own posts.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700 max-w-md mx-auto">
                            <div className="text-6xl mb-4">📚</div>
                            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                                Login to read posts
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400">
                                Join our community to access all the amazing content
                            </p>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    
    return (
        <div className='w-full py-12'>
            <Container>
                <div className='mb-8'>
                    <h1 className='text-3xl font-bold text-slate-800 dark:text-slate-200 mb-2'>Latest Posts</h1>
                    <p className='text-slate-600 dark:text-slate-400'>Discover the newest stories from our community</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                    {posts.map((post) => (
                        <PostCard key={post.$id} {...post} />
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home