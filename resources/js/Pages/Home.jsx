import Navbar from "../Components/Navbar";
import Background from "../../../public/assets/Background.svg";
import Footer from "@/Components/Footer";

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
                    <h3 className="text-[20px] mb-5">Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit, sed do eiusmod
                    tempor <br /> incididunt ut labore et dolore magna aliqua.</h3>
                    <button className="rounded-2xl border-2 border-white px-4 py-2 transition duration-300 hover:text-red-600 hover:border-red-600">Explore Here</button>
                </div>
                <Footer />
            </div>
        </>
    );
}
