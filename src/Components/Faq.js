import React from 'react'


function DetialsCard({ heading, body }) {
    return (
        <details class="mb-4 rounded bg-gray-200">
            <summary class="text-gray-600 font-semibold py-2 px-4">
                {heading}
            </summary>

            <p class='px-4 border-t-2 border-gray-400 py-2 border-dashed text-gray-600'>
                {body}
            </p>
        </details>
    )
}

function Faq() {

    return (
        <div>
            <section class="text-gray-700 text-left font-GorditaRegular border-t border-gray-200 py-2 border-dashed ">
                <div class="container px-5 py-24 mx-auto">
                    <div class="text-center mb-20">
                        <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                            Frequently Asked Question
                        </h1>
                    </div>
                    <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                        <div class="w-full  px-4">
                            <DetialsCard heading='Can I get documents Sample before making a decision ?'
                                body='Yes you can get a sample document in PDF Format Just fill up the form & our SOP counselor will share the sample with you an email.'/>
                            <DetialsCard heading='If I get documents in 3 day , will there be any compromise on Quality ?'
                                body='Not at all . Infact , Quality is our top most priority . We assure you that we will provide document without compromising on quality .'/>
                        </div>
                        <div class="w-full px-4">
                            <DetialsCard heading='How much time will it take to prepare SOP LOR ?'
                                body='Thereafter we will improve untill you are satisfied.Rest assured , we don’t compromise on quality , we also have other package where we can draft SOP in 2,4 days .'/>
                            <DetialsCard heading='How will you Improve my SOP ?'
                                body='Our trained SOP writers check for vocabulary , grammar , flow , plagiarism , SOP format , etc. Later our professional editors proofread the draft multiple times before sending to domain expert counsellors to finalize your SOP . We will make sure your SOP is unique & customized to each university application . '/>
                    
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Faq