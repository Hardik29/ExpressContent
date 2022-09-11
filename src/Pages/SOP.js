import React from 'react'
import S from '../Utilites/S.jpg'
import { Link } from 'react-router-dom';

function Card({title}) {
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

function SOP() {
  return (
    <div>
      <section class="text-gray-700 font-GorditaMedium border-t border-gray-200 px-5 pt-40 bg-[#FADEAC]">
        <div class="container mx-auto">
          <div class="w-full mx-auto text-left">
            <p class="leading-relaxed text-lg px-10">SOP is a reflection of a person's career path and academic journey. It goes without saying that a person's dream is at stake, so they can't skimp on quality. So, if you want your SOP to be the best it can be, you need to understand the profile before you start writing. The key to this difficult document is finding a beautiful balance between the right amount of emotion and the right amount of information. Still, if it were in the hands of a professional, we at Xpress Writers would only need your cooperation and time. Because of this, we'll make sure you have the best SOP ready to send to your dream schools while you get ready for a bright future.
              To put it simply, statements of purpose (SOPs) are among the most consequential pieces of writing a student will ever produce. Standard operating procedures (SOPs) should be written in a formal yet personable style. You need the best and most impactful SOP possible to impress the admissions committee and advance your profession to the next level. If you're looking for a service like this, go no farther than Xpress Writers to assist you in creating your ideal SOP.
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
                    <h1 class="sm:text-3xl text-2xl font-GorditaBold title-font text-gray-900">What makes Xpress Writers the best option for your SOPs?</h1>
                    <p class="leading-relaxed text-lg px-16 pt-5">You can trust that Xpress Writers will provide you with a well-written, thoroughly researched statement of purpose that will help you gain admission to any of the world's finest colleges. Our SOP is more than just words on paper; it's a reflection of who you are as a person and what you hope to accomplish in your professional life. And most importantly, we always do our work on schedule and can be relied upon to be trustworthy.</p>
                </div>
            </div>
        </section>
      <section>
        <div class="container py-24 px-5 mx-auto">
          <div class="flex flex-wrap justify-center items-center">
            <Card title="SOP for Graduation"/>
            <Card title="SOP for Masters"/>
            <Card title="SOP for Masters Data Science"/>
            <Card title="SOP for Internship"/>
            <Card title="SOP for Certificate Courses"/>
            <Card title="SOP for Germany"/>
            <Card title="SOP for UG Courses in Foreign Universities"/>
            <Card title="SOP for Rejected Visa"/>
            <Card title="SOP for Certificate Courses"/>
            <Card title="SOP for 2 Times Rejected Visa"/>
            <Card title="SOP for 5+ Times Rejected Visa"/>
            <Card title="SOP for Canadian Visa Refusal"/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SOP