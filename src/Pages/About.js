import React from "react";
import SOP from "../Utilites/SOP.jpg";


function Card(){
  return(
    <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4">
              <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div class="px-4 py-5 flex-auto">
                  <h6 class="text-xl font-semibold">SOP</h6>
                  <ul class="mt-2 mb-4 text-slate-500 text-left">
                    <li>Universities in US,UK,Canada, Australia, Newzealand etc.</li>
                    <li>Undergraduate & post graduate</li>
                    <li>For PhD</li>
                  </ul>
                </div>
              </div>
            </div> 
  )
}

function About() {
  return (
    <div class="md:py-20 py-[3.5rem]">
      <div class="relative pt-16 pb-32  md:h-[55rem] h-[23rem]">
        <img
          class="absolute top-0 w-full h-full "
          src={SOP}
        />
        <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-[70px]">
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-white fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>
      <section class="pb-20 -mt-24">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-center items-center">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          </div>
        </div>
        
      </section>
    </div>
  );
}

export default About;
