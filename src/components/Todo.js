'use client'
import { useState } from "react"
import TodoUpdatePhase from "./TodoUpdatePhase"
import TodoDefaultPhase from "./TodoDefaultPhase"

export default function Todo({todoTitle,index,deleteTodo,editTodo}) {
    const [editable, setEditable] = useState(false)
    
    const toggleEditablePhase = ()=>{
        setEditable(!editable)
    }

    return <>{
        editable ? 
        (<TodoUpdatePhase editTodo={editTodo} index={index} todoTitle={todoTitle} toggleEditablePhase={toggleEditablePhase}/>):
        (<TodoDefaultPhase deleteTodo={deleteTodo} todoTitle={todoTitle} index={index} toggleEditablePhase={toggleEditablePhase}/>)
    }
    </>
    
}