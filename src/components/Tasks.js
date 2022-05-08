import Task from "./Task"
//import {useState} from 'react'


// const tasks = [
//     {
//         id : 1,
//         text : 'Web Development Home Work',
//         day : 'June 4th at 3:30pm',
//         reminder : true,
//     },
//     {
//         id : 2,
//         text : 'Android Home Work',
//         day : 'July 4th at 3:30pm',
//         reminder : true,
//     },
//     {
//         id : 3,
//         text : 'UI UX Home Work',
//         day : 'August 4th at 3:30pm',
//         reminder : false,
//     }
// ];

 //  const [tasks, setTasks] = useState(
  //    []
  //  )
 


const Tasks = ({tasks, onDelete,onToggle}) => {

 
  return (
    <>
    {
        tasks.map(
            (task)=>(<Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />)
        )
    }
    </>
  )
}

export default Tasks