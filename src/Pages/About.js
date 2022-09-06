import React from "react";
import SOP from "../Utilites/SOP.jpg";


function Card({title,point}) {
  return (
    <div class="lg:pt-12 pt-6 w-full md:w-5/12 px-4">
      <div class="flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
        <div class="px-4 py-5 flex-auto">
          <h6 class="text-xl font-semibold">{title}</h6>
          <ul class="mt-2 mb-4 text-slate-500 text-left list-disc pl-10">
            {point.map((key)=>(<li>{key}</li>))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function About() {
  return (
    <div class="md:py-20 py-[3.5rem]">
      <div class="relative pt-16 pb-32  md:h-[55rem] h-[20rem]">
        <img
          class="absolute top-0 w-full h-full "
          src={SOP}
        />
      </div>
      <div class="lg:p-20 lg:text-center pb-32 p-16 text-left">

        When it comes to the quality of our work, our team is both active and reliable. All of us here at the content team of XpressWriters are relatively young, yet we have years of expertise in the field. In terms of brand diversity, we have produced content for a variety of platforms. We have helped students and young professionals create their SOP, LOR, and Resumes. You really should know more about the assistance we provide.

        In a short amount of time, XpressWriters has made a big name for itself. The fact that XpressWriters has clients all over the world and that thousands of those clients are happy is proof of its success.
      </div>
      <section class="pb-20 -mt-24">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-center items-center">
            <Card title="FOR SOP" point={["Universities in US, UK, Canada, NewZealand etc.","For elite MBA Programmes","Undergraduate & post graduate","For PhD"]}/>
            <Card title="FOR LOR" point={["LOR for Academic","Professional LOR","Elite MBA programme", "Research based LOR"]}/>
            <Card title="FOR RESUME" point={["0-2 years Resume","2-6 years resume","C-level Executive resume","Resume for PhDs"]}/>
          </div>
        </div>

      </section>
    </div>
  );
}

export default About;
