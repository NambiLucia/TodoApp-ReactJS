import React,{useState} from 'react'
import { FaPlusCircle,FaMinusCircle,FaEdit,FaCheck } from "react-icons/fa";


 function Todolist() {
    const [input, setInput] = useState("");
    const [todo, setTodo] = useState([]);
    const [isEdit,setIsEdit]=useState(false);
    const [currentEditIndex,setCurrentEditIndex]=useState(null);
    


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






  return (
    <div className='flex flex-wrap justify-center items-center mx-auto'>
        
        <div>
            <h1 className='text-center'>You can do it!!!</h1>
            <label>Add task:</label>
                {""}
            <input className='border-solid border-2 border-black  w-72 h-10 rounded-lg p-4'
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}/>
            <FaPlusCircle 
            className='inline-block mx-auto animate-bounce m-4 ml-2 font-bold text-4xl cursor-pointer'
            type='submit'
            onClick={handleAdd}/>


            
            <div className='flex flex-wrap justify-center items-center'>
                <ul className='list-decimal m-8'>
                  {todo.map((element,index)=>(
                    <li key={index} className='m-4'>
                       <sapn className={element.completed ? "line-through" : ""}>{element.text} </sapn> 
                    <div className='inline-block mx-auto ml-2'><FaMinusCircle className='cursor-pointer'
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

                    </li> 

                  ))}


                </ul>
            </div>




        </div>
      



    </div>
  )
}
export default Todolist;