import React, { useState } from 'react'

export default function TodoForm({addTask}) {

    const [ task, setTask ] = useState('')

    const submitTask = () => {
        addTask(task);
        setTask('')
    }

    return (
        <div className='todoForm'>
            <h3>Add your tasks</h3>
            <input type='text' value={task} onChange={(e) => setTask(e.target.value)} name='task' />
            <button onClick={submitTask} className='addTask'>Add Task</button>     
        </div>
    )
}
