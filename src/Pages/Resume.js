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

function Resume() {
    return (
        <div>
            <section class="text-gray-700 font-GorditaMedium border-t border-gray-200 px-5 pt-40 bg-[#FADEAC]">
                <div class="container mx-auto">
                    <div class="w-full mx-auto text-left">
                        <p class="leading-relaxed text-lg px-10">
                            Getting a job is easier if you have a well-written resume that shows off your skills. Don't pass up the chance to work for the best companies. Xpress Writers is the best-known resume writing service in the business, and we offer professional resume writing services for any industry. We are known all over the country, and our only goal is to make resumes that look good and fit what you want. Considering it is your first impression in a company, we understand its value.
                            Using our resume writing services is like investing into a secure job hunt. We employ only the most proficient resume writers, who can help you land attractive positions at top companies. In order to help you land an interview, we give the best resume writing services in India.
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
                        <h1 class="sm:text-3xl text-2xl font-GorditaBold title-font text-gray-900">Why should you hire us to write your resume?</h1>
                        <p class="leading-relaxed text-lg px-16 pt-5">We create professional resumes that highlight your relevant experience, skills, and personality to help you attract potential employers. Our clean, well-organized layouts look great on the job and in automated applicant tracking and resume parsing software. We make it possible for your resume to be screened and reviewed for each position you apply to.
                            Putting together a CV can be hard, but resume writing services in India can help you make a strong one. At Xpress Writers, we offer solutions that are the best in the business and make sure that every client is happy. Our staff will carefully put together your CV and give it a professional makeover. At Xpress Writers, we connect you with the best resume writers in India.
                        </p>
                    </div>
                </div>
            </section>
            <section>
                <div class="container py-24 px-5 mx-auto">
                    <div class="flex flex-wrap justify-center items-center">
                        <Card title="Resume for bachelors" />
                        <Card title="Resume for masters" />
                        <Card title="Resume For Phd" />
                        <Card title="Resume for managers" />
                        <Card title="Resume for MNCs" />
                        <Card title="Resume for European Countries ( Europass)" />
                        <Card title="Resume for Government Jobs" />
                        <Card title="Resume for Doctors" />
                        <Card title="Resume for Engineers" />
                        <Card title="Resume for Lawyers" />
                        <Card title="Resume for Teachers/professors." />
                        <Card title="Resume for Hospitality and hotel Industries." />
                        <Card title="Resume for Logistics and management." />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Resume