import { Header } from "./header"
import arrow from "../assets/arrow.svg";
export function Home(){
    return (
        <>
        <title>Home</title>
        <Header/>
        <div className="flex items-center justify-center">
            <div className="fixed -top-180 sm:-top-160 md:-top-270 h-260 w-250 md:h-400 md:w-300 lg:-top-240 z-50 lg:h-400 xl:h-400 xl:w-450 lg:w-350 overflow-x-hidden rounded-b-[1800px] bg-[radial-gradient(circle,var(--color-black)_40%,var(--color-indigo-700)_80%)]">
            </div>
            <div className=" relative z-60 text-white flex-col items-center justify-center mt-48 md:w-3xl w-xl">
                <h1 className="font-bold md:text-6xl max-w-2xl md:mx-10 text-5xl mx-4 text-center">Build Websites Faster with AI</h1>
                <p className=" text-lg mx-4 font-normal mt-2 md:mx-10 text-center">Generate clean, production-ready websites using prompts, edit the code directly, and stay in full control.</p>
                <div className=" w-full flex items-center justify-center mt-6">
                 <button className=" px-10 py-3 bg-indigo-800 font-semibold rounded-xl cursor-pointer flex">Get Started
                <img className=" invert" src={arrow} alt="" />
                 </button>
                </div>
            </div>
            
        </div>
        
        </>
    )
}