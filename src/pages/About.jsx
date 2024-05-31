import React from 'react'
import Navbar from '../components/Navbar'
import './css/About.css'

export default function About() {
  return (
    <>
    <Navbar />
    <main className='w-full h-auto'>
        <div className='mx-auto p-5 text-center section'>
            <div className='utama  mt-10 p-5'>
              <h1 className=' font-bold text-2xl mb-3'>About</h1>
              <p className='text-lg'>Website ini dibuat hanya untuk hiburan</p>
              <p className='copyright'>&#169; by Gawebs</p>
            </div>
        </div>
    </main>
    </>
  )
}
