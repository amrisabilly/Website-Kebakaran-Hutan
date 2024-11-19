import React from 'react'
import Background from "../../../public/assets/Background.svg";
import Navbar from "../Components/Navbar";
import Footer from '@/Components/Footer'


const Education = () => {
  return (
    <div
                className="bg-slate-400 h-full bg-cover bg-center text-white"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Background})`,
                }}
            >
                <Navbar />
                <div className="w-full min-h-screen pt-24 flex justify-evenly gap-5">
                    <div className='w-[33em] h-[50em] px-9 py-6' >
                      <h1 className='font-bold text-4xl mb-5'>Edu<span className='text-red-600'>Cation</span></h1>
                      <div className='w-[20em]'>
                      <h3 className='mb-4'>Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</h3>
                      </div>
                      <div className='grid grid-cols-2 gap-8 items-center w-[20em]'>
                        <div className='bg-white/20 rounded-md w-[11em] h-[15em] p-4 hover:scale-105 transform transition duration-300 ease-out'>
                          <div className='bg-[#929292] w-[9em] h-[10em] rounded-md mb-1'></div>
                          <h3 className='font-medium'>Name One</h3>
                          <h3 className='text-white/40'>Backend Developer</h3>
                        </div>
                        <div className='bg-white/20 rounded-md w-[11em] h-[15em] p-4 ms-12 hover:scale-105 transform transition duration-300 ease-out'>
                          <div className='bg-[#929292] w-[9em] h-[10em] rounded-md mb-1'></div>
                          <h3 className='font-medium'>Name One</h3>
                          <h3 className='text-white/40'>Backend Developer</h3>
                        </div>
                        <div className='bg-white/20 rounded-md w-[11em] h-[15em] p-4 hover:scale-105 transform transition duration-300 ease-out'>
                          <div className='bg-[#929292] w-[9em] h-[10em] rounded-md mb-1'></div>
                          <h3 className='font-medium'>Name One</h3>
                          <h3 className='text-white/40'>Backend Developer</h3>
                        </div>
                        <div className='bg-white/20 rounded-md w-[11em] h-[15em] p-4 ms-12 hover:scale-105 transform transition duration-300 ease-out'>
                          <div className='bg-[#929292] w-[9em] h-[10em] rounded-md mb-1'></div>
                          <h3 className='font-medium'>Name One</h3>
                          <h3 className='text-white/40'>Backend Developer</h3>
                        </div>
                      </div>
                      
                    </div>
                    <div className='w-[50em] h-[40em] py-5 px-5'>
                      <h1 className='font-bold text-4xl mb-5'>About Website</h1>
                      <h3 className='mb-9'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
                          <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
                    </div>
                </div>
                <Footer />
            </div>
  )
}

export default Education
