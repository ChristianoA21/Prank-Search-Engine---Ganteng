import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/GantengLogo.png'



export default function Navbar() {

        
  return (
    <nav className='w-screen h-[50px] bg-transparent fixed'>
        <div className='w-screen h-full mx-auto flex justify-between items-center p-5'>
            <a href="/"><img src={Logo} alt="" style={{ width: '40px' }} /></a>
            <menu className='flex gap-4'>
                <div  className='flex gap-4 header'>
                <Link to={"/about"} className='link2'>About Us</Link>
                </div>
            </menu>
        </div>
    </nav>
  )
}
