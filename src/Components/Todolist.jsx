import { format } from 'date-fns';
import React,{useEffect, useState} from 'react'
import { FaPlusCircle,FaMinusCircle,FaEdit,FaCheck} from "react-icons/fa";
import { Link } from 'react-router-dom';


function storage() {
  const storedTodos = JSON.parse(localStorage.getItem("todos"));
  return storedTodos ? storedTodos : [];
}

 function Todolist() {
    const [input, setInput] = useState("");
    const [todo, setTodo] = useState(storage());
    const [isEdit,setIsEdit]=useState(false);
    const [currentEditIndex,setCurrentEditIndex]=useState(null);

    
   useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todo));
          console.log(todo)
       },[todo]);
    


    const handleAdd=()=>{
        if(input.trim()){
            if(isEdit) {
                const editedTodos=todo.map((element,index)=>(
                     index === currentEditIndex ? {...element, text:input.trim() }:element
                ));
                setTodo(editedTodos);
                setIsEdit(false);
                setCurrentEditIndex(null);
                setInput("")
                   
            } else {
                setTodo([...todo,{text: input.trim(), completed:false}]);
            setInput("");
            

            }

            
        }

    }
    
    const handleDelete=(index)=>{
        setTodo(todo.filter((element,i) =>{
            return(
                i !==index
            )
        }));

    }
    const handleEdit=(index)=>{
     setInput(todo[index].text);
     setIsEdit(true);
     setCurrentEditIndex(index);
    }
    const handleComplete=(index)=>{
        const updatedTodos=todo.map((element,i)=>{
            return(
                i===index ? {...element,completed:!element.completed} :element

            )
        })
        setTodo(updatedTodos);

    }
    const currentDate = format(new Date(), "MMMM do, yyyy");



  return (
    
    <div className='flex flex-wrap justify-center items-center mx-auto bg-gradient-to-r from-purple-500 to-pink-500 '>
      
        
        <div className='h-screen'>
            <h1 className='font-Poppins text-3xl mt-10 font-medium animate-flip-down animate-once animate-ease-linear animate-fill-both'>{`Today is ${currentDate}`} <br />Let's get Started</h1>
           
            <input 
  className='border-solid border-2 border-black w-5/6 sm:w-64 md:w-72 lg:w-80 h-10 rounded-lg p-2 md:p-4 my-4' 
  type="text" 
  placeholder='Add task' 
  value={input} 
  onChange={(e) => setInput(e.target.value)}
/>
<div className='inline-block'>
 <FaPlusCircle 
  className='inline-block mx-auto animate-bounce text-2xl ml-2 sm:text-3xl md:text-4xl md:m-4 lg:text-5xl cursor-pointer'
  type='submit'
  onClick={handleAdd}
/> 
</div>



<div className='flex flex-wrap justify-center items-center p-4 sm:p-8'>
  <ul className='list-decimal m-4 sm:m-8 '>
    {todo.map((element, index) => (
      <li key={index} className='m-2 sm:m-4 font-Poppins text-lg sm:text-xl md:text-2xl animate-fade-left animate-once'>
        <span className={element.completed ? 'line-through' : ''}>{element.text}</span>
        <div className='flex justify-end items-center mt-2 float-right pl-8'>
          <FaMinusCircle
            className='cursor-pointer text-lg sm:text-xl md:text-2xl mx-1'
            onClick={() => handleDelete(index)}
          />
          <FaEdit
            className='cursor-pointer text-lg sm:text-xl md:text-2xl mx-1'
            onClick={() => handleEdit(index)}
          />
          <FaCheck
            className='cursor-pointer text-lg sm:text-xl md:text-2xl mx-1'
            onClick={() => handleComplete(index)}
          />
        </div>
      </li>
    ))}
  </ul>
 
</div>

 <Link to="/Hero"><h2 className='hover:underline mb-4 text-2xl font-semibold'>Back</h2></Link>


        </div>
      


    </div>

    
  )
}
export default Todolist;