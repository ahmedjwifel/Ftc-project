import React from 'react'

function Casestudies() {
    return (
        <section id="Casestudies-section" className="relative h-screen   ">
        <div className="flex   mx-auto px-5 md:px-4 py-20 mt-10 md:mt-0 md:py-2 lg:px-6">

            <div className="md:flex-1 justify-start  self-center">
                <div className="flex items-start text-lg mb-2">
                    <span className="text-gray-300 mr-4">CASE STUDIES</span>
                    <img className="h-4" src="images/Zigzag.svg" />
                </div>
                <h1 className="text-3xl	font-bold mb-10 relative">
                Read what we have achieved
                for our clients
                </h1>
            </div>
            <div className="md:flex-1">
            </div>
        </div>
        <br/>
        <div className="flex space-x-5 ">
        <div className="flex-1 object-scale-down "><img src={require('../assets/images/cs1.svg').default}/></div>
        <div className="flex-1 object-scale-down"><img src={require('../assets/images/cs2.svg').default}/></div>
        <div className="flex-1 object-scale-down"><img src={require('../assets/images/cs3.svg').default}/></div>


        </div>
        
    </section>
    )
}

export default Casestudies
