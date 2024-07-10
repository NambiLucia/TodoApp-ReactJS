import React from 'react';
import Hero from "./Components/Hero";
import Todolist from "./Components/Todolist";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Components/Home';


export default function App() {
  return (
    <div>

     
        <Router>
          <Routes>

            <Route path="/todolist" element={<Todolist />} />

            <Route path="/" element={<Home />} />
            <Route path="/hero" element={<Hero />} />

          </Routes>





        </Router>




    </div>


  )
}
