import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Search from './pages/Search'
import Chat from './pages/Chat'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/search' element={<Search />} />
      <Route path='/chat' element={<Chat />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
