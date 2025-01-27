import React from 'react'
import { FaAngleDoubleUp } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaClipboardList } from "react-icons/fa";

 function Hero() {
  
  return (
    <div>
      <div className='bg-[#d44dbb] w-full h-screen p-6 md:p-14'>
        <h1 className='font-Poppins text-2xl md:text-4xl font-bold text-center animate-fade-right animate-once animate-ease-linear animate-fill-both'>TODO LIST <FaClipboardList className='inline-block mx-auto m-2'/><br />WELCOME BACK!!</h1>
        <div className='m-10 md:m-20'>

            <h2 className='font-Poppins text-xl md:text-3xl text-center font-medium leading-loose animate-fade-left animate-once animate-ease-linear'>It's been a while,<br /> Swipe Up to Start your day <br />
        </h2>
        </div>
      
        <div>
          <Link to="/Todolist">
          
        <FaAngleDoubleUp className='animate-bounce text-8xl text-center mx-auto m-20'/>  

          </Link>

        </div>
      
        



      </div>
    </div>
  )
}
export default Hero;