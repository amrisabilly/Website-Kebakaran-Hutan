import React from 'react'
import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer'
import Background from "../../../public/assets/Background.svg"
import { Line } from 'react-chartjs-2';


const News = () => {
  return (
    <>
            <div
                className="bg-slate-400 h-full bg-cover bg-center text-white"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Background})`,
                }}
            >
                <Navbar />
                <div className="w-full min-h-screen pt-24 mb-20">
                  <div className='flex justify-center gap-5'>
                      <div className='bg-[#4E4E4E] w-[50em] h-[40em] flex items-end px-8 py-9 hover:scale-95 transform transition duration-300 ease-out'>
                        <div>
                          <h3 className='text-base'>Craig Bator - 27 Dec 2020</h3>
                          <h3 className='font-bold text-4xl'>Massive Forest Fires Ravage Indonesia, <br /> 
                          Blanketing Cities in Smoke</h3>
                        </div>
                      </div>
                      <div className=''>
                        <div className='flex gap-5 mb-5'>
                          <div className='w-[15em] h-[19em] bg-[#767676] flex items-end px-4 py-2 hover:scale-95 transform transition duration-300 ease-out'>
                              <div>
                                  <h3 className='text-xs'>Craig Bator - 27 Dec 2020</h3>
                                  <h3 className='font-bold text-base'>Climate Change Fuels Devastating <br />
                                  Wildfires in California</h3>
                            </div>
                          </div>
                          <div className='w-[15em] h-[19em] bg-[#767676] flex items-end px-4 py-2 hover:scale-95 transform transition duration-300 ease-out'>
                              <div>
                                  <h3 className='text-xs'>Craig Bator - 27 Dec 2020</h3>
                                  <h3 className='font-bold text-base'>Climate Change Fuels Devastating <br />
                                  Wildfires in California</h3>
                              </div>
                          </div>
                        </div>
                        <div className='w-[31.5em] h-[19.5em] bg-[#767676] flex items-end px-8 py-9 hover:scale-95 transform transition duration-300 ease-out'>
                          <div>
                            <h3 className='text-base'>Craig Bator - 27 Dec 2020</h3>
                            <h3 className='font-bold text-xl'>Siberia Engulfed by Record-Breaking <br />
                            Wildfires, Threatening Permafrost</h3>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
                <Footer />
            </div>
        </>
  )
}

export default News
