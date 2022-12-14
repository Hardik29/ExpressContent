import React from "react";
import check from '../Utilites/check.svg';


function Prompt({title, para}) {
  return (
    <div class="p-2 w-full rounded-lg group">
      <div class="flex bg-white p-8 sm:p-12 flex-col text-left">
        <div class="flex items-center mb-3">
          <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full  text-white flex-shrink-0">
            <img class='w-8 h-8 group-hover:w-12 ease-in-out duration-500 group-hover:h-12 hover:transition-transform' alt={check} src={check}></img>
          </div>
          <h2 class="text-gray-900 text-lg title-font font-GorditaMedium">{title}</h2>
        </div>
        <div class="">
          <p class="leading-relaxed text-base">{para}</p>
        </div>
      </div>
    </div>
  );
}



export default function Contacts() {
  return (
    <section class="text-gray-700 font-GorditaRegular">
      <div class="container px-5 py-24 mx-auto flex flex-wrap">

        <div class="bg-white card relative p-8 sm:p-12 shadow-lg lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden text-left">
          <form>
            <h1 className="py-8 font-GorditaBold">What Express Content do you want ?</h1>
            <div class="mb-6">
            <select class="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary">
              <option value="SQl">SOP</option>
              <option value="LOR">LOR</option>
              <option value="Email">EMAIL</option>
            </select>
            </div>
            <div class="mb-6">
              <input
                type="text"
                placeholder="Your Name"
                class="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary"
              />
            </div>
            <div class="mb-6">
              <input
                type="email"
                placeholder="Your Email"
                class="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
              />
            </div>
            <div class="mb-6">
              <input
                type="text"
                placeholder="Your Phone"
                class="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
              />
            </div>
            <div class="mb-6">
              <textarea
                rows="6"
                placeholder="Your Message"
                class="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        resize-none
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
              ></textarea>
            </div>
            <div>
              <button type="submit" class="w-full bg-[#6509DB] text-white bg-primary rounded-full border border-primary p-3 transition hover:bg-opacity-90">
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div class="flex flex-col flex-wrap lg:py-4 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          <h1 class="sm:text-2xl text-xl font-GorditaBold title-font text-gray-900 px-14">Choosing us will be a smart decision</h1>
          <Prompt title="We believe in innovative writing"  para="We have been in the business of writing academics documents for more then 6 years and our SOPs and LORs are even bringing scholarships for hundreds of students and we know how each document has to be crafted to drive maximum value for the aspirants."/>
          <Prompt title="Professiionals will write your documents" para="Our competent SOP & LOR writers can project your profile in the best way with high vocabulary language. We will emphasize on your strengths, moderate your flaws and underplay your shortcoming to elicit the interests of the admission committee in your SOP."/>
          <Prompt title="You can focus on your tasks while we will be focusing on your writing." para="We know that writing a fruitful document can be time consuming and very hectic which will consume your vauable time and the error rate might also increase if you are not dedicated enough, so let the professional do your writing part and you can focus on your tasks."/>
        </div>
      </div>


    </section>
  );
}
