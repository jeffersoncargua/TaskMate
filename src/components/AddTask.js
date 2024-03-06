import { useRef, useState } from 'react';
import './AddTask.css';

export const AddTask = ({tasks,setTasks}) => {

    //const [taskValue, setTaskValue] = useState("");

    const [progress, setProgress] = useState(false);

    const taskRef = useRef('');

    /*function handleChange(event){
        setTaskValue(event.target.value);
    }*/

    function handleReset(){
        //setTaskValue('');
        taskRef.current.value= '';
        setProgress(false);
    }

    const hadleSubmit = (event) => {
        event.preventDefault();
        const task = {
            id: Math.floor(Math.random()*10000),
            name: taskRef.current.value,
            completed: Boolean(progress)
        }
        handleReset();
        setTasks([...tasks,task]);
    }

  return (
    <section className='addtask'>
        <form onSubmit={hadleSubmit}>
            <input type="text" 
            name='task' id='task' placeholder='Task Name' autoComplete='off'
            ref={taskRef} />
            <select onChange={(event) => setProgress(event.target.value)} value={progress}>
                <option value="false">Pending</option>
                <option value="true">Completed</option>
            </select>

            <span onClick={handleReset} className='reset'>Reset</span>
            <button type='submit'>Add Task</button>
            
        </form>
        <p>
            {taskRef.current.value}
        </p>
    </section>
  )
}
