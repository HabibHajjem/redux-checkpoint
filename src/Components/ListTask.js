import React from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'

function ListTask() {
    const descriptionSelector = useSelector(state => state.task)
    const done = useSelector(state => state.filterDone)
    const notDone = useSelector(state => state.filterNotDone)
    return (
        <div>
            <ul>
            {done?notDone?descriptionSelector.map((el,i)=><li key={i}>
                <Task el={el} />
            </li>):descriptionSelector.filter(el=>el.isDone == true).map((el,i)=><li key={i}>
                <Task el={el} />
            </li>):notDone?descriptionSelector.filter(el=>el.isDone==false).map((el,i)=><li key={i}>
                <Task el={el} />
            </li>):descriptionSelector.map((el,i)=><li key={i}>
                <Task el={el} />
            </li>)
            }
            </ul>
        </div>
    )
}

export default ListTask
