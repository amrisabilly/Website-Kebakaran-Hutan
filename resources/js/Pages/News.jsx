import React from 'react'
import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer'
import Background from "../../../public/assets/Background.svg"
import fire1 from "../../../public/assets/fire1.jpg"
import fire2 from "../../../public/assets/fire2.jpg"
import fire3 from "../../../public/assets/fire3.jpeg"
import fire4 from "../../../public/assets/fire4.jpg"
import arrow from "../../../public/assets/arrowright.svg"


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
                      <div className='bg-cover w-[50em] h-[40em] flex items-end px-8 py-9 hover:scale-95 transform transition duration-300 ease-out'
                        style={{
                          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${fire2})`,
                          }}
                      >
                        <div>
                          <h3 className='text-base'>Bali - 18 Oktober 2024</h3>
                          <a href="https://denpasar.kompas.com/read/2024/10/18/174834178/kebakaran-hutan-gunung-agung-meluas-hingga-145-hektar-bpbd-rancang-hujan" target='_blank'>
                            <div className='flex gap-6 cursor-pointer'>
                              <h3 className='font-bold text-4xl'>Kebakaran Hutan Gunung Agung Meluas hingga 145 Hektar, BPBD Rancang Hujan Buatan
                              </h3>
                              <img src={arrow} alt="" className='w-10'/>
                            </div>  
                          </a>
                        </div>
                      </div>
                      <div className=''>
                        <div className='flex gap-5 mb-5'>
                          <div className='w-[15em] h-[19em] bg-cover flex items-end px-4 py-2 hover:scale-95 transform transition duration-300 ease-out '
                            style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${fire1})`,
                            }}
                          >
                              <div>
                                  <h3 className='text-xs'>Lampung - 15 Oktober 2024</h3>
                                  <a href="https://regional.kompas.com/read/2024/10/16/150450578/350-hektar-hutan-tn-way-kambas-terbakar-trenggiling-ditemukan-hangus" target='_blank'>
                                    <div className='cursor-pointer flex gap-2'>
                                      <h3 className='font-bold text-base'>350 Hektar Hutan TN Way Kambas Terbakar</h3>
                                      <img src={arrow} alt="" className='w-4'/>
                                    </div>
                                  </a>
                            </div>
                          </div>
                          <div className='w-[15em] h-[19em] bg-cover flex items-end px-4 py-2 hover:scale-95 transform transition duration-300 ease-out'
                          style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${fire3})`,
                            }}
                          >
                              <div>
                                  <h3 className='text-xs'>Purworejo - 30 September 2024</h3>
                                  <a href="https://regional.kompas.com/read/2024/09/30/095628978/kebakaran-hutan-di-purworejo-hanguskan-6-hektar-lahan-jati" target='_blank'>
                                  <div className='flex gap-2'>
                                    <h3 className='font-bold text-base'>Kebakaran Hutan di Purworejo </h3>
                                    <img src={arrow} alt="" className='w-3'/>
                                  </div>
                                  </a>
                              </div>
                          </div>
                        </div>
                        <div className='w-[31.5em] h-[19.5em] bg-cover flex items-end px-8 py-9 hover:scale-95 transform transition duration-300 ease-out'
                        style={{
                          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${fire4})`,
                          }}
                        >
                          <div>
                            <h3 className='text-base'>Kalimantan - 19 September 2024</h3>
                            <a href="https://regional.kompas.com/read/2024/09/19/102623378/belasan-hektar-lahan-di-kalsel-terbakar-pemadaman-terkendala-angin" target='_blank'>
                            <div className='flex cursor-pointer gap-10'>
                              <h3 className='font-bold text-xl'>Belasan Hektar Lahan di Kalsel Terbakar</h3>
                              <img src={arrow} alt="" className='w-4'/>
                            </div>
                            </a>
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
