import { useState } from "react";
import axios from "axios";


function Popsmovie(){
    const [values, setvalues] = useState({
        names: '',
        categories: '',
        higthligths: '',
        descriptions: ''
    })

    const [images, setimages] = useState({
        imageurl: null,
        // videourl: null
    })

    const handleimages = (e) =>{
        setimages({...images,[e.target.name]: e.target.files[0]})
    }
    
    const handleinput = (vals)=>{
        setvalues(prev => ({...prev, [vals.target.name]:[vals.target.value]}))
    }

    const handlesub = (events) =>{
        events.preventDefault();

        const formdata = new FormData();

        if(images.imageurl) formdata.append('imageurl', images.imageurl);
        // if(images.videourl) formdata.append('videourl', images.videourl);

        axios.post("http://localhost:8080/home/movie/images",formdata)
        .then( res => {return res})
        .catch( err => {return err})

        axios.post("http://localhost:8080/home/movie",values)
        .then( res => {return res})
        .catch( err => {return err})
    }

    return(
        <div className="w-230 h-120 bg-indigo flex flex-col px-10">
            <h1 className="text-white my-5">#Movies entery point</h1>
            <div className="w-200 h-100 bg-transparent rounded-lg flex justify-center items-center">
                
                <form className="space-y-3 overflow-hidden overflow-y-auto" onSubmit={handlesub}>
                    <h1 className="text-white my-2">@ Movies component</h1>
                    <input 
                    type="text"  
                    name="names" 
                    placeholder="Movie name" 
                    className="mt-1 block w-150 px-4 py-2 bg-white border 
                    border-gray-300 rounded-xl text-sm shadow-sm placeholder-black-700
                    focus:outline-none focus:border-indigo-500 
                    focus:ring-1 focus:ring-indigo-500"
                    onChange={handleinput}>
                    </input>
                    <input 
                    type="text"
                    name="categories" 
                    placeholder="Category"
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
                    onChange={handleimages}>
                    </input>
                    <input 
                    type="file" 
                    id="videourl" 
                    name="videourl" 
                    placeholder="Video"
                    className="mt-1 block w-full px-4 py-2 bg-white border 
                    border-gray-300 rounded-xl text-sm shadow-sm placeholder-gray-400
                    focus:outline-none focus:border-indigo-500 
                    focus:ring-1 focus:ring-indigo-500"
                    onChange={handleimages}>
                    </input>
                    <div className="flex justify-center items-center">
                        <textarea name="higthligths" id="higthligths" 
                        placeholder="Higth ligth"
                        className="text-white  border-2 border-gray-300 px-15 rounded-lg placeholder-white focus:text-white focus:outline-none focus:border-indigo-500"
                        onChange={handleinput}
                        ></textarea>
                        <textarea name="descriptions" id="descriptions" 
                        placeholder="Description"
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

export default Popsmovie;