import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation, useNavigate } from 'react-router'

const Require = ({children}) => {
    const {isauth} = useSelector((store) => store.auth)
    const location = useLocation();
    const from = {
        pathname:location.pathname,
    }
   if(isauth){
   return children
   
   }
   return <Navigate to={"/login"} state={from} replace={true}/>
}

export default Require
