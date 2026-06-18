import axios from "axios";
import React from "react";
import { useState } from "react";

function Popsfash(){
    const [values, setvalues] = useState({
        categories: '',
        brand: '',
        names: '',
        designer: '',
        imageurlone: '',
        imageurltwo: '',
        imageurlthree: '',
        imageurlfour: '',
        higthligths: '',
        descriptions: ''
    })

    const handleinput = (vals) => {
        setvalues(prev => ({...prev,[vals.target.name]:[vals.target.value]}))
    }

    const handlesub = (events) => {
        events.preventDefault();
        axios.post("http://localhost:8080/home/fashion",values)
        .then( res => {return res})
        .catch( err =>{ return err})
    }
    return(
        <div className="w-230 h-120 bg-indigo flex flex-col px-10">
            <h1 className="text-white my-5">#Fashion page</h1>
            <div className="w-200 h-100 bg-transparent rounded-lg flex justify-center items-center overflow-hidden overflow-y-auto">
                    
                <form className="space-y-3 overflow-hidden overflow-y-auto" onSubmit={handlesub}>
                    <h1 className="text-white mt-20 pt-10">@Fashion component</h1>
                    <input 
                    type="text" 
                    id="categories" 
                    name="categories" 
                    placeholder="Categories" 
                    className="mt-1 block w-150 px-4 py-2 bg-white border 
                    border-gray-300 rounded-xl text-sm shadow-sm placeholder-black-700
                    focus:outline-none focus:border-indigo-500 
                    focus:ring-1 focus:ring-indigo-500"
                    onChange={handleinput}
                    >
                    </input>
                    <input 
                    type="text" 
                    id="brand" 
                    name="brand" 
                    placeholder="Bland" 
                    className="mt-1 block w-150 px-4 py-2 bg-white border 
                    border-gray-300 rounded-xl text-sm shadow-sm placeholder-black-700
                    focus:outline-none focus:border-indigo-500 
                    focus:ring-1 focus:ring-indigo-500"
                    onChange={handleinput}>
                    </input>
                    <input 
                    type="text" 
                    id="names" 
                    name="names" 
                    placeholder="Clother name"
                    className="mt-1 block w-full px-4 py-2 bg-white border 
                    border-gray-300 rounded-xl text-sm shadow-sm placeholder-gray-400
                    focus:outline-none focus:border-indigo-500 
                    focus:ring-1 focus:ring-indigo-500"
                    onChange={handleinput}>
                    </input>

                    <input 
                    type="text" 
                    id="desinger" 
                    name="designer" 
                    placeholder="Desginer name"
                    className="mt-1 block w-full px-4 py-2 bg-white border 
                    border-gray-300 rounded-xl text-sm shadow-sm placeholder-gray-400
                    focus:outline-none focus:border-indigo-500 
                    focus:ring-1 focus:ring-indigo-500"
                    onChange={handleinput}>
                    </input>

                    <input 
                    type="file" 
                    id="imageurl" 
                    name="imageurlone" 
                    placeholder="Image"
                    className="mt-1 block w-full px-4 py-2 bg-white border 
                    border-gray-300 rounded-xl text-sm shadow-sm placeholder-gray-400
                    focus:outline-none focus:border-indigo-500 
                    focus:ring-1 focus:ring-indigo-500"
                    onChange={handleinput}>
                    </input>
                    <input 
                    type="file" 
                    id="imageurl" 
                    name="imageurltwo" 
                    placeholder="Image"
                    className="mt-1 block w-full px-4 py-2 bg-white border 
                    border-gray-300 rounded-xl text-sm shadow-sm placeholder-gray-400
                    focus:outline-none focus:border-indigo-500 
                    focus:ring-1 focus:ring-indigo-500"
                    onChange={handleinput}>
                    </input>
                    <input 
                    type="file" 
                    id="imageurl" 
                    name="imageurlthree" 
                    placeholder="Image"
                    className="mt-1 block w-full px-4 py-2 bg-white border 
                    border-gray-300 rounded-xl text-sm shadow-sm placeholder-gray-400
                    focus:outline-none focus:border-indigo-500 
                    focus:ring-1 focus:ring-indigo-500"
                    onChange={handleinput}>
                    </input>
                    <input 
                    type="file" 
                    id="imageurl" 
                    name="imageurlfour" 
                    placeholder="Image"
                    className="mt-1 block w-full px-4 py-2 bg-white border 
                    border-gray-300 rounded-xl text-sm shadow-sm placeholder-gray-400
                    focus:outline-none focus:border-indigo-500 
                    focus:ring-1 focus:ring-indigo-500"
                    onChange={handleinput}>
                    </input>
                    
                    <div className="flex justify-center items-center">
                        <textarea name="higthligths" id="" 
                        placeholder="Higth ligth"
                        className="text-white border-2 border-gray-300 px-15 rounded-lg placeholder-white focus:text-white focus:outline-none focus:border-indigo-500"
                        onChange={handleinput}
                        ></textarea>
                        <textarea name="descriptions" id="" 
                        placeholder="Descriptions"
                        className="text-white border-2 border-gray-300 px-15 mx-2 rounded-lg placeholder-white focus:text-white focus:outline-none focus:border-indigo-500"
                        onChange={handleinput}
                        ></textarea>
                    </div>

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
        </div>
    )
}

export default Popsfash;