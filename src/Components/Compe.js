import React from 'react';

function Compe() {
    return (
        <section  className="relative ">
        
        <section className="max-w-6xl static mx-auto md:px-4 lg:px-6 w-full  md:mt-40 space-y-5 md:object-scale-down  ">
           <div className="w-full sm:text-center p-10 ">
            <h1 className=" text-4xl  ">Here’s what some of our<br/> partners are saying</h1></div>
            <section className="flex flex-raw space-x-5 ">
                
                         {/*first box*/}
            <section className="flex-1 border p-253 md:object-scale-down shadow-xl  ">
                    <div className="flex  justify-center p-5 ">
                    <img src={require('../assets/images/profile.svg').default} className="inline "></img>
                    <div className="inline m-5">
                        <h6 className="font-bold">John Doe</h6>
                        <>CEO of [company name]</>
                    </div>
                    </div>
                    <p className="p-5">“Powerful testimonial that’s relevant to what you’re discussing in this section. It should focus on problems and outcomes.”</p>
                     </section>
                         {/*seconed box*/}
                     <section className="flex-1 border md:object-scale-down shadow-xl  ">
                    <div className="flex justify-center p-5  ">
                    <img src={require('../assets/images/profile.svg').default} className="inline "></img>
                    <div className="inline m-5">
                        <h6 className="font-bold">John Doe</h6>
                        <>CEO of [company name]</>
                    </div>
                    </div>
                    <p className="p-5">“Powerful testimonial that’s relevant to what you’re discussing in this section. It should focus on problems and outcomes.”</p>
                     </section>
                     {/*third box*/}  
                     <section className="flex-1 border md:object-scale-down shadow-xl  ">  
                    <div className="flex justify-center p-5 ">
                    <img src={require('../assets/images/profile.svg').default} className="inline "></img>
                    <div className="inline m-5">
                        <h6 className="font-bold">John Doe</h6>
                        <>CEO of [company name]</>
                    </div>
                    </div>
                    <p className="p-5">“Powerful testimonial that’s relevant to what you’re discussing in this section. It should focus on problems and outcomes.”</p>
                    
                     </section>
                   
            </section>
        </section>
        </section>
    )
}

export default Compe;