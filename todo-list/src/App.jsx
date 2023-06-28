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
                    <>
                        <input type="checkbox" />
                        <p key={index}>{item}</p>
                        <button className='del-btn'>Delete</button>
                    </>
                    
                ))}
            </div>
        </div>
    )
}
export default App;