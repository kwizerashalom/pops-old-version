import axios from "axios";
import { useState } from "react";

function Popsall(){

    const [values, setvalues] = useState({
        categories : '',
        dates :'',
        higthligths : '',
        descriptions :''
    })

    const [imgs, setimgs] = useState({
        img1 : null,
        img2 : null,
        img3 : null,
        img4 : null
    })

    const handleimgs = (e) => {
        setimgs({...imgs,[e.target.name]: e.target.files[0]})
    }

    const handleinput = (vals)=>{
        setvalues(prev => ({...prev, [vals.target.name]:[vals.target.value]}))
    }

    const handlesub = (events) =>{
        events.preventDefault();
        const formdata = new FormData();

        if(imgs.img1) formdata.append('img1', imgs.img1);
        if(imgs.img2) formdata.append('img2', imgs.img2);
        if(imgs.img3) formdata.append('img3', imgs.img3);
        if(imgs.img4) formdata.append('img4', imgs.img4);

        axios.post("http://localhost:8080/home/all/imgs", formdata)
        .then( res => {
            return res;
            
        })
        .catch( err => {return err})
        
        axios.post("http://localhost:8080/home/all/datas", values)
        .then( res => {
            return res;
            
        })
        .catch( err => {return err})
    }
    
    return(
        <div className="w-230 h-120 bg-indigo flex flex-col px-10">
            <h1 className="text-white my-5">#All page</h1>
            <div className="w-200 h-100 bg-transparent rounded-lg flex justify-center items-center overflow-hidden overflow-y-auto">
                
                <form className="space-y-3" onSubmit={handlesub}>
                    <h1 className="text-white my-5 pt-10">@ All component</h1>
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
                    type="date" 
                    id="date" 
                    name="dates" 
                    className="mt-1 block w-full px-4 py-2 bg-white border 
                    border-gray-300 rounded-xl text-sm shadow-sm placeholder-gray-400
                    focus:outline-none focus:border-indigo-500 
                    focus:ring-1 focus:ring-indigo-500"
                    onChange={handleinput}
                    >
                    </input>
                    <input 
                    type="file" 
                    id="imageurl" 
                    name="img1" 
                    placeholder="Image"
                    className="mt-1 block w-full px-4 py-2 bg-white border 
                    border-gray-300 rounded-xl text-sm shadow-sm placeholder-gray-400
                    focus:outline-none focus:border-indigo-500 
                    focus:ring-1 focus:ring-indigo-500"
                    onChange={handleimgs}
                    >
                    </input>
                    <input 
                    type="file" 
                    id="imageurl" 
                    name="img2" 
                    placeholder="Image"
                    className="mt-1 block w-full px-4 py-2 bg-white border 
                    border-gray-300 rounded-xl text-sm shadow-sm placeholder-gray-400
                    focus:outline-none focus:border-indigo-500 
                    focus:ring-1 focus:ring-indigo-500"
                    onChange={handleimgs}
                    >
                    </input><input 
                    type="file" 
                    id="imageurl" 
                    name="img3" 
                    placeholder="Image"
                    className="mt-1 block w-full px-4 py-2 bg-white border 
                    border-gray-300 rounded-xl text-sm shadow-sm placeholder-gray-400
                    focus:outline-none focus:border-indigo-500 
                    focus:ring-1 focus:ring-indigo-500"
                    onChange={handleimgs}
                    >
                    </input>
                    <input 
                    type="file" 
                    id="videourl" 
                    name="img4" 
                    placeholder="Video"
                    className="mt-1 block w-full px-4 py-2 bg-white border 
                    border-gray-300 rounded-xl text-sm shadow-sm placeholder-gray-400
                    focus:outline-none focus:border-indigo-500 
                    focus:ring-1 focus:ring-indigo-500"
                    onChange={handleimgs}
                    >
                    </input>
                    <div className="flex justify-center items-center">
                        <textarea name="higthligths" id="higthligth" 
                        placeholder="Higth ligth"
                        className="text-white border-2 border-gray-300 px-15 rounded-lg placeholder-white focus:text-white focus:outline-none focus:border-indigo-500"
                        onChange={handleinput}
                        ></textarea>
                        <textarea name="descriptions" id="description" 
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

export default Popsall;