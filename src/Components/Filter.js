import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { filter } from '../Redux/actions';

function Filter() {
    const [done, setDone] = useState(false)
    const [notDone, setNotDone] = useState(false)
    const dispatch = useDispatch();
    return (
        <div style={{display:'flex', gap:'20px'}}>
        <form style={{display:'flex', gap:'10px', alignItems:'baseline'}}>
        <label>done</label>
        <input type="checkbox" name="filter" onChange={(e)=>setDone(e.target.checked)} ></input>
        <label>not done</label>
        <input type="checkbox" name="filter" onChange={(e)=>setNotDone(e.target.checked)} ></input>
        </form>
        <button onClick={()=>dispatch(filter({filterDone:done,filterNotDone:notDone}))} style={{height:'30px'}} >Filter</button>
        </div>
        
    )
}

export default Filter
