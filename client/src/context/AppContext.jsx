import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios'
export const AppContext = createContext()
import {useNavigate} from 'react-router-dom'

const AppContextProvider = (props)=>{
  const [user,setUser] = useState() ; 
  const[showLogin,setShowLogin] = useState(false);
  const [token,setToken] = useState(localStorage.getItem('token'))
  const backendUrl = import.meta.env.VITE_BACKEND_URL

  const navigate = useNavigate()

  const [credit,setCredit] = useState(false)
  const loadCredits = async()=>{
    try {
      const {data} = await axios.get(backendUrl+'/api/user/credits' , {headers :{token}})
      if(data.success){
        setCredit(data.credits)
        setUser(data.user)
      }
      
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }
  const logOut = ()=>{
    localStorage.removeItem('token')
    setToken('');
    setUser(null)
  }
  const generateImage = async(prompt)=>{
    try {
      const {data} = await axios.post(backendUrl+'/api/image/generate-image',{prompt},{headers:{token}})

      if(data.success){
        loadCredits()
        return data.resultImage 
      }else{
        toast.error(data.message)
        loadCredits()
        if(data.creditBalance == 0 ){
          navigate('/buy')
        }
      }
      
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    if(token){
      loadCredits()
    }
  },[token])

  
  const value = {
    user,setUser,showLogin,setShowLogin ,backendUrl,token,setToken,credit,setCredit,loadCredits,logOut,generateImage
  }  

  return(
    <AppContext.Provider value = {value}>
        {props.children}
    </AppContext.Provider>
  )
}
export default AppContextProvider ;