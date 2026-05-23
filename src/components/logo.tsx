// Util Imports
import { cn } from '@/lib/utils'

const Logo = ({ className }: { className?: string }) => {
    return (
        <div className={cn('flex items-center gap-2.5', className)}>
            <svg viewBox="0 0 20 20" width='32' height='32' xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> <style>{".cls-1{fill:none;}.cls-2{fill:#024702;}.cls-3{fill:#c6e655;}.cls-4{fill:#190d15;}"}</style> </defs> <g data-name="Layer 2" id="Layer_2"> <g data-name="Layer 1" id="Layer_1-2"> <rect className="cls-1" height="20" width="20"></rect> <path className="cls-2" d="M1,6.5H19a0,0,0,0,1,0,0v4.38a7,7,0,0,1-7,7H8a7,7,0,0,1-7-7V6.5A0,0,0,0,1,1,6.5Z"></path> <path className="cls-3" d="M5,10H3A3.35,3.35,0,0,1,3.67,8,1.41,1.41,0,0,0,4,7a1.41,1.41,0,0,0-.33-.95A3.4,3.4,0,0,1,3,4,3.35,3.35,0,0,1,3.67,2,1.41,1.41,0,0,0,4,1H6a3.41,3.41,0,0,1-.66,2.06A1.42,1.42,0,0,0,5,4a1.43,1.43,0,0,0,.34,1A3.36,3.36,0,0,1,6,7a3.41,3.41,0,0,1-.66,2.06A1.42,1.42,0,0,0,5,10Z"></path> <path className="cls-3" d="M9,10H7A3.35,3.35,0,0,1,7.67,8,1.41,1.41,0,0,0,8,7a1.41,1.41,0,0,0-.33-.95A3.4,3.4,0,0,1,7,4,3.35,3.35,0,0,1,7.67,2,1.41,1.41,0,0,0,8,1h2a3.41,3.41,0,0,1-.66,2.06A1.42,1.42,0,0,0,9,4a1.43,1.43,0,0,0,.34,1A3.36,3.36,0,0,1,10,7a3.41,3.41,0,0,1-.66,2.06A1.42,1.42,0,0,0,9,10Z"></path> <path className="cls-4" d="M8,7a1.41,1.41,0,0,1-.33,1A3.35,3.35,0,0,0,7,10H9a1.42,1.42,0,0,1,.34-.95A3.41,3.41,0,0,0,10,7a4.22,4.22,0,0,0,0-.52h-2A1.26,1.26,0,0,1,8,7Z"></path> <path className="cls-4" d="M4,7a1.41,1.41,0,0,1-.33,1A3.35,3.35,0,0,0,3,10H5a1.42,1.42,0,0,1,.34-.95A3.41,3.41,0,0,0,6,7,4.22,4.22,0,0,0,6,6.5h-2A1.26,1.26,0,0,1,4,7Z"></path> </g> </g> </g></svg>
            <span className='text-xl md:text-[22px] font-extrabold text-[#c6e655] '>FoodHub</span>
        </div>
    )
}

export default Logo;


{/* <svg viewBox="0 0 1012 1012" width='32' height='32' className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M359.8 368.7c-83.5 37-150 103.4-187.1 186.9-5.6 12.6 0.1 27.3 12.7 32.9 3.3 1.5 6.7 2.2 10.1 2.2 9.6 0 18.7-5.5 22.8-14.8 32.1-72.2 89.5-129.6 161.7-161.6 12.6-5.6 18.3-20.3 12.7-32.9-5.5-12.6-20.3-18.3-32.9-12.7z m214.6-108.5c7.2-11.8 11.6-25.5 11.6-40.3 0-42.8-34.7-77.4-77.4-77.4-42.8 0-77.4 34.7-77.4 77.4 0 14.8 4.4 28.6 11.6 40.3-216.7 31.9-383.5 219-383.5 444.4v54.1c0 13.8 11.2 25 25 25H933c13.8 0 25-11.2 25-25v-54.1c-0.1-225.4-167-412.4-383.6-444.4zM908 733.7H109.2v-29.1c0-220.2 179.2-399.3 399.4-399.3S908 484.4 908 704.6v29.1z m24.9 100.2H84.2c-13.8 0-25 11.2-25 25s11.2 25 25 25h848.7c13.8 0 25-11.2 25-25s-11.2-25-25-25z" fill="#0000FF"></path></g></svg> */}