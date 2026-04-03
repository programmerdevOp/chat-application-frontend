import { useState } from 'react'
import './App.css'
import toast from 'react-hot-toast'
import JoinCreateChat from './components/JoinCreateChat'
import ChatPage from './components/ChatPage'

function App() {

  return (
    // <div className="h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white">
    //   <button onClick={() => setDark(!dark)}>
    //     Toggle Dark Mode
    //   </button>
    // </div>
    <div className='bg-black'>
      <JoinCreateChat/>
      <ChatPage/>
    </div>
  )
}

export default App
