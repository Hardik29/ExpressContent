import React from 'react'
import Contacts from '../Components/Contacts'

function ContactUs() {
    return (
        <div class="px-5 py-48 flex flex-wrap justify-center font-GorditaMedium">

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
        </div>
    )
}

export default ContactUs