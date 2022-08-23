import React from 'react'
import logo from '../Utilites/116641 1.svg';
import logo1 from '../Utilites/Clg/logo1.png';
import logo2 from '../Utilites/Clg/logo2.png';
import logo3 from '../Utilites/Clg/logo3.png'
import logo4 from '../Utilites/Clg/logo4.png';
import logo5 from '../Utilites/Clg/logo5.png';
import logo6 from '../Utilites/Clg/logo6.png';
import logo7 from '../Utilites/Clg/logo7.png';
import logo8 from '../Utilites/Clg/logo8.png';
import logo9 from '../Utilites/Clg/logo9.png';
import logo10 from '../Utilites/Clg/logo10.png';
import logo11 from '../Utilites/Clg/logo11.png';
import logo12 from '../Utilites/Clg/logo12.png';
import logo13 from '../Utilites/Clg/logo13.png';
import logo14 from '../Utilites/Clg/logo14.png';
import logo15 from '../Utilites/Clg/logo15.png';
import logo16 from '../Utilites/Clg/logo16.jpg';
import logo17 from '../Utilites/Clg/logo17.png';






function Clglogo({ prop }) {
    return (
        <img class="object-cover object-center rounded lg:w-1/12 md:w-2/6 w-2/6 px-6" alt={prop} src={prop}></img>
    )
}

function Stripe() {
    return (
        <section class="text-gray-700 border-t border-gray-200">
            <div class="container px-5 py-12 mx-auto">
                <div class="flex flex-col text-center">
                    <h1 class="sm:text-base text-xs font-GorditaRegular text-gray-500">1700+ Applicants trust us with their Overseaas Education</h1></div>
                <div class="flex flex-wrap m-4">
                    <Clglogo prop={logo} />
                    <Clglogo prop={logo4} />
                    <Clglogo prop={logo5} />
                    <Clglogo prop={logo8} />
                    <Clglogo prop={logo13} />
                    <Clglogo prop={logo16} />
                    <Clglogo prop={logo5} />
                    <Clglogo prop={logo17} />
                    <Clglogo prop={logo} />
                    <Clglogo prop={logo16} />
                    <Clglogo prop={logo5} />
                    <Clglogo prop={logo8} />
                </div>
                <div class="flex flex-wrap m-4">
                    <Clglogo prop={logo17} />
                    <Clglogo prop={logo16} />
                    <Clglogo prop={logo} />
                    <Clglogo prop={logo8} />
                    <Clglogo prop={logo13} />
                    <Clglogo prop={logo17} />
                    <Clglogo prop={logo5} />
                    <Clglogo prop={logo8} />
                    <Clglogo prop={logo} />
                    <Clglogo prop={logo16} />
                    <Clglogo prop={logo5} />
                    <Clglogo prop={logo} />
                </div>
            </div>
        </section>
    )
}

export default Stripe

