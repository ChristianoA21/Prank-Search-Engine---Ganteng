import React from 'react'
import Navbar from '../components/Navbar'
import logo from '../assets/GantengLogo.png'
import background from '../assets/bg.jpg'
import './css/Home.css'
import Chat from './Chat'


export default function Home() {

  
  function myFunction() {
    var toksik = ["Kontol","kontol"];

    const cari = search;

    alert('Mencari kata ' + '" ' + cari.value + ' "')

    if(cari.value == "") {
      alert("ISI DULU GOBLOK!")
      window.location.href = '/'
    } else if(cari.value == toksik){
      alert("ASTAGA KAMU NAKK!")
      window.location.href = '/'
  } else if(cari.value == "chat") {
      alert("Beralih ke Mode CHAT")
      window.location.href = '/chat'
  } else {
        window.location.href = '/search'
  }

}

  return (
    <>
      <Navbar />
      <div style={{ backgroundImage: `url(${background})` }}>
        <div className='main'>
          <div className="judul">
            <img src={logo} />
          </div>
          <div className='input'>
            <input className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-5 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search" id='search' />
            <center>
              <button type='submit' onClick={myFunction} className='btn bg-white text-gray-900 mt-5'>Search</button>
            </center>
          </div>
          <div className='d-flex w-full justify-center'>
          </div>
        </div>
      </div>
    </>
  )
}


