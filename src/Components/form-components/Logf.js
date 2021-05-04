import { LockClosedIcon } from '@heroicons/react/solid'
import Drop from './Drop'
export default function Example() {
  return (
    <div className=" min-h-full flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bk-blue">
      <div className="max-w-md w-full space-y-8">
        
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm  space-y-5">
            <div>
              <input
                id="Name-id"
                name="Name"
                type="text"
                
                required
                className="border-class appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-white text-white rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bk-blue"
                placeholder="Your Name  "
              />
            </div>
            <div>
             
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="border-class appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-white text-white rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bk-blue"
                placeholder="Email "
              />
            </div>
            <div>
             {<Drop id="Service"

placeholder="Service category " />}  
            </div>
            <div>
             
              <input
                id="date"
                name="date-name"
                type="date"
               
                required
                className="border-class appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-white text-white rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bk-blue"
                placeholder="Schedule a meeting "
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            

            
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4   text-sm font-medium rounded-full border py-100 px-200 text-white  hover:bk-blue focus:outline-none  focus:bk-blue bk-blue border-col"
            >
             Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}