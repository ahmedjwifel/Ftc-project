import React from 'react'
import Button from './Button'


function About() {
    return (
        <section className="relative ">
            <div className="max-w-6xl mx-auto md:px-4 lg:px-6 w-full  md:mt-40 space-y-5 ">
            <div className="">
                        <div className="flex items-center text-lg mb-2 pb-5 pr-5 pt-5">
                            <span className="-300 mr-4 blue-1">Get to know us</span>
                            <img className="h-4" src="images/Zigzag.svg" />
                        </div>
                        <h1 className="text-3xl	font-bold mb-10 p-0  blue-1">
                        ABOUT US
                        </h1>
                        <div className="font-bold text-sm md:text-2xl w-full  md:object-scale-down pr-5 pl-0 pb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br/>  incididunt ut labore et dolore magna aliqua. Vel turpis nunc eget lorem dolor. </div>
                        <div className="flex space-x-10 md:object-scale-down pr-10 pt-10 pb-10">
                            <div className="flex-1 text-xl" >Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Pharetra massa massa ultricies mi quis hendrerit. Tortor at risus viverra adipiscing at in tellus. A iaculis at erat pellentesque adipiscing commodo elit at. Viverra mauris in </div>
                            <div className="flex-1 text-xl" > Diam ut venenatis tellus in metus vulputate eu. Neque volutpat ac tincidunt vitae semper quis lectus nulla. Egestas diam in arcu cursus. Velit ut tortor pretium viverra suspendisse potenti nullam ac tortor. Diam ut venenatis tellus in metus vulputate eu s</div>
                        </div>
                       </div>

        </div>
        </section>
    )
}

export default About
