'use client'

import Todo from "@/components/Todo";
import { useState } from "react";
import { FaPlusSquare } from "react-icons/fa";
import clsx from "clsx";
import { MdAdd } from "react-icons/md";

export default function Home() {

  const [todoTitle, setTodoTitle] = useState('');
  const [todos, setTodos] = useState([])
  const [empty,setEmpty] = useState(false)
  

  // When user interacting with the input field
  const takeInput = (value)=> {
      setTodoTitle(value)
  }

  // When clicked the add button
  const addTodo = (formData)=>{
    if(formData.get('typingField')){
      setTodos([...todos, todoTitle])
      setTodoTitle('')
      setEmpty(false)
    }else{
      setEmpty(true)
    }
  }

  const editTodo = (target,value)=>{
      todos.splice(target,1,value)
      setTodos([...todos])
  }

  const deleteTodo= (target)=>{
    todos.splice(target,1)
    setTodos([...todos])
  }
  
  return (
    <main className="mt-10 mx-auto container w-screen max-w-[500px]">
      <div className="h-fit p-10 mx-auto">
        <form action={addTodo} autoComplete="false" className="flex-col">
          <fieldset className="flex">
            <input name="typingField" type="text" placeholder="What to do?"
            onChange={(e)=>{takeInput(e.target.value)}}
            value={todoTitle}
            className="peer w-full flex-auto px-2 border-2 border-r-0 bg-green-50 border-green-400 h-10 rounded-l-lg" autoComplete='false'/>
            <button
            className="text-2xl bg-green-400 h-10 w-16 p-1 rounded-r-lg text-white hover:bg-green-500"
            ><MdAdd className="mx-auto"/></button>
          </fieldset>
          <small className={clsx(
            `flex-none text-red-300`,
            empty? 'visible' : 'invisible'
          )}>You&apos;re try to add an empty todo.</small>
        </form>
        <ul role="list" className="">
          { todos.length > 0 && todos.map((element,index)=>{
              return (<Todo key={element} todoTitle={element} index={index} deleteTodo={deleteTodo} editTodo={editTodo}/>)
            })
          }
        </ul>
      </div>
    </main>
  );
}
