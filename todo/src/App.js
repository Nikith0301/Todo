// import { useState } from 'react';
// import AddTask from './AddTask.js';
// import TaskList from './TaskList.js';

// export default function TaskApp() {
//   const [tasks, setTasks] = useState(initialTasks);

//   function handleAddTask(text) {
//     setTasks([
//       ...tasks,
//       {
//         id: nextId++,
//         text: text,
//         done: false,
//       },
//     ]);
//   }

//   function handleChangeTask(task) {
//     setTasks(
//       tasks.map((t) => {
//         if (t.id === task.id) {
//           return task;
//         } else {
//           return t;
//         }
//       })
//     );
//   }

//   function handleDeleteTask(taskId) {
//     setTasks(tasks.filter((t) => t.id !== taskId));
//   }

//   return (
//     <>
//       <h1>Prague itinerary</h1>
//       <AddTask onAddTask={handleAddTask} />
//       <TaskList
//         tasks={tasks}
//         onChangeTask={handleChangeTask}
//         onDeleteTask={handleDeleteTask}
//       />
//     </>
//   );
// }

// let nextId = 3;
// const initialTasks = [
//   {id: 0, text: 'Visit Kafka Museum', done: true},
//   {id: 1, text: 'Watch a puppet show', done: false},
//   {id: 2, text: 'Lennon Wall pic', done: false},
// ];

import {useState} from "react" ;
import TaskBox from "./TaskBox";

export default function App(){


const [works,setWork]=useState( [{id: 0, text: 'Visit Kafka Museum', done: true},
{id: 1, text: 'Watch a puppet show', done: false},
{id: 2, text: 'Lennon Wall pic', done: false}]);

const [inputText,setInputText]=useState('');


function handleEdit(task){

 setWork( works.map((work)=>{
    if (work.id===task.id){
      return task;
    }
    else{
      return work;
    }
  }))

}

function handleDelete(id){
  const filteredWorks = works.filter((work, index) => index !== id);
  setWork(filteredWorks);
}

  function handeleWork(){
    if(inputText.trim()){
      setWork([...works,{id:nextId++,text:inputText,done:false}])
    }

setInputText('')
  }

function handleInputChange(e){
  setInputText(e.target.value);
 
}

  return (
  <>
    <h1>Enter tasks here</h1>
    <input placeholder="text"  value={inputText} onChange={handleInputChange}/>
    <button onClick={handeleWork}>Add</button>
    
 <TaskBox works={works} handleDelete={handleDelete} handleEdit={handleEdit}/>
     
  </>  
  )
}



let nextId = 3;