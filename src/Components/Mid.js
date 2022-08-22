import React from 'react';
import Stripe from './Stripe';


import Qualified from '../Utilites/Qualified1.svg';
import Free from '../Utilites/free1.svg';
import Edit from '../Utilites/Edit.png';
import deadlines from '../Utilites/deadlines1.svg';
import speedy from '../Utilites/Speedy1.svg';
import Plagrisim from '../Utilites/icons2.png';


function Card({image, headline, para}) {
    return (
        <div class="p-2 md:w-1/3 rounded-lg group">
            <div class="flex bg-white p-8 sm:p-12 flex-col text-left h-full">
                <div class="flex items-center mb-3">
                    <div class="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-gray-100 text-white flex-shrink-0">
                    <img class = 'w-8 h-8 group-hover:w-12 ease-in-out duration-500 group-hover:h-12 hover:transition-transform' alt={image} src={image}></img>
                    </div>
                    <h2 class="text-gray-900 text-lg title-font font-GorditaMedium">{headline}</h2>
                </div>
                <div class="">
                    <p class="leading-relaxed text-base">{para}</p>
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
                    <h1 class="sm:text-3xl text-2xl font-GorditaBold title-font text-gray-900">Why 1700+ Applicants trust us with their Overseaas Education ?</h1>
                </div>
                <div class="flex flex-wrap ">
                    <Card image={Qualified} headline="Qualified Team Of Professionals" para="Our team of writers and editors are always ready to provide quality content, making us the top content writing company in India."/>
                    <Card image={Free} headline="Free revisions & re-writing" para="If we fail to impress, we offer free re-writing by another writer as per the package."/>
                    <Card image={deadlines} headline="We leave deadlines behind" para="With rich content (up to 2000 words), delivered within 36 hours, we are one of the best content writing agencies"/>
                    <Card image={Edit} headline="Editorial examining" para="Well-researched and 100% original content. Content which is meticulously examined by our editors."/>
                    <Card image={speedy} headline="Speedy Express delivery" para="As per the package get free speedy deliveries which promises to provide up to 1000 words in just 6hrs."/>
                    <Card image={Plagrisim} headline="Anti Plagrisim Content " para="Well-researched and 100% original content. Content which is meticulously examined by our editors."/>
                </div>
            </div>
        </section>
        </>
    )
}

export default Mid