import { Header } from "./header"
import "../App.css"
import arrow from "../assets/arrow.svg";
import rect from "../assets/rect.svg";
import theme from "../assets/theme.png";
import foodSitePNG from "../assets/food-site.png";
import elctroSitePNG from "../assets/elctro-site.png";
import aiSitePng from "../assets/website-builder-site.png"
// Home page
export function Home(){
    return (
        <>
        <title>Home</title>
        <Header/>
        <div className="fixed inset-0 -z-1 pointer-events-none w-full">
            <div className="absolute left-1/2 top-20 -translate-x-1/2 w-245 h-115 bg-linear-to-tr from-violet-800/40 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute right-12 bottom-10 w-105 h-55 bg-linear-to-bl from-fuchsia-700/40 to-transparent rounded-full blur-2xl "></div>
        </div>
        
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


        <div className=" mt-10 relative z-60 flex w-full justify-center items-center p-3">
                <div className=" w-full p-2 lg:w-4xl xl:w-5xl h-92 pt-7 flex justify-center items-center rounded-t-xl border-2 border-b-0 border-indigo-900">
                    <div className=" lg:w-220 xl:w-250 h-92 w-full rounded-t-xl">
                         <img className=" w-full h-full object-fit rounded-t-xl" src={theme} alt="" />              
                    </div>
                </div>
        </div>

        <div className="ourCreation relative z-60 mt-30 flex items-center justify-center flex-col gap-3 px-4">
            <h1 className=" font-bold  text-[9vw]  sm:text-5xl text-white text-center">Our latest creation</h1>
            <div className=" max-w-130 text-center">
            <p className="font-semibold text-28  text-gray-600">A visual collection of our most recent works - each piece crafted with intention, emotion, and style.</p>
            </div>
        </div>

        <div className="ourCreationDiv relative mt-15 flex gap-3 justify-center h-120 px-8">
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

        <div className="aboutOurAppHeading relative z-60 mt-30 flex items-center justify-center flex-col gap-3 px-4">
            <h1 className=" font-bold  text-[9vw]  sm:text-5xl text-white text-center">About Our App</h1>
            <div className=" max-w-130 text-center">
            <p className="font-semibold text-28  text-gray-600">A visual collection of our most recent works - each piece crafted with intention, emotion, and style.</p>
            </div>
        </div>

        <div className="aboutOurApp relative z-60 mt-8 lg:flex lg:justify-center gap-10 h-auto grid sm:grid-cols-2 grid-cols-1 px-16">

            <div className="lg:max-w-2xl lg:w-80 sm:w-60 w-full h-full flex justify-center gap-4 flex-col">
                <div className="w-12 h-12 bg-red-600 rounded-lg"></div>
                <div className="flex flex-col">
                    <h1 className=" text-white font-semibold text-lg">Lightning-Fast Performance</h1>
                    <div className=" lg:max-w-60">
                        <p className="font-semibold text-28  text-gray-600">Built with speed — minimal load times and optimized.</p>
                    </div>
                </div>
            </div>

            <div className="lg:max-w-2xl sm:w-60 w-full lg:w-90 h-full sm:flex items-center gap-8">
                <div className=" sm:h-full sm:w-1/250 w-full h-1/250 bg-blue-900"></div>
                <div className=" flex flex-col mt-8 sm:mt-0">
                    <div className="w-12 h-12 bg-red-600 rounded-lg"></div>
                    <div>
                        <h1 className=" text-white font-semibold text-lg">Lightning-Fast Performance</h1>
                        <div className=" max-w-60">
                            <p className="font-semibold text-28  text-gray-600">Built with speed — minimal load times and optimized.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:max-w-2xl sm:w-60 w-full lg:w-90 h-full sm:flex items-center gap-8">
                <div className=" lg:h-full lg:block lg:w-1/250 w-full h-1/250 sm:hidden bg-blue-900"></div>
                <div className=" flex flex-col mt-8 sm:mt-0">
                    <div className="w-12 h-12 bg-red-600 rounded-lg"></div>
                    <div>
                        <h1 className=" text-white font-semibold text-lg">Lightning-Fast Performance</h1>
                        <div className=" max-w-60">
                            <p className="font-semibold text-28  text-gray-600">Built with speed — minimal load times and optimized.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div className="aboutOurAppHeading relative z-60 mt-30 flex items-center justify-center flex-col gap-3 px-4">
            <h1 className=" font-bold text-[9vw]  sm:text-5xl text-white text-center">Get in touch</h1>
            <div className=" max-w-130 text-center">
            <p className="font-semibold text-28  text-gray-600">A visual collection of our most recent works - each piece crafted with intention, emotion, and style.</p>
            </div>
        </div>

        <div className="getInfoBox relative mt-10 flex justify-center px-8 w-full mb-10">
            <div className=" sm:max-w-200 h-auto w-full">
                <form>
                    <div className="inputBox grid grid-cols-1 sm:flex gap-5 justify-center w-full">
                        <div className=" flex flex-col sm:w-[50%]">
                            <label htmlFor="nameBox" className=" text-slate-200 mb-2 font-semibold">Your name</label>
                            <input type="text" id="nameBox" className=" text-white   py-2 rounded-lg pl-3 border border-slate-800" placeholder="Enter your name" />
                        </div>

                        <div className=" flex flex-col sm:w-[50%]">
                            <label htmlFor="emailBox" className=" text-slate-200 mb-2 font-semibold">Email id</label>
                            <input type="text" id="emailBox" className=" text-white  py-2 rounded-lg pl-3 border border-slate-800" placeholder="Enter your Email" />
                        </div>  
                    </div>
                    <div className=" flex flex-col w-full">
                            <label htmlFor="messageBox" className=" text-slate-200 mb-2 mt-4 font-semibold">Message</label>
                            <input type="text" id="messageBox" className=" text-white py-2 pb-32 rounded-lg pl-3 border border-slate-800" placeholder="Enter your message" />
                    </div>
                    <div className="sumbit mt-5">
                        <button className=" px-12 cursor-pointer py-2 text-white bg-indigo-600 rounded-3xl text-lg font-semibold">Submit</button>
                    </div>  
                </form>
            </div>
        </div>

        
        </>
    )
}