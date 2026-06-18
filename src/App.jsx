// popsall popsfash popsmovie popsads userinf

import Popsall from "./componets/popsall/popsall"
import Popsfash from "./componets/popsfash/popsfash"
import Popsmovie from "./componets/popsmovie/popsmovie"
import Popstravel from "./componets/popstravel/popstravel"
import Popsads from "./componets/popsads/popsads"
import Userinf from "./componets/popsuser/popsuser"
import Loginsystem from "./login/login"
import Home from "./home"

//posstads sideads

import Postads from "./componets/popsads/postads/postads"
import Sideads from "./componets/popsads/sideads/sideads"

import { Routes, Route} from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

function App() {

  useEffect(()=>{
        axios.get('http://localhost:8080/user')
        .then(res=> {
            if(res.data.valided){
                navigate('/home ')
            }else{
                navigate('/')
            }  
        })
        .catch(err => {console.log(err);
        })
    },[])

return(
  
  <div>
      <Routes>
        <Route path="/" element={<Loginsystem></Loginsystem>}></Route>
        <Route path="/home" element={<Home></Home>}>

            <Route path="/home/" element={<Userinf></Userinf>}></Route>
            <Route path="/home/all" element={<Popsall></Popsall>}></Route>
            <Route path="/home/movies" element={<Popsmovie></Popsmovie>}></Route>
            <Route path="/home/fashion" element={<Popsfash></Popsfash>}></Route>
            <Route path="/home/travel" element={<Popstravel></Popstravel>}></Route>
            <Route path="/home/ads" element={<Popsads></Popsads>}>
              
              <Route path="/home/ads/" element={<Postads></Postads>}></Route>
              <Route path="/home/ads/side" element={<Sideads></Sideads>}></Route>
              
            </Route>
        </Route> 
      </Routes>
  </div>
)
  
}

export default App;
