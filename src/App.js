import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

const App = () => {
  //the code does not work with arrow function as a normal function

  //add button toggle form

  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Web Development Home Work",
      day: "June 4th at 3:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Android Home Work",
      day: "July 4th at 3:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "UI UX Home Work",
      day: "August 4th at 3:30pm",
      reminder: false,
    },
  ]);

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;

    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  //delete task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id)); //removing tasks when click the delete button
  };

  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <div className="App">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks to Show"
      )}
    </div>
  );
};

export default App;
