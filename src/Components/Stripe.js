import React from 'react'
import logo from '../Utilites/116641 1.svg'


function Clglogo({ prop }) {
    return (
        <img class="object-cover object-center rounded" alt={prop} src={prop}></img>
    )
}

function Stripe() {
    return (
        <section class="text-gray-700 border-t border-gray-200">
            <div class="container px-5 py-12 mx-auto">
                <div class="flex flex-col text-center">
                    <h1 class="sm:text-2xl text-xl font-GorditaRegular text-gray-500">1000+ Applicants trust us with their Oversea Education  </h1>
                    <div class="lg:w-2/12 md:w-2/6 w-2/6 flex md:justify-evenly space-x-16">
                        <Clglogo prop={logo} />
                        <Clglogo prop={logo} />
                        <Clglogo prop={logo} />
                        <Clglogo prop={logo} />
                        <Clglogo prop={logo} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stripe

