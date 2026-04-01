import { useState } from 'react'
import './App.css'
import toast from 'react-hot-toast'

function App() {
  // const [dark, setDark] = useState(false);

  // useEffect(() => {
  //   document.documentElement.classList.toggle("dark", dark);
  // }, [dark]);

  return (
    // <div className="h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white">
    //   <button onClick={() => setDark(!dark)}>
    //     Toggle Dark Mode
    //   </button>
    // </div>
    <>
      <h1 className='bg-pink-300'>Hey bhumi</h1>
      <button onClick={()=>{
        toast.success("This is toast message")
      }} 
      className='bg-blue-300 p-2 m-3 rounded-full text-white'
      >Click Me</button>
    </>
    

  )
}

export default App
