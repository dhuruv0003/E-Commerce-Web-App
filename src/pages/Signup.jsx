import React, { useContext } from 'react'
import Template from '../Login Comp/Template'
import loginimg from "../assets/download.png"
import { AppContext } from '../Context/AppContext'
import { NavLink } from 'react-router-dom';
import { IoMdHeart } from 'react-icons/io';

export default function Signup() {
  const {isDarkMode,setHide} = useContext(AppContext)
   return (
    <div onClick={()=>setHide(true)} className={`${isDarkMode ? "bg-gradient-to-r from-slate-500 text-white to-black" : "bg-gradient-to-r from-blue-100  to-purple-100"} lg:h-full h-fit`}>
      <Template
      title="Welcome TO shopz"
      desc="Shop For Your Loved Ones"
      formtype="signup"
      image={loginimg}
      
    />
      <footer className={`${isDarkMode ? 'bg-gradient-to-r from-slate-400 to-slate-950 shadow-slate-900 shadow-lg text-white z-50 w-full ' : 'bg-gradient-to-r from-pink-100 to-indigo-500 shadow-black shadow-lg  z-50 w-full '}max-[600px]:py-6 py-6 mt-10 max-[600px]:flex sm:flex sm:flex-col gap-5 `}>
        <div className="max-[600px]:flex max-[600px]:flex-col  flex justify-center  max-[600px]:gap-1 gap-5 items-center max-[600px]:text-lg sm:text-xl px-8 font-extrabold ">
          <NavLink to='/'>
            Home
          </NavLink>
          <NavLink to='/login'>
            Login
          </NavLink>
          <NavLink to='/signup'>
            Sign up
          </NavLink>
          <NavLink to='/contact'>
            Contact 
          </NavLink>
          <NavLink to='/cart'>
            Cart
          </NavLink>
        </div>
        <div className="flex justify-center items-center gap-x-2 font-bold ">
          Made With<IoMdHeart className="text-[red] text-5xl mr-2 flex " /> Dhuruv Kumar
        </div>
      </footer>
    </div>
  )
}
