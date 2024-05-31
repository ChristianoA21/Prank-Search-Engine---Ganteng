import React from 'react'
import Navbar from '../components/Navbar'
import background from '../assets/bg.jpg'
import './css/Search.css'
import logo from '../assets/GantengLogo.png'
import video from '../assets/1.mp4'

export default function Search() {
  return (
    <>
    <Navbar />
    <div className='container'>
        <div className='main'>
            <div className='logo'>
                <img src={logo} />
            </div>
            <div>
            <p id='searchData' className='text-center text-2xl font-medium'></p>
            </div>
            <div className='video'>
            <video width="250" height="500" loop={true} autoPlay={true} >
                <source src={video} type="video/mp4"/>
            </video>
            </div>
        </div>
     </div>
    </>
    
  )
}
