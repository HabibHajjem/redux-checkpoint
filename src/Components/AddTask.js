import React, { useState } from 'react'
import { useDispatch} from 'react-redux';
import { add } from '../Redux/actions';

const AddTask=()=>{
    const [description, setDescription] = useState('');
    const [isDone, setIsDone] = useState(false)

    
    const dispatch = useDispatch()
    return (
        <div>   
                <form>
                <div style={{display:'flex',gap:'10px', marginBottom:'7px'}}>
                <label>description : </label>
                <input type="text" onChange={(e)=>setDescription(e.target.value)}></input>
                </div>
                <div style={{display:'flex',gap:'10px',alignItems:'baseline', marginBottom:'10px'}}>
                <label  >isDone : </label>
                <input type="checkbox" onChange={(e)=>setIsDone(e.target.checked)}></input>
                </div>
            </form>
                <button onClick={()=>dispatch(add({description:description,isDone:isDone,id:Math.random()}))}>add</button>
                
                
        </div>
    )
}

export default AddTask
