'use client'

import { FaRegSquareCheck, FaSquareCheck } from "react-icons/fa6"
import { MdCheck } from "react-icons/md"

export default function UpdateButton({editTodo,index,updatedTitle,toggleEditablePhase}) {
    return(
        <button onClick={()=>{
            toggleEditablePhase()
            editTodo(index,updatedTitle)
        }}
        className="text-green-500 mx-2 text-2xl hover:text-green-400">
            <MdCheck/>
        </button>
    )
}