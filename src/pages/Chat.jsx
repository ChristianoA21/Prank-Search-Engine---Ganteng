import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from '../components/Navbar'
import './css/Chat.css'

export default function Chat() {
  return (
    <>
    <Navbar />

    {/*Home*/}
    <div className="home">
      <div className='layar'>
        <div className='popup-chat'>
          <div className='botpopup'>
            hello
          </div>
          <div className='mepopup'>
            
          </div>
        </div>
      </div>
      <footer>
          <input className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-5 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Chat anything..." type="text" name="input" id='input' />
          <button type='submit' className='btn bg-white text-gray-900'>Send</button>
      </footer>
    </div>  
    </>
    
  )
}
