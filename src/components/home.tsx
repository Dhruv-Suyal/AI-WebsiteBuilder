import { Header } from "./header"
import arrow from "../assets/arrow.svg";
import rect from "../assets/rect.svg";
import theme from "../assets/theme.png";
import foodSitePNG from "../assets/food-site.png";
import elctroSitePNG from "../assets/elctro-site.png";
import aiSitePng from "../assets/website-builder-site.png"

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


        <div className=" mt-10 relative z-60 flex w-screen justify-center items-center p-3">
                <div className=" w-full p-2 lg:w-4xl xl:w-5xl h-92 pt-7 flex justify-center items-center rounded-t-xl border-2 border-b-0 border-indigo-900">
                    <div className=" lg:w-220 xl:w-250 h-92 w-full rounded-t-xl">
                         <img className=" w-full h-full object-fit rounded-t-xl" src={theme} alt="" />              
                    </div>
                </div>
        </div>

        <div className="ourCreation relative z-60 mt-30 flex items-center justify-center flex-col gap-3">
            <h1 className=" font-semibold  text-5xl text-white">Our latest creation</h1>
            <div className=" max-w-130 text-center">
            <p className="font-semibold text-28  text-gray-600">A visual collection of our most recent works - each piece crafted with intention, emotion, and style.</p>
            </div>
        </div>

        <div className="ourCreationDiv relative mt-20 flex gap-3 justify-center h-120">
            <div className="firstCreation h-full rounded-2xl lg:w-175">
                <img className=" w-full h-full rounded-2xl object-fit" src={foodSitePNG} alt="" />
            </div>
            <div className="2ndCreation h-full rounded-2xl lg:w-50">
                <img className=" w-full h-full rounded-2xl object-cover" src={elctroSitePNG} alt="" />
            </div>
            <div className="3rdCreation h-full rounded-2xl lg:w-50">
                <img className=" w-full h-full rounded-2xl object-cover" src={aiSitePng} alt="" />
            </div>

        </div>
        
        </>
    )
}