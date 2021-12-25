import { useEffect, useState } from 'react';
import './App.css';
import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {

  const [ tasks, setTasks ] = useState([])

  //Adding the tasks
  const addTask = (task) => {
    console.log('task added')
    setTasks([...tasks,{id:tasks.length, title: task, status: false}])
  }

  //Deleting the task
  const deleteTask = (id) =>{
    setTasks(tasks.filter(task => {
      return (task.id !== id)
    }))
  }

  //Changing status of the task
  const statusHandler = (item) => {
    setTasks(tasks.map(task => {
      return task.id !== item.id ? task : {id:item.id, title:item.title, status:!item.status}
    }))
  }

  useEffect(()=> {
    if(tasks.length){
    console.log(tasks)}
  },[tasks])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tasks ToDo</h1>
        <TodoForm addTask={addTask}/>
        {
          tasks.length ? 
          <TodoList tasks={tasks} deleteTask={deleteTask} statusHandler={statusHandler}/>: <h3>Enjoy! You Have Nothing Todo</h3>
        }
      </header>
    </div>
  );
}

export default App;
