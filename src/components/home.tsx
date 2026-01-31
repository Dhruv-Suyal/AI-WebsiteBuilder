import { Header } from "./header"
import arrow from "../assets/arrow.svg";
import rect from "../assets/rect.svg"
export function Home(){
    return (
        <>
        <title>Home</title>
        <Header/>
        <div className="flex items-center justify-center w-full h-full">
            <div className="absolute top-0 xl:w-full xl:h-full flex justify-center">
                <img className="w-full h-full object-contain xl:hidden" src={rect} alt="" />
                 <div className="xl:block absolute mx-auto -top-30 hidden w-[103%] z-50 h-full max-w-400 rounded-b-[1800px] bg-[radial-gradient(circle,var(--color-black)_35%,var(--color-indigo-700)_80%)]">
                </div>
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
            <div className=" mt-14 absolute z-60 flex w-full justify-center items-center">
                <div className=" w-4xl h-96 flex justify-center items-center rounded-xl border-2 border-indigo-900">
                    <div className=" w-210 h-84">
                        {/* <img src={rect} alt="" /> */}
                    </div>
                </div>
            </div>  
        
        </>
    )
}