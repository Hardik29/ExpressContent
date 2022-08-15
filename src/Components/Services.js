import React from 'react'
import SOP from '../Utilites/SOP.svg';

function Card() {
  return (
    <div class="p-2 md:w-2/6 rounded-lg group">
      <a href="#">
        <div class="flex bg-white p-8 sm:p-12 flex-col text-left">

          <div class="w-full h-32 rounded-lg mr-3 inline-flex items-center justify-center  bg-[#D5BBF6] flex-shrink-0">
            <img class='w-2/4 h-2/4 group-hover:w-3/4 duration-[1500ms] group-hover:h-3/4 hover:transition-transform ease-linear' alt={SOP} src={SOP}></img>
          </div>
          <h2 class="text-gray-900 text-lg title-font font-GorditaBold pt-4">SOP</h2>
          <p class="leading-relaxed font-GorditaMedium text-[#6509DB]">250+ writer</p>

        </div>
      </a>
    </div>
  )
}

<div class="p-2 md:w-1/3 rounded-lg group card">
  <div class="flex bg-white p-8 sm:p-12 flex-col text-left">
    <h2 class="text-gray-900 text-lg title-font font-GorditaMedium">SOP</h2>
    <p class="leading-relaxed text-base">Our team of writers and editors are always ready to provide quality content, making us the top content writing company in India.</p>

  </div>
</div>



function Services() {
  return (
    <section class="text-gray-700 body-font border-t border-gray-200">
      <div class="container py-24 mx-auto">
        <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 class="sm:text-3xl text-4xl font-GorditaBold mb-2 text-gray-900">Get Your Application done with Us.</h1>
          <h1 class="sm:text-3xl text-4xl font-GorditaBold mb-2 text-gray-900">Try a service <span class='rounded border-b-4 border-[#6509DB]'>now.</span></h1>
        </div>
        <div class="flex flex-wrap">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>

  )
}

export default Services