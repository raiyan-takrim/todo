import { useState } from "react";
import UpdateButton from "./UpdateButton";

export default function TodoUpdatePhase({editTodo,index,todoTitle,toggleEditablePhase}) {
    const [updatedTitle, setUpdatedTitle] = useState(todoTitle)
    // console.log(updatedTitle)
    const takeInput = (value)=>{
        setUpdatedTitle(value)
    }
    return (
    <div className="group border-t-2 last:border-b-2 border-green-200 py-4 flex">
        <input type="text"
            className="peer flex-1"
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
    </div>)
}