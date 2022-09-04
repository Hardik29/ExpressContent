import React from 'react'
import S from '../Utilites/S.jpg'
import { Link } from 'react-router-dom';

function Card(){
  return(

<div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md m-2 text-left">
    <Link to="/SopProductPage">
        <img class="rounded-t-lg hover:opacity-75" src={S} alt="" />
    </Link>
    <div class="p-5">
        <Link to="/SopProductPage">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">SOP Doctroal Programe</h5>
        </Link>
        <Link to="/SopProductPage" class=" inline-flex items-center py-2 px-3 text-sm font-medium  text-white bg-blue-700 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Add To Cart
        </Link>
    </div>
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