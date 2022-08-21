import React from "react";
import check from '../Utilites/check.svg';


function Prompt() {
  return (
    <div class="p-2 w-full rounded-lg group">
      <div class="flex bg-white p-8 sm:p-12 flex-col text-left">
        <div class="flex items-center mb-3">
          <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full  text-white flex-shrink-0">
            <img class='w-8 h-8 group-hover:w-12 ease-in-out duration-500 group-hover:h-12 hover:transition-transform' alt={check} src={check}></img>
          </div>
          <h2 class="text-gray-900 text-lg title-font font-GorditaMedium">Save time</h2>
        </div>
        <div class="">
          <p class="leading-relaxed text-base">You get the fullest efficiency just as your in-house team and faster results as an added bonus by working with</p>
        </div>
      </div>
    </div>
  );
}

<div class="flex flex-row mb-10 lg:items-start items-center ">
  <div class="block">
    <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
      <svg
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        class="w-6 h-6"
        viewBox="0 0 24 24"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
      </svg>
    </div>
    <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
      Shooting Stars
    </h2>
  </div>
  <div class="flex-grow">

    <p class="leading-relaxed text-base">
      Blue bottle crucifix vinyl post-ironic four dollar toast vegan
      taxidermy. Gastropub indxgo juice poutine.
    </p>
  </div>
</div>

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
          <Prompt />
          <Prompt />
          <Prompt />
          <Prompt />
        </div>
      </div>


    </section>
  );
}
