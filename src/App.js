import { useState } from 'react';
import './App.css';

export default function App() {
  const [tasks, setTasks] = useState([
    {id: 5271, name: "Record React Lectures", completed:true},
    {id: 7825, name: "Edit React Lectures", completed:false},
    {id: 8391, name: "Watch Lectures", completed:false}
  ]);

  const [show,setShow] = useState(false);

  function handleDelete(id){
    setTasks(tasks.filter(task => task.id !==id));
    console.log(id);
  }

  return(
    <div className='App'>
      <h1>Task List</h1>
      <button onClick={() => setShow(!show)} className='trigger'>Toggle</button>
      <ul>
        {show && tasks.map((task) => (
          <li key={task.id} className={task.completed? 'completed' : 'incomplete'}>
            <span>{task.id} - {task.name}</span>
            <button onClick={() => handleDelete(task.id)} className='delete'>Delete</button>
          </li>
        )) }
      </ul>
    </div>
  );
}





