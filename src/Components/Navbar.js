import React, { useState, useEffect } from "react";
import XpressWriterLogo from '../Utilites/ExpressWrite1.svg';

export default function Navbar() {


    const [goingUp, setGoingUp] = useState(true);
    const [sideMenu, setsideMenu] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (200 < currentScrollY && goingUp) {
                setGoingUp(false);
            }
            if (200 > currentScrollY && !goingUp) {
                setGoingUp(true);
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [goingUp]);




    function Items({ItemName}){
        return(
            <li>
            <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 group md:p-0" aria-current="page">
               {ItemName}
                <span className="sm:hidden md:hidden lg:block w-full h-1 transition-transform  scale-x-0 rounded-full transform group-hover:scale-x-100 bg-[#6509DB]"></span>
                </a>
        </li>
        )
    }


    return (
        <div>
            <nav class={`px-2 sm:px-4 py-2.5 bg-[#FADEAC] fixed w-full  lg:text-xl z-20 top-0 left-0 font-GorditaRegular ${goingUp ? "" : "shadow-2xl"}`}>
                <div class="container flex flex-wrap justify-between items-center mx-auto">
                    <a href="https://flowbite.com/" class="flex items-center">
                        <img src={XpressWriterLogo} class="mr-3 h-6 sm:h-9" alt="Flowbite Logo"/>
                           
                    </a>
                    <div class="flex md:order-2">
                        <div clas='felx flex-col justify-center items-center '>
                        <a href="#" class="lg:inline-block  hidden lg:p-1 lg:hover:bg-white lg:rounded-full py-2 pr-4 pl-3 mx-2 text-white md:rounded-full rounded md:bg-transparent md:text-blue-700 md:p-0 hover:border-2 border-2 border-transparent hover:border-white" aria-current="page">Sign In</a>
                        <button type="button" class="text-white lg:text-xl bg-[#6509DB] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-3 md:mr-0">Explore More</button>
                        </div>
                        <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2  text-sm text-gray-500 rounded-lg md:hidden hover:bg-white focus:outline-none focus:ring-2 focus:ring-white group " onClick={()=>{setsideMenu(!sideMenu)}} aria-controls="navbar-sticky" aria-expanded="false" >
                            <span class="sr-only">Open main menu</span>
                            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div class={` ${sideMenu ? "hidden" :""} lg:block justify-between items-center w-full md:flex md:w-auto md:order-1 `}>
                        <ul class="flex flex-col p-4 mt-4  md:flex-row md:space-x-8 md:mt-0 md:border-0 lg:text-xl ">
                            <Items ItemName="Home"/>
                            <Items ItemName="About"/>
                            <Items ItemName="Services"/>
                            <Items ItemName="ContactUs"/>
                            <li>
                                <a href="#" class="lg:hidden block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent group md:hover:text-blue-700 md:p-0 ">
                                    Sign In
                                
                                    </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )

}
