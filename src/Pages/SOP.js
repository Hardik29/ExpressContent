import React from 'react'
import ServicesSec from '../Components/ServicesSec'
import S from '../Utilites/S.jpg'

function Card(){
  return(
 
<div class="max-w-sm rounded overflow-hidden shadow-lg m-2 ">
  <a href="#">
  <img class="w-full" src={S} alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Doctoral Programs SOP</div>
  </div>
  </a>
</div>

  )
}

function SOP() {
  return (
    <section class="text-gray-700 body-font border-t border-gray-200">
    <div class="container py-24 px-5 mx-auto">
      <div class="flex flex-wrap justify-center items-center">
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

export default SOP