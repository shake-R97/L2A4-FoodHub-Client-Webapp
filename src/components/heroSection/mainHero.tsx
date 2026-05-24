"use client"
import Image from 'next/image'
import { useRef, useState } from 'react'

const mainHeroImg = [
    "/burger1.png",
    "/bacon.webp",
    "/cake.webp",
    "/chicken-curry.webp",
    "/chicken-meat-mix-biryani.webp",
    "/chicken-potato.webp",
    "/fish-fry.webp",
    "/goat-meat.webp",
    "/ice-cream.webp",
    "/pizza.webp",
    "/steak-meat.webp"
]

export default function MainHero() {

    // random img select
    const [heroImg] = useState(()=>{
      return mainHeroImg[Math.floor((Math.random() * mainHeroImg.length))]  
    })

    const greenPanelRef = useRef<HTMLDivElement | null>(null);
    const glowRef = useRef<HTMLDivElement | null>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!greenPanelRef.current || !glowRef.current) return;
        const rect = greenPanelRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        glowRef.current.style.opacity = "1";
        glowRef.current.style.background = `
            radial-gradient(600px circle at ${x}px ${y}px,
                rgba(166,230,80,0.08), transparent 40%),
            radial-gradient(300px circle at ${x}px ${y}px,
                rgba(198,230,85,0.06), transparent 50%),
            radial-gradient(120px circle at ${x}px ${y}px,
                rgba(255,255,255,0.07), transparent 70%)
        `;
    };

     const handleMouseLeave = () => {
        if(!glowRef.current) return;
        glowRef.current.style.opacity = "0";
     }

    return (
        <div
            onMouseMove={handleMouseMove}
            className="group relative flex flex-col lg:flex-row min-h-screen overflow-hidden">
            {/* left panel  */}
            <div className="hero-left-panel flex flex-1 flex-col  justify-center px-8 py-13 md:py-0 lg:px-19 lg:py-12 z-10 transition-all duration-500 ease-out  group-hover:-translate-y-2 group-hover:scale-[1.01]">
                <h1 
                style={{fontSize: 'clamp(1.9rem, 3.8vw, 3.5rem)'}}
                className="font-bold text-[#024A02] mb-3">GoEat On FoodHub</h1>
                <h1
                style={{fontSize: 'clamp(1.3rem, 2vw, 1.875rem)'}}
                 className="text-[#024602] font-semibold">
                    Let&apos;s Take Care Your Hunger!
                </h1>

                <p 
                style={{fontSize: 'clamp(.960rem, 2vw, 1.275rem)'}}
                className="text-pretty text-[#024A02] mt-3">To order food, sign up as User,<br/> And for Provider, sign up as a Provider.</p>
                
                <div>

                    <p className="text-[#024A02] text-[15px]  mt-3 mb-3">Search for Restaurants and stores delivering near you!</p>
                    
                    <div className="search-row flex flex-col sm:flex-row  gap-3 max-w-sm sm:max-w-md">

                    <input
                        type="text"
                        placeholder="Enter your address ('Gulshan')etc"
                        className="flex-1 rounded-full px-5 py-3 bg-[#024602] border border-[#c6e655] text-[#c6e655]"
                    />
                    <button className="bg-[#024602] text-[#c6e655] font-semibold rounded-full px-7 py-3 whitespace-nowrap">
                        Search
                    </button>
                </div>
                </div>
            </div>

            {/* Right panel container 2 */}
            <div
                ref={greenPanelRef}
                onMouseLeave={handleMouseLeave}
                className="diagonal-clip relative overflow-hidden w-full h-150 md:h-145 lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:h-auto lg:w-[52%] bg-[#024602] flex items-center justify-center   transition-all duration-700 ease-out  group-hover:-translate-y-3 group-hover:scale-[1.02] group-hover:shadow-[0_0_80px_rgba(34,197,94,0.35)] will-change-transform"
            >
                {/* glow light on cursor div */}
                <div
                    ref={glowRef}
                    className="pointer-events-none absolute inset-0 z-10"
                    style={{
                        mixBlendMode: "screen",
                        opacity: 0,
                    }}
                />

                {/* content */}
                <div className="relative z-20 text-center lg:pl-16 pt-16 lg:pt-0">
                    <p className="text-white text-shadow-lg/100 text-3xl  lg:text-5xl font-black uppercase leading-tight">
                        STOP EATING LEFTOVERS
                    </p>

                    {/* image div */}
                    <div className='mt-4 flex justify-center'>

                        {/* floating wrapper div */}
                        <div className='animate-floating'>
                            {/* your image goes here */}
                            <Image
                                src={heroImg}
                                alt="Food"
                                width={340}
                                height={340}
                                className="w-46 md:w-50 lg:w-80 transition-all duration-600 group-hover:rotate-2 group-hover:scale-105"
                                priority
                            />
                        </div>
                    </div>

                    <p className="text-white text-3xl lg:text-5xl font-black uppercase leading-tight">EAT FRESH ANYWHERE ANYTIME!</p>
                </div>
            </div>
        </div>
    )
}
