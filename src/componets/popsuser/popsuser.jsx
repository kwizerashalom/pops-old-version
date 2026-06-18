import React from "react";

function Userinf(){
    
    return(
        <div className="w-230 h-115 bg-indigo flex flex-col px-10">
            <h1 className="text-white my-5"># User infomation</h1>
            <div className="w-200 h-auto bg-indigo 
            flex flex-col px-10 
            overflow-hidden 
            overflow-y-auto
            flex flex-center">
            {/* user access per a day */}
            <div className="w-170 h-70 bg-transparent rounded-xl border-2 border-gray-300">
            <h1 className="text-white my-2 px-5"># User access perday</h1>
            <div>
                <p className="text-white px-10">The amount of user access per day is .......</p>
            </div>

            </div>
            {/* user location */}
            <div className="w-170 h-70 bg-transparent mt-10  rounded-xl border-2 border-gray-300">
            <h1 className="text-white my-2 px-5"># User location</h1>
            {/* <table className="text-white my-2 px-5">
                <thead><td>Country</td><td>Amount</td></thead>
                <tr><td>Rwanda</td><td>0</td></tr>
            </table> */}
            
            </div>
            {/* user logger */}
            <div className="w-170 h-70 bg-transparent mt-10  rounded-xl border-2 border-gray-300">
            <h1 className="text-white my-2 px-5"># User logger</h1>
            <ol className="text-white my-2 px-5">
                <li>user logger here</li>
            </ol>
            </div>
            {/* user feed back */}
            <div className="w-170 h-70 bg-transparent mt-10  rounded-xl border-2 border-gray-300">
            <h1 className="text-white my-2 px-5"># User feed-back</h1>
            <ol className="text-white my-2 px-5">
                <li>
                    <div>
                        <p>this is the comments</p>
                    </div>
                </li>
            </ol>
            </div>
            {/* user email */}
            <div className="w-170 h-70 bg-transparent mt-10  rounded-xl border-2 border-gray-300">
            <h1 className="text-white my-2 px-5"># User email</h1>
            <ol className="text-white my-2 px-5">
                <li>
                    user email here
                </li>
            </ol>
            </div>
            </div>
            
            
        </div>
    )
}

export default Userinf;