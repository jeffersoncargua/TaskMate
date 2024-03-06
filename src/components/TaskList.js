import { useState } from "react";
import { TaskCard } from "./TaskCard";
import './TaskList.css';
import './AddTask.css';

export const TaskList = ({tasks, setTasks}) => {
    
      const [show,setShow] = useState(false);
    
      function handleDelete(id){
        setTasks(tasks.filter(task => task.id !==id));
        console.log(id);
      }

  return (
    <section className="tasklist">        
        <ul>
          <div className='header'>
            <h1>Task List</h1>
            <button onClick={() => setShow(!show)} className='trigger'>{show ? "Hide Task":"Show Task"}</button>
          </div>
            {show && tasks.map((task) => (
              <TaskCard key={task.id}  task={task} handleDelete={handleDelete}/>
            )) }
        </ul>
    </section>
  )
}
