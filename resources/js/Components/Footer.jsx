import React from 'react'
import Fb from "../../../public/assets/Fb.svg"
import Ig from "../../../public/assets/Ig.svg"
import Wa from "../../../public/assets/Wa.svg"



const Footer = () => {
  return (
    <div className='bg-gradient-to-t from-black via-[rgba(0,0,0,0.5)] to-transparent w-full h-[15em] flex items-center justify-evenly' id='Contact'>
      <div className=''>
        <h3 className='font-bold text-2xl'>SI<span className='italic'>MB</span></h3>
        <h3>Copyright © 2024 <br />
        Information <span className='text-red-600'>System</span></h3>
      </div>
      <div>
        <h3 className='font-bold text-2xl'>Locations</h3>
        <h3>Jl. Babarsari 2 Tambakbayan<br />
        Yogyakarta 55281. <br /> 
        Telp./Fax (0274) 485786 <br />
        INDONESIA</h3>
      </div>
      <div>
        <h1 className='font-bold text-2xl'>Contact Us</h1>
        <div className='flex items-center mb-1 hover:scale-75 transform transition duration-400 ease-out cursor-pointer'>
            <img src={Fb} alt="" />
            <h3>Facbook</h3>
        </div>
        <div className='flex items-center mb-1 hover:scale-75 transform transition duration-400 ease-out cursor-pointer'>
            <img src={Ig} alt="" />
            <h3>Instagram</h3>
        </div>
        <div className='flex items-center hover:scale-75 transform transition duration-400 ease-out cursor-pointer'>
            <img src={Wa} alt="" />
            <h3>WhatsApp</h3>
        </div>
      </div>
      <div>
        <h1 className='font-bold text-2xl'>See Also</h1>
        <h3 className='hover:scale-75 transform transition duration-400 ease-out cursor-pointer'>www.kelompok1.com</h3>
        <h3 className='hover:scale-75 transform transition duration-400 ease-out cursor-pointer'>www.kelompok2.com</h3>
        <h3 className='hover:scale-75 transform transition duration-400 ease-out cursor-pointer'>www.kelompok3.com</h3>
      </div>
    </div>
  )
}

export default Footer
