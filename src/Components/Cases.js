import React from 'react'

function Cases() {
    return (
        <section>
       
        <section  className="relative   ">
        <div className=" max-w-6xl mx-auto px-5 md:px-4  md:mt-0 md:py-2 lg:px-6 space-y-20 ">

            <div className="justify-center self-center pt-30">
                <div className="flex items-start text-lg mb-2">
                    <span className="text-gray-300 mr-4">Case study </span>
                    <img className="h-4" src="images/Zigzag.svg" />
                </div>
                <h1 className="text-3xl	font-bold mb-10">
                Fueled by a deep understanding<br/> of the business context.
                </h1>
                
            </div>
            
            
        </div>
        {/* Cases sec*/}
        <section id="Cases-section" className="relative  h-screen   ">
            {/* 1st sec*/} 
        <div className="flex  md:h-screen max-w-6xl mx-auto px-5 md:px-4 py-20 mt-10 md:mt-0 md:py-2 lg:px-6 md:object-scale-down ">
        <div className="md:flex-1">
            </div>
            <div className="md:flex-1 justify-center self-center text-center">
                
                    <h1 className="font-bold mr-4 mb-2 text-2xl ">Analysis</h1>
                
                <p  className="font-bold">We analyze the entire system by
                 <br/> determining and specifying the
                 <br/>system business requirements
                 <br/> then build the expectations and 
                 <br/> the needs depending on it.</p>
               
            </div>
            
        </div>

        <img className="float-right md:absolute left-0 top-0 bottom-0 max-h-auto md:max-h-screen w-full px-5 md:px-0 md:w-1/2 object-cover  z-[-1] z--1 "
             src={require('../assets/images/casep.png').default}/>
    </section>
    <section id="Case2-section" className="relative  h-screen  ">
            {/* 2nd sec*/} 
        <div className="flex  md:h-screen max-w-6xl mx-auto px-5 md:px-4 py-20 mt-10 md:mt-0 md:py-2 lg:px-6">

            <div className="md:flex-1 justify-center self-center text-center">
                
                    <h1 className="font-bold mr-4 mb-2 text-2xl ">Web Development</h1>
                
                <p  className="font-bold">We build complete websites from scratch,
                <br/> we provide the full extent of building
                <br/>  Backend Systems and Frontend Systems.
                <br/> We guarantee a robust, maintainable,
                <br/> bug-free, quality code.</p>
               
            </div>
            <div className="md:flex-1">
            </div>
        </div>

        <img className="float-right md:absolute right-0 top-0 bottom-0 max-h-auto md:max-h-screen w-full px-5 md:px-0 md:w-1/2 object-cover  z-[-1] z--1 "
             src={require('../assets/images/casep.png').default}/>
    </section>
    <section id="Case3-section" className="relative  h-screen  ">
            {/* 3rd sec*/} 
        <div className="flex  md:h-screen max-w-6xl mx-auto px-5 md:px-4 py-20 mt-10 md:mt-0 md:py-2 lg:px-6 object-scale-down ">
        <div className="md:flex-1">
            </div>
            <div className="md:flex-1 justify-center self-center text-center">
                
                    <h1 className="font-bold mr-4 mb-2 text-2xl ">Mobile development</h1>
                
                <p  className="font-bold">We analyze the entire system by
                <br/> determining and specifying the system 
                <br/> business requirements then build the
                <br/>   expectations and the needs depending 
                <br/>  on it. </p>
               
            </div>
            
        </div>

        <img className="float-right md:absolute left-0 top-0 bottom-0 max-h-auto md:max-h-screen w-full px-5 md:px-0 md:w-1/2 object-cover  z-[-1] z--1 "
             src={require('../assets/images/casep.png').default}/>
    </section>

    <section id="Case4-section" className="relative  h-screen  ">
            {/* 4th sec*/} 
        <div className="flex  md:h-screen max-w-6xl mx-auto px-5 md:px-4 py-20 mt-10 md:mt-0 md:py-2 lg:px-6 object-scale-down">
        
            <div className="md:flex-1  justify-center self-center text-center">
                
                    <h1 className="font-bold mr-4 mb-2 text-2xl ">UX/UI Design </h1>
                
                <p  className="font-bold">We build complete websites from scratch, we
                <br/> provide the full extent of building Backend 
                <br/>Systems and Frontend Systems. We
                <br/> guarantee a robust, maintainable, bug-free,
                <br/> quality code.</p>
               
            </div>
            <div className="md:flex-1">
            
            </div>
        </div>
        <div className="max-w-2xl">
        <img className="float-right md:absolute right-0 top-0 bottom-0 max-h-auto md:max-h-screen w-full px-5 md:px-0 md:w-1/2 object-cover  z-[-1] z--1  "
             src={require('../assets/images/casep.png').default}/>
             </div>
    </section>
    </section>

    </section>
    )
}

export default Cases;
