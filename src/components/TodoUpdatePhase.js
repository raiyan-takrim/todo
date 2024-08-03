import { useState } from "react";
import UpdateButton from "./UpdateButton";

export default function TodoUpdatePhase({editTodo,index,todoTitle,toggleEditablePhase}) {
    const [updatedTitle, setUpdatedTitle] = useState(todoTitle)
    // console.log(updatedTitle)
    const takeInput = (value)=>{
        setUpdatedTitle(value)
    }
    return (
    <form className="group text-green-700 border-t-2 last:border-b-2 border-green-100 p-4 flex bg-green-200">
        <input type="text"
            className="peer flex-1 bg-inherit outline-none text-lg w-full"
            value={updatedTitle}
            onChange={(e)=>
                {
                    // console.log(e.target.value)
                    takeInput(e.target.value)
                }
            }
            autoFocus='true'
        />
        <UpdateButton editTodo={editTodo} index={index} updatedTitle={updatedTitle} toggleEditablePhase={toggleEditablePhase}/>
    </form>)
}