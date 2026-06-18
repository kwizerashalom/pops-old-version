import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home(){
    axios.defaults.withCredentials = true;

    const navigate = useNavigate();

    const handlelog = () =>{
        axios.get('http://localhost:8080/logout')
        .then((res)=>{
            navigate('/')
            
        }).catch((err)=>{
            console.log(err);            
        })
    }

    return(
        <div className="w-100% h-158 bg-linear-to-r from-fuchsia-950 to-indigo-950 flex justify-center items-center">
            <div className="w-300 h-140 bg-gray-950 rounded-lg">

                <h1 className="text-white text-center">#Owner dashboard</h1>

                <div className="w-300 h-130 bg-gray-950 rounded-lg flex justify-center items-center">
                    
                        <div className="w-50 h-120 bg-gray rounded-lg">
                        <ul className="text-white py-10 px-10">
                            <li className="my-3"><a href="/home/">User Info</a></li>
                            <li className="my-3"><a href="/home/all">All</a></li>
                            <li className="my-3"><a href="/home/movies">Movies</a></li>
                            <li className="my-3"><a href="/home/fashion">Fashion</a></li>
                            <li className="my-3"><a href="/home/travel">Discover</a></li>
                            <li className="my-3"><a href="/home/ads">Ads</a></li>
                            <li className="my-5">
                                <button 
                                   className="
                                    px-1
                                    py-1.2
                                    border-2 border-gray-300 
                                    hover:bg-fuchsia-950 text-white 
                                    rounded-lg shadow 
                                    transition-colors
                                    "
                                    onClick={handlelog}
                                >Logout</button>
                            </li>
                        </ul>
                        </div>
                        
                        <div className="w-240 h-120 bg-transparent border-2 border-indigo-950 rounded-lg">
                            <Outlet/>
                        </div>
                        
                </div>
            </div>
        </div>
    )
}

export default Home;