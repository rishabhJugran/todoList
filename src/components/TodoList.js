import React from 'react';
import Todo from './Todo';

export default function TodoList({ tasks, deleteTask, statusHandler }) {
    return (
        <div>
            <h2>Todos</h2>
            <ul className='uList'>
            {
                tasks.map((task, index) => <Todo key={index} task={task} deleteTask={deleteTask} statusHandler={statusHandler}/>)
            }
            </ul>
        </div>
    )
}
