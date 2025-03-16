import React, { useEffect, useState } from 'react'

function UesrInfoEffect() {
    const [tasks,setTasks]=useState([]);
    const [task,setTask]=useState('');
    const [editTask,setEditTask]=useState(null);
    const [completion,setCompletion]=useState('');

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response)=>response.json())
        .then(data=>setTasks(data));
        
    },[])
    const addTask=()=>{
     const newTask={
        userId:1,
        id:Date.now(),
        title:task,
        completed:completion
     }

     setTasks([newTask,...tasks]);
     setTask('')
     setCompletion('');

     fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify(newTask),
  
        headers: { 'Content-Type': 'application/json' },
      })
        .then((res) => res.json())
        .then((data) => console.log('added:', data))
        
    
    }


    const deleteOne=(id)=>{
        setTasks(tasks.filter((values)=>values.id!==id))
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,{
            method:"DELETE"
        }).then((id)=>console.log("data"+id));


      
    }

    const updateOne=()=>{
        setTasks(tasks.map((values)=>values.id===editTask ?{...values,title:task,completed:completion}:values));

        fetch(`https://jsonplaceholder.typicode.com/todos/${editTask}`,{
            method: 'PATCH',
            body: JSON.stringify({task,completion}),
      
            headers: { 'Content-Type': 'application/json' },

        })   .then((res) => res.json())
        .then(() => console.log('added:', editTask))
    }

    

    const edittask=(id,task,complete)=>{
        setEditTask(id);
        setTask(task);
        setCompletion(complete)
    }

    
    

  return (
    <div>
    <h1>Todo Using useEffect</h1>
    <input
    type='text'
    placeholder='enter text here'
    value={task}
    onChange={(e)=>setTask(e.target.value)}
    />&nbsp;&nbsp;&nbsp;
    <input
    type='text'
    placeholder='enter text here'
    value={completion}
    onChange={(e)=>setCompletion(e.target.value)}
    />
    <button onClick={editTask?updateOne:addTask}>{editTask?"Edit Task":"Add task"}</button>
    {
    tasks.map((values)=>{
        return <div key={values.id}>
            <h1>{values.id}</h1>
            <h2>{values.title}</h2>
            <h3>{`${values.completed}`}</h3>
            <button onClick={()=>deleteOne(values.id)}>Delete Task</button>&nbsp;&nbsp;&nbsp;
            <button onClick={()=>edittask(values.id,values.title,values.completed)}>Edit Task</button>
            <hr></hr>
            </div>
           
    })
}
   
    
      
    </div>
  )
}

export default UesrInfoEffect
