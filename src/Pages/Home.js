import React from 'react'
import Hero from '../Components/Hero';
import Mid from '../Components/Mid';
import Faq from '../Components/Faq'
import Services from '../Components/ServicesSec';
import Contacts from '../Components/Contacts';

function Card() {
  return (
    <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
      <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
        <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80/edf2f7/a5afbd"></img>
        <div class="flex-grow">
          <h2 class="text-gray-900 title-font font-medium">Holden Caulfield</h2>
          <p class="text-gray-500">UI Designer</p>
        </div>
      </div>
    </div>
  )
}

function Home() {
  return (
    <div>

      <section class="text-gray-700  bg-[#FADEAC]">
      <Hero />
      </section>
      <Mid />
      <Contacts />
      <Services />
      <Faq />

      {console.log('Made with ❤️ by Hardik Singh.For More Contact https://github.com/Hardik29')}
    </div>
  )
}

export default Home


//  <section class="text-gray-700 body-font border-t border-gray-200">
//         <div class="container px-5 py-24 mx-auto">
//           <div class="flex flex-col text-center w-full mb-20">
//             <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
//           </div>
//           <div class="flex flex-wrap -m-2">
//             <Card/>
//           </div>
//         </div>
//       </section>