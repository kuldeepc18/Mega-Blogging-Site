import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import { login, logout } from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeProvider'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <ThemeProvider>
      {!loading ? (
        <div className='min-h-screen flex flex-col bg-white dark:bg-gray-900'>
          <div className='flex-1 flex flex-col'>
            <Header />
            <main className='flex-1 bg-gray-50 dark:bg-gray-800'>
              <Outlet />
            </main>
            <Footer />
          </div>
        </div>
      ) : (
        <div className='min-h-screen flex items-center justify-center bg-white dark:bg-gray-900'>
          <div className='animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 dark:border-blue-400'></div>
        </div>
      )}
    </ThemeProvider>
  )
}

export default App