import React,{ useState, useEffect} from "react";
import XpressWriterLogo from '../Utilites/Xpress-writer-2-1536x3141.svg';

export default function Navbar() {


    const [goingUp, setGoingUp] = useState(true);

    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (400 < currentScrollY && goingUp) {
          setGoingUp(false);
        }
        if (400 > currentScrollY && !goingUp) {
          setGoingUp(true);
        }
      };
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
      }, [goingUp]);
    


    return (
        <div>
            <header class={`text-gray-700 bg-[#FADEAC] fixed w-full z-50 font-sans ${goingUp ? "" : "shadow-2xl"}`}>
                <div class="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
                <img class="object-cover object-center rounded lg:w-2/12 md:w-2/6 w-2/6 px-6 bg-[#6509DB] p-7"  alt={XpressWriterLogo} src={XpressWriterLogo}></img>
              
                    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <a class="mr-5 hover:text-gray-900 group">
                            Home
                            <span className="block w-full h-1 transition-transform  scale-x-0 rounded-full transform group-hover:scale-x-100 bg-[#6509DB]"></span>
                        </a>
                        <a class="mr-5 hover:text-gray-900 group">
                            Services
                            <span className="block w-full h-1 transition-transform  scale-x-0 rounded-full transform group-hover:scale-x-100 bg-[#6509DB]"></span>
                        </a>
                        <a class="mr-5 hover:text-gray-900 group">
                            ContactUs
                            <span className="block w-full h-1 transition-transform  scale-x-0 rounded-full transform group-hover:scale-x-100 bg-[#6509DB]"></span>
                        </a>
                        <a class="mr-5 hover:text-gray-900 group">
                            Blog
                            <span className="block w-full h-1 transition-transform  scale-x-0 rounded-full transform group-hover:scale-x-100 bg-[#6509DB]"></span>
                        </a>
                        <a class="mr-5 hover:border-b-2  text-[#6509DB] font-GorditaMedium group">
                            SignIn
                        <span className="block w-full h-1 transition-transform  scale-x-0 rounded-full transform group-hover:scale-x-100 bg-[#6509DB]"></span>
                        </a>
                    </nav>
                    <button class="inline-flex font-GorditaMedium  bg-[#6509DB] hover:text-[#6509DB] hover:border-2 hover:border-[#6509DB] border-2 border-transparent text-white py-2 px-4  hover:bg-white rounded text-base mt-4 md:mt-0">Explore
                    </button>
                </div>
            </header></div>
    )
}
