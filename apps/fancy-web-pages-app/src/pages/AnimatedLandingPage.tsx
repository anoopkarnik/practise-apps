import React, { useState,useEffect } from 'react'
import { MdArrowCircleDown } from "react-icons/md";



export default function AnimatedLandingPage() {
  
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the window has been scrolled down 100 pixels
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className='main w-full dark '>
      <div className='home w-full h-screen relative'>
        <div id='navbar' className='w-full sticky top-0 flex items-center justify-between text-white z-10 px-14 py-4'>
          <div className='text-[40px] font-["Baskerville"]'>Significo</div>
          <div className='flex items-center justify-between gap-10 text-lg'> 
            <div>Solutions</div>
            <div>About</div>
            <div>Insights</div>
            <div>Team</div>
            <div>Career</div>
            <div className='text-black bg-orange-500 p-4'>Contact Us</div>
          </div>
        </div>
        <div className={`w-full h-screen absolute top-0 left-0 overflow-clip z-[3] transition-all duration-[10s] ${isScrolled? '':'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-0 h-0'} `}>
          <video autoPlay loop muted className='absolute w-[4000px] h-[4000px] overflow-clip top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src='https://cdn.significo.com/videos/significo-main-hero.mp4'/>
        </div>
        <div className='absolute bottom-10 left-0 px-14 text-left z-[4]'>
          We build big ideas.<br/>Software. Apps. Tools. <br/> For real people. Real <br/> lives.
        </div>
        <div className='absolute bottom-10 right-0 px-14  z-[4]'>
          <MdArrowCircleDown className='text-white text-8xl '/>
        </div>
        <div className='hidden text-2xl text-white top-36 text-center w-full'>
          Crafting a new paradigm of<br/> healthcare, one that is 
        </div>
        <div className=' marquee w-full h-screen relative font-["Baskerville"] text-[80px] overflow-hidden'>
          <div className='absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full  '>
            <div className='row -translate-x-1/4 w-fit flex items-center gap-10 whitespace-nowrap'>
              <div className="elem flex items-center gap-10">
                <h1 className='font-semibold text-8xl'>empathetic</h1>
                <div className='imgdiv w-[3.5rem] h-[3.5rem] bg-yellow-500 rounded-full'></div>
              </div>
              <div className="elem flex items-center gap-10">
                <h1 className='font-semibold text-8xl'>useful</h1>
                <div className='imgdiv w-[3.5rem] h-[3.5rem] bg-yellow-500 rounded-full'></div>
              </div>
              <div className="elem flex items-center gap-10">
                <h1 className='font-semibold text-8xl'>intuitive</h1>
                <div className='imgdiv w-[3.5rem] h-[3.5rem] bg-yellow-500 rounded-full'></div>
              </div>
              <div className="elem flex items-center gap-10">
                <h1 className='font-semibold text-8xl'>empathetic</h1>
                <div className='imgdiv w-[3.5rem] h-[3.5rem] bg-yellow-500 rounded-full'></div>
              </div>
              <div className="elem flex items-center gap-10">
                <h1 className='font-semibold text-8xl'>useful</h1>
                <div className='imgdiv w-[3.5rem] h-[3.5rem] bg-yellow-500 rounded-full'></div>
              </div>
              <div className="elem flex items-center gap-10">
                <h1 className='font-semibold text-8xl'>intuitive</h1>
                <div className='imgdiv w-[3.5rem] h-[3.5rem] bg-yellow-500 rounded-full'></div>
              </div>
            </div>
            <div className='row -translate-x-1/3 w-fit flex items-center gap-10 whitespace-nowrap'>
              <div className="elem flex items-center gap-10">
                <h1 className='font-semibold text-8xl'>empathetic</h1>
                <div className='imgdiv w-[3.5rem] h-[3.5rem] bg-yellow-500 rounded-full'></div>
              </div>
              <div className="elem flex items-center gap-10">
                <h1 className='font-semibold text-8xl'>useful</h1>
                <div className='imgdiv w-[3.5rem] h-[3.5rem] bg-yellow-500 rounded-full'></div>
              </div>
              <div className="elem flex items-center gap-10">
                <h1 className='font-semibold text-8xl'>intuitive</h1>
                <div className='imgdiv w-[3.5rem] h-[3.5rem] bg-yellow-500 rounded-full'></div>
              </div>
              <div className="elem flex items-center gap-10">
                <h1 className='font-semibold text-8xl'>empathetic</h1>
                <div className='imgdiv w-[3.5rem] h-[3.5rem] bg-yellow-500 rounded-full'></div>
              </div>
              <div className="elem flex items-center gap-10">
                <h1 className='font-semibold text-8xl'>useful</h1>
                <div className='imgdiv w-[3.5rem] h-[3.5rem] bg-yellow-500 rounded-full'></div>
              </div>
              <div className="elem flex items-center gap-10">
                <h1 className='font-semibold text-8xl'>intuitive</h1>
                <div className='imgdiv w-[3.5rem] h-[3.5rem] bg-yellow-500 rounded-full'></div>
              </div>
            </div>
            <div className='row -translate-x-1/4 w-fit flex items-center gap-10 whitespace-nowrap'>
              <div className="elem flex items-center gap-10">
                <h1 className='font-semibold text-8xl'>empathetic</h1>
                <div className='imgdiv w-[3.5rem] h-[3.5rem] bg-yellow-500 rounded-full'></div>
              </div>
              <div className="elem flex items-center gap-10">
                <h1 className='font-semibold text-8xl'>useful</h1>
                <div className='imgdiv w-[3.5rem] h-[3.5rem] bg-yellow-500 rounded-full'></div>
              </div>
              <div className="elem flex items-center gap-10">
                <h1 className='font-semibold text-8xl'>intuitive</h1>
                <div className='imgdiv w-[3.5rem] h-[3.5rem] bg-yellow-500 rounded-full'></div>
              </div>
              <div className="elem flex items-center gap-10">
                <h1 className='font-semibold text-8xl'>empathetic</h1>
                <div className='imgdiv w-[3.5rem] h-[3.5rem] bg-yellow-500 rounded-full'></div>
              </div>
              <div className="elem flex items-center gap-10">
                <h1 className='font-semibold text-8xl'>useful</h1>
                <div className='imgdiv w-[3.5rem] h-[3.5rem] bg-yellow-500 rounded-full'></div>
              </div>
              <div className="elem flex items-center gap-10">
                <h1 className='font-semibold text-8xl'>intuitive</h1>
                <div className='imgdiv w-[3.5rem] h-[3.5rem] bg-yellow-500 rounded-full'></div>
              </div>
            </div>
            <div className='row -translate-x-1/6 w-fit flex items-center gap-10 whitespace-nowrap'>
              <div className="elem flex items-center gap-10">
                <h1 className='font-semibold text-8xl'>empathetic</h1>
                <div className='imgdiv w-[3.5rem] h-[3.5rem] bg-yellow-500 rounded-full'></div>
              </div>
              <div className="elem flex items-center gap-10">
                <h1 className='font-semibold text-8xl'>useful</h1>
                <div className='imgdiv w-[3.5rem] h-[3.5rem] bg-yellow-500 rounded-full'></div>
              </div>
              <div className="elem flex items-center gap-10">
                <h1 className='font-semibold text-8xl'>intuitive</h1>
                <div className='imgdiv w-[3.5rem] h-[3.5rem] bg-yellow-500 rounded-full'></div>
              </div>
              <div className="elem flex items-center gap-10">
                <h1 className='font-semibold text-8xl'>empathetic</h1>
                <div className='imgdiv w-[3.5rem] h-[3.5rem] bg-yellow-500 rounded-full'></div>
              </div>
              <div className="elem flex items-center gap-10">
                <h1 className='font-semibold text-8xl'>useful</h1>
                <div className='imgdiv w-[3.5rem] h-[3.5rem] bg-yellow-500 rounded-full'></div>
              </div>
              <div className="elem flex items-center gap-10">
                <h1 className='font-semibold text-8xl'>intuitive</h1>
                <div className='imgdiv w-[3.5rem] h-[3.5rem] bg-yellow-500 rounded-full'></div>
              </div>
            </div>
          </div>
        </div>
        <div className='hidden absolute left-0 top-24 px-14 text-left bg-teal-500 w-full h-full'>
          <div className='text-lg'>Significo is a custom health software developer founded on the belief <br/>
          that technology can transform healthcare to put people first. We put <br/>
          humanity back at the center of healthcare by simplifying complexity, <br/>
          accelerating capaciy, and improving outcomes.
          </div>
          <div className='text-8xl'>
            We Craft <br/>
            Human-Centric <br/>
            Health Software
          </div>
          <div className='border-2 border-black p-10 cursor-pointer'>
            OUR SOLUTIONS
          </div>
        </div>
      </div>
    </div>
  )
}
