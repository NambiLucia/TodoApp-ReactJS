import { format } from 'date-fns';
import React,{useEffect, useState} from 'react'
import { FaPlusCircle,FaMinusCircle,FaEdit,FaCheck } from "react-icons/fa";


 function Todolist() {
    const [input, setInput] = useState("");
    const [todo, setTodo] = useState([]);
    const [isEdit,setIsEdit]=useState(false);
    const [currentEditIndex,setCurrentEditIndex]=useState(null);

    useEffect(()=>{
        const storedTodos=JSON.parse(localStorage.getItem("todos"));
        console.log(storedTodos)
        if(storedTodos){
            setTodo(storedTodos);
        }
    },[]);
    
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
    <div className='flex flex-wrap justify-center items-center mx-auto bg-gradient-to-r from-purple-500 to-pink-500 h-screen'>
        
        <div>
            <h1 className='text-center font-Poppins text-3xl'>{currentDate}</h1>
           
            <input className='border-solid border-2 border-black  w-72 h-10 rounded-lg p-4'
            type="text" 
            placeholder='Add task'
            value={input}
            onChange={(e) => setInput(e.target.value)}/>
            <FaPlusCircle 
            className='inline-block mx-auto animate-bounce m-4 ml-2 font-bold text-4xl cursor-pointer'
            type='submit'
            onClick={handleAdd}/>


            
            <div className='flex flex-wrap justify-center items-center'>
                <ul className='list-decimal m-8'>
                  {todo.map((element,index)=>(
                    <li key={index} className='m-4 font-Poppins text-2xl'>
                       <span className={element.completed ? "line-through" : ""}>{element.text} </span> 

                       <div className='inline-flex justify-items-end items-center mx-auto me-auto ml-20 p-4 w-32 h-14'>
                    <div className='inline-block mx-auto ml-2 '><FaMinusCircle className='cursor-pointer'
                    onClick={()=>(handleDelete(index))}

                    />
                    
                    
                    </div>
                            <div className='inline-block mx-auto ml-2'>
                                <FaEdit className='cursor-pointer' onClick={()=>{handleEdit(index)}}/>


                            </div>

                            <div className='inline-block mx-auto ml-2'>

                            <FaCheck className='cursor-pointer line-through' 
                            onClick={()=>{handleComplete(index)}}/>

                            </div>
                            </div>

                    </li> 

                  ))}


                </ul>
            </div>




        </div>
      



    </div>
  )
}
export default Todolist;