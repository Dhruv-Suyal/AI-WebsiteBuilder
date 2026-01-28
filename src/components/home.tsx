import { Header } from "./header"

export function Home(){
    return (
        <>
        <title>Home</title>
        <Header/>
        <div className=" flex items-center justify-center">
        <div className="fixed -top-180 sm:-top-160 md:-top-270 h-260 w-250 md:h-400 md:w-300 lg:-top-240 z-50 lg:h-400 xl:h-400 xl:w-450 lg:w-350 overflow-x-hidden rounded-b-[1800px] bg-[radial-gradient(circle,var(--color-black)_40%,var(--color-indigo-700)_80%)]"></div>
        </div>
        </>
    )
}