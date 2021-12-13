import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { filter } from '../Redux/actions';

function Filter() {
    const isDone = useSelector(state => state.isDone)
    const notDone = useSelector(state => state.notDone)
    const dispatch = useDispatch();
    const handleisDone=(e)=>{
        dispatch(filter({filterDone:e,filterNotDone:notDone}))
    }
    const handleNotDone=(e)=>{
        dispatch(filter({filterDone:isDone,filterNotDone:e}))
    }
    return (
        <div className="filter" >
         <div>
                    <input type="checkbox" name="filter" onChange={(e)=>handleisDone(e.target.checked)} ></input>
                    <label> Completed</label>
                    </div>
                    <div>
                    <input type="checkbox" name="filter" onChange={(e)=>handleNotDone(e.target.checked)} ></input>
                    <label> Not completed</label>
                    </div>
        </div>
        
    )
}

export default Filter
