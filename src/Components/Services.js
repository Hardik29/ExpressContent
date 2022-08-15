import React from 'react'


function Card(){
    return(
        <div class="p-2 md:w-1/3 rounded-lg group card">
        <div class="flex bg-white p-8 sm:p-12 flex-col text-left">
             <h2 class="text-gray-900 text-lg title-font font-GorditaMedium">SOP</h2>
             <p class="leading-relaxed text-base">Our team of writers and editors are always ready to provide quality content, making us the top content writing company in India.</p>
        
        </div>
        </div>
    )
}


{/* <div class="p-2 md:w-1/3 rounded-lg group card">
<div class="flex bg-white p-8 sm:p-12 flex-col text-left">
     <h2 class="text-gray-900 text-lg title-font font-GorditaMedium">Qualified Team Of Professionals</h2>
     <p class="leading-relaxed text-base">Our team of writers and editors are always ready to provide quality content, making us the top content writing company in India.</p>

</div>
</div> */}

function Services() {
  return (
    <section class="text-gray-700 body-font border-t border-gray-200">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
        <h1 class="sm:text-3xl text-4xl font-GorditaBold mb-2 text-gray-900">Get Your Application done with Us.</h1>
        <h1 class="sm:text-3xl text-4xl font-GorditaBold mb-2 text-gray-900">Try a service <span class='rounded border-b-4 border-[#6509DB]'>now.</span></h1>
      </div>
      <div class="flex flex-wrap -m-4">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
    </div>
  </section>

  )
}

export default Services