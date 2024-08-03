'use client'

import Todo from "@/components/Todo";
import { useState } from "react";
import { FaPlusSquare } from "react-icons/fa";
import clsx from "clsx";

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
    <main className="mx-auto h-screen container w-screen">
      <h1 className="text-xl">TODOs</h1>
      <div className="h-fit w-fit p-10 mx-auto bg-green-100">
      <form action={addTodo} autoComplete="false">
          <fieldset className="flex">
            <input name="typingField" type="text" placeholder="What to do?"
            onChange={(e)=>{takeInput(e.target.value)}}
            value={todoTitle}
            className="peer px-2 border-2 border-r-0 bg-green-50 border-green-300 h-10 rounded-l-lg" autoComplete='false'/>
            <button
            className="text-xl bg-green-500 h-10 w-20 p-1 rounded-r-lg text-white hover:bg-green-400"
            ><FaPlusSquare className="mx-auto"/></button>
          </fieldset>
          <small className={clsx(
            `flex-none text-red-300`,
            empty? 'visible' : 'invisible'
          )}>You&apos;re try to add an empty todo.</small>
        </form>
        <ul role="list" className="mt-10">
          { todos.length > 0 && todos.map((element,index)=>{
              return (<Todo key={element} todoTitle={element} index={index} deleteTodo={deleteTodo} editTodo={editTodo}/>)
            })
          }
        </ul>
      </div>
    </main>
  );
}
