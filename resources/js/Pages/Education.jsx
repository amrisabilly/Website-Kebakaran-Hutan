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
                {/* First Column */}
                <div className='container w-100% pt-14 px-14'>
                    <p className='text-[63px] font-bold'>Education</p>
                    <br />
                </div>
                
                {/* Second Column */}
                <div className='grid grid-cols-7 gap-40'>
                    {/* First Row */}
                    <div className='container col-span-3  h-[770px]  ps-14'>
                       <div className='grid grid-cols-2 gap-12'>
                            <div className='container h-[200px] grid grid-flow-col auto-cols-max gap-4'>
                                {/* Vertical Line */}
                                <div className='h-[229px] w-1 bg-white'></div>
                                {/* Content */}
                                <div className='container '>
                                    <p className='text-[60px]'>01</p>
                                    <br />
                                    <p className='text-[28px]'>Definition</p>
                                    <br />
                                    <p className='w-[230px]'>Definition of Forest and Land Fires</p>
                                </div>
                            </div>
                            <div className='container   grid grid-flow-col auto-cols-max gap-4'>
                                {/* Vertical Line */}
                                <div className='h-[229px] w-1 bg-white'></div>
                                {/* Content */}
                                <div className='container '>
                                    <p className='text-[60px]'>02</p>
                                    <br />
                                    <p className='text-[28px]'>Reason</p>
                                    <br />
                                    <p className='w-[230px]'>Cause of Forest and Land Fires</p>
                                </div>
                            </div>
                            <div className='container   grid grid-flow-col auto-cols-max gap-4'>
                                {/* Vertical Line */}
                                <div className='h-[229px] w-1 bg-white'></div>
                                {/* Content */}
                                <div className='container '>
                                    <p className='text-[60px]'>03</p>
                                    <br />
                                    <p className='text-[28px]'>Countermeasures</p>
                                    <br />
                                    <p className='w-[230px]'>Forest and Land Fires Prevetion and Control</p>
                                </div>
                            </div>
                            <div className='container   grid grid-flow-col auto-cols-max gap-4'>
                                {/* Vertical Line */}
                                <div className='h-[229px] w-1 bg-white'></div>
                                {/* Content */}
                                <div className='container '>
                                    <p className='text-[60px]'>04</p>
                                    <br />
                                    <p className='text-[28px]'>Impact</p>
                                    <br />
                                    <p className='w-[230px]'>Impact of Forest and Land Fires</p>
                                </div>
                            </div>
                            <div className='container   grid grid-flow-col auto-cols-max gap-4'>
                                {/* Vertical Line */}
                                <div className='h-[229px] w-1 bg-white'></div>
                                {/* Content */}
                                <div className='container '>
                                    <p className='text-[60px]'>05</p>
                                    <br />
                                    <p className='text-[28px]'>Mitigation</p>
                                    <br />
                                    <p className='w-[230px]'>Mitigation of Forest and Land Fires</p>
                                </div>
                            </div>
                       </div>
                    </div>
                    {/* Second Row */}
                    <div className='col-span-4 container h-[770px]  '>
                        <p className='text-[50px]'>Kebakaran <span className='text-red-600'>Hutan</span></p>
                        <br />
                        <p className='text-[18px]'>Kebakaran hutan merupakan peristiwa kebakaran yang terjadi di kawasan hutan, lahan, atau padang rumput, yang dapat disebabkan oleh faktor alami maupun aktivitas manusia. Beberapa penyebab utama kebakaran hutan meliputi pembukaan lahan secara ilegal dengan cara membakar, kelalaian dalam pengelolaan api, serta faktor cuaca ekstrem seperti kemarau panjang dan suhu yang sangat tinggi. Selain itu, perubahan iklim yang semakin tidak menentu turut memperburuk kondisi ini. Kebakaran hutan tidak hanya merusak lingkungan, tetapi juga mengancam kehidupan manusia dengan mengeluarkan asap yang berbahaya bagi kesehatan, serta menurunkan kualitas udara di area yang terdampak. Kehilangan keanekaragaman hayati dan kerusakan ekosistem yang ditinggalkan oleh kebakaran hutan dapat berlangsung dalam jangka waktu yang sangat lama dan mempengaruhi kehidupan flora dan fauna yang bergantung pada habitat tersebut.</p>
                        <br />
                        <p className='text-[18px]'>Dampak dari kebakaran hutan sangat besar, tidak hanya dalam hal kerusakan fisik, tetapi juga dalam aspek sosial dan ekonomi. Untuk menanggulangi kebakaran hutan, pemerintah dan masyarakat perlu bekerjasama dalam melakukan pencegahan yang lebih efektif, seperti membatasi penggunaan api untuk pembukaan lahan dan meningkatkan kesadaran akan pentingnya menjaga kelestarian hutan. Penggunaan teknologi canggih seperti pemantauan satelit untuk mendeteksi kebakaran sejak dini juga dapat membantu dalam pengendalian. Selain itu, mitigasi kebakaran hutan dapat dilakukan dengan reforestasi, yaitu penanaman kembali pohon-pohon di area yang terbakar, serta penerapan metode pertanian yang ramah lingkungan. Keterlibatan masyarakat juga sangat penting, dengan memberikan edukasi mengenai bahaya kebakaran hutan dan melibatkan mereka dalam kegiatan pencegahan. Langkah-langkah ini diharapkan dapat mengurangi intensitas kebakaran hutan dan dampaknya di masa depan.</p>
                    </div>
                </div>
                
                <Footer />
            </div>
  )
}

export default Education
