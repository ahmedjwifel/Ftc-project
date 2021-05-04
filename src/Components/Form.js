import React from 'react'
import Logf from './form-components/Logf'



function Form() {
    return (
        <section className="relative  bk-blue ">
            <div className=" flex max-w-6xl mx-auto md:px-4 lg:px-6 w-full  md:mt-40 space-y-5 md:object-scale-down ">

            <div className="md:flex-1 justify-center self-center pr-10 pt-10 pb-10 flex-1">
                        <div className="flex items-center text-lg mb-2">
                            <span className="text-gray-300 mr-4">REQUEST FREE QUOTE</span>
                            <img className="h-4" src="images/Zigzag.svg" />
                        </div>
                        <p className="text-3xl	font-bold mb-10 text-white	">
                        Got tons of new ideas or you just
                        <br/> curiosity mind, and love to
                        <br/> explore?
                        </p>
                        <br/>
                        <br/>
                        <br/>
                        <p className="text-xl font-bold mb-10 text-white pr-10 pt-10 pb-10	">
                         Hit the button we are ready for collabs
                         <br/> and new projects!
                        </p>
                        </div>
                    
                    <div className="flex-1"> 
                        {<Logf />}
                    </div>
            </div>

            
        </section>
    )
}

export default Form;
