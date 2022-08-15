import React from 'react';
import Stripe from './Stripe';
import Qualified from '../Utilites/Qualified1.svg';


function Card({svg, headline, text}) {
    return (
        <div class="p-2 md:w-1/3 rounded-lg group">
            <div class="flex bg-white p-8 sm:p-12 flex-col text-left">
                <div class="flex items-center mb-3">
                    <div class="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-gray-100 text-white flex-shrink-0">
                    <img class = 'w-8 h-8 group-hover:w-12 ease-in-out duration-500 group-hover:h-12 hover:transition-transform' alt={Qualified} src={Qualified}></img>
                    </div>
                    <h2 class="text-gray-900 text-lg title-font font-GorditaMedium">Qualified Team Of Professionals</h2>
                </div>
                <div class="">
                    <p class="leading-relaxed text-base">Our team of writers and editors are always ready to provide quality content, making us the top content writing company in India.</p>
                </div>
            </div>
        </div>
    )
}

function Mid() {
    return (
        <>
        <Stripe />
        <section class="text-gray-700  bg-[#FEF8ED] py-12">
            <div class="container px-5 mx-auto ">
                <div class="flex flex-col text-center w-full mb-20">
                    <h1 class="sm:text-3xl text-2xl font-GorditaBold title-font text-gray-900">Why 1000+ Applicants trust us with their Overseaas Education ?</h1>
                </div>
                <div class="flex flex-wrap ">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </section>
        </>
    )
}

export default Mid