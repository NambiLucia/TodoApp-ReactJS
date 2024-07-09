import React from 'react'
import { FaAngleDoubleUp } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Todolist from './Todolist';

 function Hero() {
  
  return (
    <div>
      <div className='bg-[#d44dbb] w-full h-screen p-6 md:p-14'>
        <h1 className='font-Poppins text-2xl md:text-4xl font-bold text-center'>TODO LIST<br />WELCOME BACK!!</h1>
        <div className='m-10 md:m-20'>

            <h2 className='font-Poppins text-xl md:text-3xl text-center font-medium leading-loose'>It's been a while,<br /> Swipe Up to Start your day <br />
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