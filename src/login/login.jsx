import react from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Loginsystem(){
    axios.defaults.withCredentials = true;

    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:8080/user')
        .then(res=> {
            if(res.data.valided){
                navigate('/home')
            }else{
                navigate('/')
            }    
        })
        .catch(err => {console.log(err);
        })
    },[])

    const [message, setmessage] = useState('');
    const [values, setvalues] = useState({
        email:"",
        password:""
    })

    const handledata = (vals) =>{
            setvalues(prev => ({...prev, [vals.target.name]:[vals.target.value]}))
    }

    const handlesub = (events)=>{
        events.preventDefault();

        axios.post("http://localhost:8080/login", values)
        .then((res)=>{
            if(res.data.User){
                alert("user is not available!!")
            }
            else if(res.data.Login){
                navigate('/home')
            }
            else if(!res.data.Login){
                
                setmessage("wrongs password")
            }
            else{
                alert(" bad creadentials!!!")
            }
            
        }).catch((err)=>{console.log(err);
        })  
    }

    return(
        <div className='w-100% h-158 bg-linear-to-r from-fuchsia-950 
                        to-indigo-950 flex justify-center items-center'>
            <div className='w-230  bg-indigo flex justify-center items-center'>
                <div className='flex flex-col h-150 '>
                    <div className='flex justify-center items-center mt-20 text-white'>
                        <p>
                            Popup
                        </p>
                    </div>
                    <form className="h-50 space-y-3 border-2 border-gray-300 px-15 rounded-2xl mt-20" onSubmit={handlesub}>
                        <h1 className="text-white my-2"># Login</h1>
                        
                        <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="User email"
                        className="mt-1 block w-full px-4 py-2 bg-white border 
                        border-gray-300 rounded-xl text-sm shadow-sm placeholder-gray-400
                        focus:outline-none focus:border-indigo-500 
                        focus:ring-1 focus:ring-indigo-500"
                        onChange={handledata}>
                        </input>
                        
                        <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder={"password"}
                        className="mt-1 block w-full px-4 py-2 bg-white border 
                        border-gray-300 rounded-xl text-sm shadow-sm placeholder-gray-400
                        focus:outline-none focus:border-indigo-500 
                        focus:ring-1 focus:ring-indigo-500"
                        onChange={handledata}>
                        </input>

                        <button type="submit" 
                        className="w-30 py-2 px-4 bg-indigo-600 
                        hover:bg-indigo-700 text-white 
                        font-semibold rounded-lg shadow 
                        focus:outline-none focus:ring-2 
                        focus:ring-indigo-500 focus:ring-offset-2 
                        transition-colors">
                        Login
                        </button>
                    </form>
                    <p className='text-white text-center'>{message}</p>

                    <div className='flex justify-center items-center mt-30 text-white'>
                        
                        <p>
                            <span className='mx-2'>from</span> <br />Omoo's
                        </p>
                    </div>
                </div>
                
                
            </div>
        </div>
    )
}

export default Loginsystem;