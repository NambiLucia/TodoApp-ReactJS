import React from 'react';
import Hero from "./Components/Hero";
import Todolist from "./Components/Todolist";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';


export default function App() {
  return (
    <div>

        <Hero />

        <Todolist />
        <Router>
          <Routes>
            <Route path="/todolist" element={<Todolist />} />
          </Routes>





        </Router>




    </div>


  )
}
