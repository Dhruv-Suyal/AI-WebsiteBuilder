import logo from '../assets/logo.png'


export function Header(){
    return (
    <>
    <div className=" bg-red-400 w-full h-32 flex">
        <div className=" ml-8 Logo bg-amber-300 w-60 h-full">
            <img className=' object-contain w-full h-full' src={logo} alt="" />
        </div>
        <div className="Pagelinks flex gap-3">
            <div><a href="/">Creations</a></div>
            <div><a href="/">About</a></div>
            <div><a href="/">Testimonials</a></div>
            <div><a href="/">Contact</a></div>
        </div>
        <div className="headerButton"></div>
    </div>
    </>
    )
}