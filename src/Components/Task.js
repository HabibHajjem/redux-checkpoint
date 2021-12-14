import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { edit, remove } from '../Redux/actions';

function Task({el}) {
   
    const dispatch = useDispatch();
    const [description, setDescription] = useState(el.description)
    
    const handleConfirm=()=>{
        dispatch(edit({id:el.id,description:description,isEdit:false,isDone:el.isDone}));
    }
    const handleEdit=()=>{
        dispatch(edit({id:el.id,description:el.description,isEdit:true,isDone:el.isDone}));
    }
    const handleCancel=()=>{
        dispatch(edit({id:el.id,description:el.description,isEdit:false,isDone:el.isDone}));
    }
    const handleIsDone=(e)=>{
        dispatch(edit({id:el.id,description:el.description,isEdit:false,isDone:e}));
    }
    const handleRemove=()=>{
        dispatch(remove(el.id))
    }


    return (
        <div >
             <div className="task">
            {el.isEdit?
            <div>
            <input defaultValue={el.description} onChange={(e)=>setDescription(e.target.value)} >
            </input>
            <button style={{color:'white',backgroundColor:'green'}} onClick={()=>handleConfirm()}><i class="bi bi-check-lg"></i></button>
            <button style={{color:'white',backgroundColor:'red'}} onClick={()=>handleCancel()} ><i class="bi bi-x"></i></button>
            </div>
            :<div> {el.isDone?<span style={{textDecoration:'line-through'}}>{el.description}</span>:el.description}</div>}

             <div style={{display:'flex',gap:'8px',alignItems:'center'}}>{el.isDone?
             <input type="checkbox"  checked style={{display:'inline-block',zoom:'2'}} onChange={(e)=>handleIsDone(e.target.checked)} ></input>:
             <input type="checkbox"  style={{display:'inline-block',zoom:'2'}} onChange={(e)=>handleIsDone(e.target.checked)} ></input>}
             <button onClick={handleEdit}><i class="bi bi-pencil-square"></i></button>
             <button><i class="bi bi-trash" onClick={handleRemove}></i></button>
             </div>
             </div>
        </div>
    )
}

export default Task
