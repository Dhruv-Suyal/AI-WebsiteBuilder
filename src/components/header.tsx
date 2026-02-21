import logo from '../assets/logo.png'
import hamBurger from '../assets/hamburger.svg'

//Header for website
export function Header(){
    return (
    <>
    <nav className='w-full h-18 sticky top-0 z-90 backdrop-blur'>
        <div className=" w-full h-full absolute z-0 "></div>
        <div className='flex justify-between lg:px-32 px-8 relative z-60 h-full'>
            <div className="Logo w-30 h-full">
                <a href="/">
                    <img className=' object-contain w-full h-full' src={logo} alt="" />
                </a>
            </div>
            <div className="hidden Pagelinks lg:flex gap-8 items-center text-white font-semibold">
                <div className=' hover:text-gray-200'><a href="/">Creations</a></div>
                <div className=' hover:text-gray-200'><a href="/">About</a></div>
                <div className=' hover:text-gray-200'><a href="/">Testimonials</a></div>
                <div className=' hover:text-gray-200'><a href="/">Contact</a></div>
            </div>
            <div className="hidden headerButton text-white font-semibold lg:flex gap-3 items-center">
                <button className=' bg-blue-700 w-34 h-10 rounded-lg cursor-pointer hover:bg-blue-800'>Get started</button>
                <button className=' w-24 h-10 rounded-lg border border-white cursor-pointer hover:bg-slate-300/20'>Login</button>
            </div>
            <div className="headerButton lg:hidden h-8 w-10 my-auto">
                <img className=' w-full h-full object-contain' src={hamBurger} alt="" />
            </div>
        </div>
    </nav>
    </>
    )
}