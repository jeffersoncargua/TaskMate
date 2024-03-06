import { useState } from "react";
import { TaskCard } from "./TaskCard";
import { BoxCard } from "./BoxCard";

import './TaskList.css';

export const TaskList = ({info}) => {
      const [tasks, setTasks] = useState([
        {id: 5271, name: "Record React Lectures", completed:true},
        {id: 7825, name: "Edit React Lectures", completed:false},
        {id: 8391, name: "Watch Lectures", completed:false}
      ]);
    
      const [show,setShow] = useState(false);

      const styles ={
        color: show ? "#3d8361":"#be3434",
        border: "1px solid",
        boderCorlor: show ? "#3d8361":"#be3434",
        borderRadius: "5px",
        fontSize: "28px",
        padding: "20px"
      }
    
      function handleDelete(id){
        setTasks(tasks.filter(task => task.id !==id));
        console.log(id);
      }

  return (
    <section className="tasklist">
        <h1 style={styles}>Task List</h1>
        <button onClick={() => setShow(!show)} className='trigger'>{show ? "Hide":"Show"}</button>
        <ul>
            {show && tasks.map((task) => (
            <TaskCard key={task.id} info={info} task={task} handleDelete={handleDelete}/>
            )) }
        </ul>
        <BoxCard result="success">
            <p className="title">Lorem ipsum dolor sit amet.</p>
            <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, distinctio.</p>
        </BoxCard>
        <BoxCard result="warning">
            <p className="title">Lorem ipsum dolor sit.</p>
            <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, distinctio.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, ex! Nobis deserunt repellat officiis eos autem repudiandae libero sequi recusandae!</p>
        </BoxCard>
    </section>
  )
}
