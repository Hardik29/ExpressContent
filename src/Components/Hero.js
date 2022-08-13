import React from 'react';
import YourSvg from "./../Utilites/express contenrt.svg"

function Hero() {
  return (
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center bg-[#FADEAC]">
      <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 class="sm:text-4xl text-3xl mb-4 font-medium text-gray-900 font-GorditaMedium">Your Application,  We write
        </h1>
        <h1 class="sm:text-4xl text-3xl mb-4 font-bold text-gray-900 font-GorditaBold">Your story of your <span>Sucess</span>
        </h1>
        <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
        <div class="flex justify-center">
          <button class="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 tracking-wider inline-flex items-center bg-[#6509DB] text-white border-2 border-transparent py-3 px-8 focus:outline-none hover:bg-white hover:text-[#6509DB] hover:border-2 hover:border-[#6509DB] rounded text-base mt-4 md:mt-0">Get Started
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img class="object-cover object-center rounded" alt={YourSvg} src={YourSvg}></img>
      </div>
    </div>
  )
}

export default Hero