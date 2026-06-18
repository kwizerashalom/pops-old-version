import React from "react";
import { useState } from "react";
import axios from "axios";

function Sideads(){

    const [values, setvalues] = useState({
        categories: '',
        datas: '',
        imageurl: '',
        videourl: ''
    })

    const handleinput = (vals) => {
        setvalues(prev => ({...prev, [vals.target.name]:[vals.target.value]}))
    }

    const handlesub = (events) =>{
        events.preventDefault();
        axios.post("http://localhost:8080/home/ads/side",values)
        .then( res => {return res})
        .catch( err => {return err})
    }

    return(
        <div className="w-200 h-100 bg-transparent rounded-lg flex justify-center items-center">
            <form className="space-y-3" onSubmit={handlesub}>
                    <h1 className="text-white my-2">@ Side Ads</h1>
                    <input 
                    type="text" 
                    id="categories" 
                    name="categories" 
                    placeholder="Categories" 
                    className="mt-1 block w-150 px-4 py-2 bg-white border 
                    border-gray-300 rounded-xl text-sm shadow-sm placeholder-black-700
                    focus:outline-none focus:border-indigo-500 
                    focus:ring-1 focus:ring-indigo-500"
                    onChange={handleinput}>
                    </input>
                    <input 
                    type="date" 
                    id="dates" 
                    name="date" 
                    className="mt-1 block w-full px-4 py-2 bg-white border 
                    border-gray-300 rounded-xl text-sm shadow-sm placeholder-gray-400
                    focus:outline-none focus:border-indigo-500 
                    focus:ring-1 focus:ring-indigo-500"
                    onChange={handleinput}>
                    </input>
                    <input 
                    type="file" 
                    id="imageurl" 
                    name="imageurl" 
                    placeholder="Image"
                    className="mt-1 block w-full px-4 py-2 bg-white border 
                    border-gray-300 rounded-xl text-sm shadow-sm placeholder-gray-400
                    focus:outline-none focus:border-indigo-500 
                    focus:ring-1 focus:ring-indigo-500"
                    onChange={handleinput}>
                    </input>
                    <input 
                    type="file" 
                    id="videourl" 
                    name="videourl" 
                    placeholder="Image"
                    className="mt-1 block w-full px-4 py-2 bg-white border 
                    border-gray-300 rounded-xl text-sm shadow-sm placeholder-gray-400
                    focus:outline-none focus:border-indigo-500 
                    focus:ring-1 focus:ring-indigo-500"
                    onChange={handleinput}>
                    </input>

                    <button type="submit" 
                    className="w-30 py-2 px-4 bg-indigo-600 
                    hover:bg-indigo-700 text-white 
                    font-semibold rounded-lg shadow 
                    focus:outline-none focus:ring-2 
                    focus:ring-indigo-500 focus:ring-offset-2 
                    transition-colors">
                    Publish
                    </button>
                </form>
        </div>
    )
}

export default Sideads;