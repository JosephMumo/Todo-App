import React, { useState } from 'react'
import './App.css'

function App() {
    const [tasks, setTasks] = useState('')
    const [data, setData] = useState([])


    function handleChange(event) {
        const { value } = event.target
        setTasks(value)
        console.log(tasks)
    }

    function handleSubmit(event) {
        event.preventDefault()
        setData(prevData => {
            return [...prevData, tasks]
        })
        setTasks((prevD)=> {
            return prevD = '';
        })
        console.log(tasks)
    }
    
    function delTask(index) {
        const newTasks = [...data]
        newTasks.splice(index, 1);
        setData(newTasks)
    }
    




    return(
        <div className='app-box'>
            <div className='myForm'>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='task'><h2>TODO</h2></label>
                    <input type='text' value={tasks} name='task' id='task' onChange={handleChange}></input>
                    <br />
                    <button>Add +</button>
                    <br />
                </form>
                { data.map((item, index)=> (
                    <div key={index}>
                        <p>{item}</p>
                        <button className='del-btn' onClick={()=> delTask(index)}>Delete</button>
                    </div>
                    
                ))}
            </div>
        </div>
    )
}
export default App;