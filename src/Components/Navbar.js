import React,{ useState, useEffect} from "react";

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
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a class="flex title-font items-center text-gray-900 mb-4 md:mb-0" href="https://tailblocks.cc" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span class="ml-3 text-xl">TAILBLOCKS</span>
                    </a>
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
