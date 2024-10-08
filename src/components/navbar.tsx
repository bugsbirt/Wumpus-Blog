import { useRouter } from "next/navigation"

export function Navbarr() {

    const router = useRouter()

    return (
        

        <nav className="glassmorphism fixed w-full z-20 top-0 start-0 border-b border-zinc-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a onClick={ () => router.push("/") } className="flex items-center space-x-3 rtl:space-x-reverse clickable">
            <img src="https://utfs.io/f/786bdb1f-2aa6-4566-8396-0487e72b05a3-t2zciv.gif" className="h-8 nograb no-select" alt="wumpy dumpies eating thingy bignsofisodfiosdf" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white no-select">Wumpus Blog</span>
        </a>
        <a href="https://discord.gg/cTsCYmdg6z" className="glassmorphism inline-flex items-center space-x-2 px-4 py-2 no-select bg-black border border-zinc-900 rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-zinc-950 focus:ring-2 focus:ring-zinc-950 focus:ring-opacity-50">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="white">
            <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011a.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0a8 8 0 0 0-.412-.833a.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02a.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595a.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085a8 8 0 0 1-1.249.594a.05.05 0 0 0-.03.03a.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019a13.2 13.2 0 0 0 4.001-2.02a.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613c0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613c0 .888-.631 1.612-1.438 1.612"/>
        </svg>
        <span>Submit</span>
        </a>

        </div>
        </nav>

    )
}