import react from 'react'

import { Outlet } from 'react-router-dom';

function Popsads(){
    return(
        <div className="w-230 h-120 bg-indigo flex flex-col px-10">
            <h1 className="text-white my-5">#Ads page</h1>
            <div>
                <ul className='text-white flex gap gap-4'>
                    <button className="w-20 h-8
                     border-purple-200 text-white-600 
                     hover:border-transparent hover:bg-purple-600 
                     hover:text-white active:bg-purple-700 
                     hover:rounded-2xl">
                    
                    <a href="/home/ads/"><li>post Ads</li></a>
                    </button>
                    <button className="w-20 h-8
                     border-purple-200 text-white-600 
                     hover:border-transparent hover:bg-purple-600 
                     hover:text-white active:bg-purple-700 
                     hover:rounded-2xl">
                    <a href="/home/ads/side"><li>side ads</li></a>
                    </button>
                </ul>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}

export default Popsads;