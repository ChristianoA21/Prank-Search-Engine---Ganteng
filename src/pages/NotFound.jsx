import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main>
        <div className='max-w-[1000px] mx-auto p-5 max-h-full'>
          <div className='justify-center flex mt-48'>
            <h1 className='font-bold text-6xl'>404|Not Found</h1>
          </div><br/>
          <center><Link to={"/"} className='text-2xl' style={{
            backgroundColor: '#0272D6',
            color: 'white',
            padding: '10px', 
            borderRadius: '5px',
            marginTop: '100px'
          }}>Go back</Link></center>
        </div>
    </main>
  )
}
