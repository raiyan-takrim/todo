'use client'

import Todo from "@/components/Todo";
import { useState } from "react";

export default function Home() {

  const [todoTitle, setTodoTitle] = useState('');
  const [todos, setTodos] = useState([])
  

  // When user interacting with the input field
  const takeInput = (value)=> {
      setTodoTitle(value)
  }

  // When clicked the add button
  const addTodo = ()=>{
    setTodos([...todos, todoTitle])
    setTodoTitle('')
  }

  const editTodo = (target)=>{
    console.log("edit index of " + target)
    // todos.splice(target,1,todoTitle)
  }

  const deleteTodo= (target)=>{
    todos.splice(target,1)
    setTodos([...todos])
  }
  
  return (
    <main className="mx-auto h-screen container w-screen">
      <h1 className="text-xl">TODOs</h1>
      <div className="h-fit w-fit p-10 mx-auto bg-green-100">
        <form action={addTodo} className="flex" autoComplete="false">
          <input name="typingField" type="text" placeholder="Type here..."
          onChange={(e)=>{takeInput(e.target.value)}}
          value={todoTitle}
          className="peer px-2 border-2 bg-green-50 border-green-400 h-10 rounded-l-lg" autoComplete='false' required/>
          <button className="bg-green-400 h-10 w-20 p-2 rounded-r-lg text-white hover:bg-inherit border-2 border-l-0 border-green-400  hover:text-green-400 align-middle"
          >Add</button>
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
