import React from "react";
import SOP from "../Utilites/SOP.jpg";


function Card({ title, point }) {
  return (
    <div class="lg:pt-12 pt-6 w-full md:w-5/12 px-4">
      <div class="flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
        <div class="px-4 py-5 flex-auto">
          <h6 class="text-xl font-semibold">{title}</h6>
          <ul class="mt-2 mb-4 text-slate-500 text-left list-disc pl-10">
            {point.map((key) => (<li>{key}</li>))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function About() {
  return (
    <div class="md:py-20 py-[3.5rem]">
      <div class="relative pt-16 pb-32 md:h-[55rem] h-[20rem]">
        <img
          class="absolute top-0 w-full h-full "
          src={SOP}
        />
        <svg className="absolute left-0 bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,192L80,208C160,224,320,256,480,272C640,288,800,288,960,288C1120,288,1280,288,1360,288L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
      </div>
      <div class="lg:p-20 lg:text-center pb-32 p-16 text-left">

        When it comes to the quality of our work, our team is both active and reliable. All of us here at the content team of XpressWriters are relatively young, yet we have years of expertise in the field. In terms of brand diversity, we have produced content for a variety of platforms. We have helped students and young professionals create their SOP, LOR, and Resumes. You really should know more about the assistance we provide.

        In a short amount of time, XpressWriters has made a big name for itself. The fact that XpressWriters has clients all over the world and that thousands of those clients are happy is proof of its success.
      </div>
      <section class="pb-20 -mt-24">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-center items-center">
            <Card title="FOR SOP" point={["Universities in US, UK, Canada, NewZealand etc.", "For elite MBA Programmes", "Undergraduate & post graduate", "For PhD"]} />
            <Card title="FOR LOR" point={["LOR for Academic", "Professional LOR", "Elite MBA programme", "Research based LOR"]} />
            <Card title="FOR RESUME" point={["0-2 years Resume", "2-6 years resume", "C-level Executive resume", "Resume for PhDs"]} />
          </div>
        </div>

      </section>
    </div>
  );
}

export default About;
