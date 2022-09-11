import React from 'react'
import S from '../Utilites/S.jpg'
import { Link } from 'react-router-dom';

function Card({ title }) {
    return (

        <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md m-2 text-left">
            <Link to="/SopProductPage">
                <img class="rounded-t-lg hover:opacity-75" src={S} alt="" />
            </Link>
            <div class="p-5">
                <Link to="/SopProductPage">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{title}</h5>
                </Link>
                <Link to="/SopProductPage" class=" inline-flex items-center py-2 px-3 text-sm font-medium  text-white bg-blue-700 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Add To Cart
                </Link>
            </div>
        </div>

    )
}

function LOR() {
    return (
        <div>
            <section class="text-gray-700 font-GorditaMedium border-t border-gray-200 px-5 pt-40 bg-[#FADEAC]">
                <div class="container mx-auto">
                    <div class="w-full mx-auto text-left">
                        <p class="leading-relaxed text-lg px-10">
                            Isn't it great when someone tells you that you deserve many things just because you deserve them?
                            Letters of recommendation work the same way for your admission, and they have a lot of weight because they have to come from your teachers, supervisors, and professors who are respected and have a certain status.
                            Unfortunately, the people who have to give us these suggestions are often too busy. Here we are, one of India's most dedicated and knowledgeable teams of LOR experts who have helped a wide range of clients get perfect and outstanding LOR writing services over the years. After learning about the company's needs and the skills that should be emphasized in a recommendation letter, we are able to connect them to your academic and professional life and say that you have what they need to get in, get a job, or even get promoted.

                        </p>
                    </div>
                </div>
            </section>
            <div className='bg-[#FEF8ED]'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FADEAC" fill-opacity="1" d="M0,128L48,144C96,160,192,192,288,176C384,160,480,96,576,74.7C672,53,768,75,864,117.3C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            </div>
            <section class="text-gray-700  bg-[#FEF8ED] py-12">
                <div class="container px-5 mx-auto ">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="sm:text-3xl text-2xl font-GorditaBold title-font text-gray-900">Why Would You Choose Us?</h1>
                        <p class="leading-relaxed text-lg px-16 pt-5">We know that a person's skill in writing the LOR is important for the LOR to make sense. Whether you're writing a letter of recommendation for college or a business, how well you understand and write affects everything. That's why we wanted to hire the best experts in the field. We have what is probably the best team of professional and knowledgeable writers in the business so far. We give them the skills they need to get stronger as the market changes and becomes more unpredictable.
                            Employers are strongly influenced by the commencement and finish of letters of recommendation. An effective letter of recommendation (LOR) uses clear, concise language to highlight the applicant's most notable qualities. Professional LOR authors on our site identify the employees' qualifications and highlight them throughout the procedure. We tailor such letters to job vacancies at the firm. The LOR's body should detail your achievements, abilities, core beliefs, and capabilities, while the introduction and conclusion should pique the manager's interest in you. Xpress Writers can assist you with skilled letter of recommendation writers to help you expedite your process.
                        </p>
                    </div>
                </div>
            </section>
            <section>
                <div class="container py-24 px-5 mx-auto">
                    <div class="flex flex-wrap justify-center items-center">
                        <Card title="LOR for Graduation" />
                        <Card title="LOR for Masters" />
                        <Card title="LOR for Ph.D." />
                        <Card title="LOR for Elite MBA" />
                        <Card title="LOR for Jobs" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LOR