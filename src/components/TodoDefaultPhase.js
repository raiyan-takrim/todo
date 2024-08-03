import { FaPenToSquare, FaTrash } from "react-icons/fa6";
import { MdClose, MdEdit, MdOutlineCancel, MdOutlineDriveFileRenameOutline } from "react-icons/md";

export default function TodoDefaultPhase({deleteTodo,todoTitle,index, toggleEditablePhase}) {
    return(
        <div className="group border-t-2 px-2 last:border-b-2 border-green-50 py-4 flex bg-green-100">
            <input type="checkbox"
            className="peer accent-green-300 outline-1 cursor-pointer p-4 w-5"
            />

            <li onClick={toggleEditablePhase} 
            className="cursor-text text-lg text-green-700 flex-1 peer-checked:line-through ml-2 peer-checked:text-green-300/60"><p>{todoTitle}</p></li>
            
            <button onClick={toggleEditablePhase}
            className="text-green-300 mx-2 hover:text-green-400 text-2xl">
                <MdEdit />
            </button>

            <button onClick={()=> deleteTodo(index)}
                className="text-green-300 hover:text-green-400 text-2xl"
                >
                    <MdClose/>
                </button>
        </div>
    )
}