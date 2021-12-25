import React from 'react';

export default function Todo({ task, deleteTask, statusHandler }) {

    const handleStatus = () => {
        statusHandler(task)
    }

    return (
        <div className='row'>
            {
                task.status ?  <li className='listItems' style={{color:'green',fontWeight:'bold',textTransform:'uppercase',justifyContent:'left'}}>{task.id + 1}-{task.title}</li> : <li className='listItems' style={{color:'red',textTransform:'lowercase'}}>{task.id + 1}-{task.title}</li>


            }
            <input type='checkbox' onChange={handleStatus} className='check'/>
            <button className='btn' onClick={()=>deleteTask(task.id)}>Delete</button>
        </div>
    )
}
