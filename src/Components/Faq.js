import React from 'react'


function DetialsCard({ heading, body }) {
    return (
        <details class="mb-4 bg-gray-100 rounded">
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
            <section class="text-gray-700 text-left font-GorditaRegular border-t border-gray-200 py-2 border-dashed">
                <div class="container px-5 py-24 mx-auto">
                    <div class="text-center mb-20">
                        <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                            Frequently Asked Question
                        </h1>
                    </div>
                    <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                        <div class="w-full lg:w-1/2 px-4">
                            <DetialsCard heading='How Long is this site live?'
                                body='Laboris qui labore cillum culpa in sunt quis sint veniam.
                      Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                      minim velit nostrud pariatur culpa magna in aute.'/>
                            <DetialsCard heading='How Long is this site live?'
                                body='Laboris qui labore cillum culpa in sunt quis sint veniam.
                      Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                      minim velit nostrud pariatur culpa magna in aute.'/>
                            <DetialsCard heading='How Long is this site live?'
                                body='Laboris qui labore cillum culpa in sunt quis sint veniam.
                      Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                      minim velit nostrud pariatur culpa magna in aute.'/>
                        </div>
                        <div class="w-full lg:w-1/2 px-4">
                            <DetialsCard heading='How Long is this site live?'
                                body='Laboris qui labore cillum culpa in sunt quis sint veniam.
                      Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                      minim velit nostrud pariatur culpa magna in aute.'/>
                            <DetialsCard heading='How Long is this site live?'
                                body='Laboris qui labore cillum culpa in sunt quis sint veniam.
                      Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                      minim velit nostrud pariatur culpa magna in aute.'/>
                            <DetialsCard heading='How Long is this site live?'
                                body='Laboris qui labore cillum culpa in sunt quis sint veniam.
                      Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                      minim velit nostrud pariatur culpa magna in aute.'/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Faq