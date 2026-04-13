import { useDispatch } from "react-redux";
import React, {useEffect, useState } from "react";
import authService from "./appwrite/auth";
import {login, logout} from "./store/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setloading] = useState(true)
  const dispatch = useDispatch()
  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData){
        dispatch(login({
          userData:{
          $id: userData.$id,
          name: userData.name,
          email: userData.email,
          }
        }))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(() => setloading(false))
  }, [])

  
  return !loading ? (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#0f0f0f' }}>
      <div className="w-full block">
        <Header />
        <main>
         <Outlet /> 
        </main>
        <Footer />
      </div>
      
    </div>
  ) :null
}

export default App
