import React from "react";
import S from '../Utilites/S.jpg';


function svg() {
    return (
        <svg
            class="text-gray-900 h-5 w-5 flex-shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
        >
            <path
                fill-rule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clip-rule="evenodd"
            />
        </svg>
    )
}

function SopProductPage() {
    return (
        <div class="bg-white lg:py-24  lg:px-0 px-4 font-GorditaRegular">
                <div class="mx-auto mt-6 max-w-4xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 ">
                    <div class="aspect-w-5 aspect-h-6 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
                        <img
                            src={S}
                            alt="Model wearing plain white basic tee."
                            class="h-full w-full object-cover object-center"
                        />
                    </div>
                    {/* -------------------------------- */}
                    <div class="mt-4 lg:row-span-3 lg:mt-0 text-left place-self-stretch py-4">
                        <h2 class=" font-GorditaBold text-4xl mb-4">SOP</h2>
                        <p class="text-3xl tracking-tight text-gray-900">₹999</p>

                        <div class="mt-6 ">
                            <h3 class="sr-only">Reviews</h3>
                            <div class="flex items-center">
                                <div class="flex items-center">
                                    {svg()}
                                    {svg()}
                                    {svg()}
                                    {svg()}
                                    <svg
                                        class="text-gray-200 h-5 w-5 flex-shrink-0"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <p class="sr-only">4 out of 5 stars</p>
                                <a
                                    href="#"
                                    class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                                >
                                    117 reviews
                                </a>
                            </div>
                        </div>
                        <div class="mt-10 text-left">
                            <div class="mt-4">
                                <ul role="list" class="list-disc space-y-2 pl-4 text-sm">
                                    <li class="text-gray-400">
                                        <span class="text-gray-600">Normal delivery. 3-5 business day.</span>
                                    </li>

                                    <li class="text-gray-400">
                                        <span class="text-gray-600">
                                        For urgent services, kindly choose delivery time below.
                                        </span>
                                    </li>

                                    <li class="text-gray-400">
                                        <span class="text-gray-600">
                                        For extra words, you may purchase additional words only if required.
                                        </span>
                                    </li>

                                    <li class="text-gray-400">
                                        <span class="text-gray-600">Estorytellers & Taletel are official subsidiaries of Write Right.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <form class="mt-10">
                            <div class="mt-10">
                            </div>
                            <button
                                type="submit"
                                class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Add To Cart
                            </button>
                        </form>
                    </div>
                </div>

                <div class="mx-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24 text-left">
                    <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                        The Simple Process
                        </h1>
                    </div>

                    <div class="lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">

                        <div class="">
                            <h3 class="text-sm font-medium text-gray-900">Description</h3>

                            <div class="mt-4">
                                <ul role="list" class="list-disc space-y-2 pl-4 text-sm">
                                    <li class="text-gray-400">
                                        <span class="text-gray-600">We will assign you our dedicated writer after you confirm the payment.</span>
                                    </li>

                                    <li class="text-gray-400">
                                        <span class="text-gray-600">
                                        The writer will be allocated within 2-8 hours of the confirmation. Have patience.
                                        </span>
                                    </li>

                                    <li class="text-gray-400">
                                        <span class="text-gray-600">
                                         We request you to Whatsapp or email them, share your details and/or send voice message and/or share filled Questionnaire along with the necessary details/information.
                                        </span>
                                    </li>

                                    <li class="text-gray-400">
                                        <span class="text-gray-600">Coordinate about the deadlines with the writer again. Count 3 to 5 BUSINESS days. (urgent charges differs)</span>
                                    </li>
                                    <li class="text-gray-400">
                                        <span class="text-gray-600">Writers are not allowed to take long calls, take conference calls or do zoom meetings. After final sop is submitted, 1 Edit for free is allowed within 24-48 hours.</span>
                                    </li>
                                    <li class="text-gray-400">
                                        <span class="text-gray-600">We understand that sop/lor/resume/personal statement/blog/essay is important for you. We take care of the quality to make you fully satisfied. Thus, co-operate.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="mt-10">
                            <h2 class="text-sm font-bold text-gray-900">Do read above all points. Let’s start!</h2>
                        </div>
               
                </div>
            </div>
        </div>
    );
}

export default SopProductPage;
