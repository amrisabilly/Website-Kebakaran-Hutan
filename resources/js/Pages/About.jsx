import React from 'react'
import Background from "../../../public/assets/Background.svg";
import Navbar from "../Components/Navbar";
import Footer from '@/Components/Footer'
import mahendra from "../../../public/assets/mahendra.png"

const About = () => {
  return (
    <>
            <div
                className="bg-slate-400 h-full bg-cover bg-center text-white"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Background})`,
                }}
            >
                <Navbar />
                <div className="w-full min-h-screen pt-24 flex justify-evenly gap-5 p-[2rem]">
                    <div className='w-[33em] h-[50em] px-9 py-6' >
                      <h1 className='font-bold text-4xl mb-5'>Our <span className='text-red-600'>Team</span></h1>
                      <div className='w-[20em]'>
                      <h3 className='mb-4 text-lg'>Kami dari kelompok 6 beranggotakan bima bima bima, miftah disini kami membuat website mengenai kebakaran hutan</h3>
                      </div>
                      <div className='grid grid-cols-2 gap-8 items-center w-[20em]'>
                        <div className='bg-white/20 rounded-md w-[11em] h-[15em] p-4 hover:scale-105 transform transition duration-300 ease-out'>
                          <div className='bg-cover w-[9em] h-[10em] rounded-md mb-1' 
                            style={{
                                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${mahendra})`,
                            }}
                          ></div>
                          <h3 className='font-medium'>Alif Bima Mahendra</h3>
                          <h3 className='text-white/40'>Fullstack Developer</h3>
                        </div>
                        <div className='bg-white/20 rounded-md w-[11em] h-[15em] p-4 ms-12 hover:scale-105 transform transition duration-300 ease-out'>
                          <div className='bg-cover w-[9em] h-[10em] rounded-md mb-1'
                            style={{
                              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${mahendra})`,
                            }}
                          ></div>
                          <h3 className='font-medium'>Alif Bima Mahendra</h3>
                          <h3 className='text-white/40'>FrontEnd Developer</h3>
                        </div>
                        <div className='bg-white/20 rounded-md w-[11em] h-[15em] p-4 hover:scale-105 transform transition duration-300 ease-out'>
                          <div className='bg-cover w-[9em] h-[10em] rounded-md mb-1'
                            style={{
                              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${mahendra})`,
                            }}
                          ></div>
                          <h3 className='font-medium'>Alif Bima Mahendra</h3>
                          <h3 className='text-white/40'>Backend Developer</h3>
                        </div>
                        <div className='bg-white/20 rounded-md w-[11em] h-[15em] p-4 ms-12 hover:scale-105 transform transition duration-300 ease-out'>
                          <div className='bg-cover w-[9em] h-[10em] rounded-md mb-1'
                          style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${mahendra})`,
                          }}
                          ></div>
                          <h3 className='font-medium'>Name One</h3>
                          <h3 className='text-white/40'>Backend Developer</h3>
                        </div>
                      </div>
                      
                    </div>
                    <div className='w-[50em] mt-[14em] h-[40em] py-5 px-5 '>
                      <h1 className='font-bold text-4xl mb-5'>About Website</h1>
                      <h3 className='mb-9 text-justify text-base'>
                      Selamat datang di website kami, sumber informasi terpercaya tentang kebakaran hutan. Situs ini didedikasikan untuk memberikan edukasi, berita terbaru,
                      serta solusi terkait kebakaran hutan yang terjadi di seluruh dunia. Kebakaran hutan merupakan ancaman serius yang berdampak pada kehidupan manusia, ekosistem, dan keanekaragaman hayati.
                      Fenomena ini sering kali diakibatkan oleh berbagai faktor, baik alami maupun ulah manusia, yang memicu kerusakan lingkungan serta mempengaruhi kualitas udara.

                      Melalui website ini, kami berharap dapat meningkatkan kesadaran akan pentingnya menjaga kelestarian hutan dan lingkungan. Di sini, Anda akan menemukan informasi tentang penyebab kebakaran hutan,
                      dampak yang ditimbulkan bagi kesehatan manusia dan hewan, serta cara-cara yang bisa kita lakukan untuk mencegahnya.
                      Kami juga menyediakan panduan tentang bagaimana masyarakat dapat berkontribusi dalam mengurangi risiko kebakaran hutan melalui tindakan-tindakan sederhana.

                      Mari bersama-sama menjaga kelestarian bumi dan mencegah bencana kebakaran hutan demi generasi mendatang.</h3>
                    </div>
                </div>
                <Footer />
            </div>
        </>
  )
}

export default About
