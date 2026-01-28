import { Header } from "./header"

export function Home(){
    return (
        <>
        <title>Home</title>
        <Header/>
        <div className="absolute -top-240 -left-18 z-50 h-400 w-420 overflow-x-hidden rounded-b-[1800px] bg-[radial-gradient(circle,var(--color-black)_30%,var(--color-indigo-700)_80%)]"></div>
        </>
    )
}