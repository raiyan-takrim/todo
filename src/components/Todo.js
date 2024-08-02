'use client'
import { useState } from "react"
import { FaPenToSquare, FaTrash } from "react-icons/fa6";

export default function Todo({todoTitle,index,deleteTodo,editTodo}) {
    return(
        
        <div className="group border-t-2 last:border-b-2 border-green-200 py-4 flex">
            <input type="checkbox"
            className="peer"
            />
            <li className="flex-1 peer-checked:line-through ml-4 peer-checked:text-neutral-500">{todoTitle}</li>
            <button onClick={()=> editTodo(index)} 
            className="text-green-500 mx-2"><FaPenToSquare/></button>
            <button onClick={()=> deleteTodo(index)}
                className="text-red-200"
                >
                    <FaTrash />
                </button>
        </div>
    )
}