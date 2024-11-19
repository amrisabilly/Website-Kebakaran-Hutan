import Navbar from "../Components/Navbar";
import Background from "../../../public/assets/Background.svg";
import Footer from "@/Components/Footer";
import { Chart as ChartJS } from "chart.js/auto";
import { Line, Bar } from 'react-chartjs-2'

const jumlah = [
    { "label": "Januari", "jumlah": 10 },
    { "label": "Februari", "jumlah": 15 },
    { "label": "Maret", "jumlah": 30 },
    { "label": "April", "jumlah": 20 },
    { "label": "Mei", "jumlah": 50 },
    { "label": "Juni", "jumlah": 15 },
    { "label": "Juli", "jumlah": 50 },
    { "label": "Agustus", "jumlah": 30 },
    { "label": "September", "jumlah": 85 },
    { "label": "Oktober", "jumlah": 20 },
    { "label": "November", "jumlah": 50 },
    { "label": "Desember", "jumlah": 20 }
]

export default function Home() {
    return (
        <>
            <div
                className="bg-slate-400 h-full bg-cover bg-center text-white"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Background})`,
                }}
            >
                <Navbar />
                <div className="w-full ps-14 pt-48 mb-60">
                    <h1 className="font-extrabold text-6xl mb-5">BURNING <br /> <span className="text-red-600">FOREST</span></h1>
                    <h3 className="text-[20px] mb-5">Kebakaran hutan menghancurkan ribuan hektar setiap tahun, <br />
                        mengancam ekosistem, satwa liar, dan kesehatan manusia. <br />
                        Dengan meningkatnya intensitas kebakaran akibat perubahan iklim <br />
                        dan aktivitas manusia, pemahaman akan penyebab dan pencegahannya menjadi <br />
                        sangat penting. Mari bersama menjaga alam untuk masa depan yang lebih baik.</h3>
                    <a href="/news" ><button className="rounded-2xl border-2 border-white px-4 py-2 transition duration-300 hover:text-red-600 hover:border-red-600"  >Explore Here</button></a>
                </div>
                <div className="w-full text-center">
                    <h2 className="font-extrabold text-6xl mb-5">BURNING <br /> <span className="text-red-600"> FOREST</span> </h2>
                </div>
                <div className="bg-gray-300 grid place-items-center mx-[10em] my-[2em] p-[2em] rounded-lg">
                    <Line
                        data={{
                            labels: jumlah.map((datak) => datak.label),
                            datasets: [{
                                label: 'Kebakaran Hutan',
                                data: jumlah.map((datak) => datak.jumlah),
                                fill: true, // Menambahkan isi area grafik
                                borderColor: '#ff4500',  // Merah Oranye untuk garis
                                backgroundColor: 'rgba(255, 69, 0, 0.2)', // Warna latar belakang dengan transparansi (overlay)
                                pointBackgroundColor: '#ff4500', // Warna titik
                                tension: 0.4 // Memperhalus garis
                            }]
                        }}
                        options={{
                            scales: {
                                x: {
                                    grid: {
                                        color: 'white', // Mengubah warna garis grid pada sumbu X menjadi putih
                                    },
                                },
                                y: {
                                    grid: {
                                        color: 'white', // Mengubah warna garis grid pada sumbu Y menjadi putih
                                    },
                                },
                            },
                            responsive: true,
                            plugins: {
                                legend: {
                                    position: 'top',
                                },
                                title: {
                                    display: true,
                                    text: 'Grafik Kebakaran Hutan',
                                },
                            },
                        }}
                    />
                </div>
                <Footer />
            </div>
        </>
    );
}
