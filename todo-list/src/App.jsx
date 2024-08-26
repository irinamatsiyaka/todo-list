import { useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import "./App.css";

const App = () => {
   const [tasks, setTasks] = useState([]);

   //func for adding task
   const addTask = (taskText) => {
      const newTask = {
         id: Date.now(),
         title: taskText.title,
         description: taskText.description,
         completed: false,
         createdAt: new Date(),
      };
      setTasks([...tasks, newTask]);
   };

   //func task done or no
   const toggleTaskCompletion = (id) => {
      setTasks(
         tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
         )
      );
   };

   //func remove task
   const removeTask = (id) => {
      const newTasks = [...tasks];
      newTasks.splice(id, 1);
      setTasks(newTasks);
   };

   return (
      <div className="app">
         <h1>Todo List</h1>
         <TaskForm addTask={addTask} />
         <TaskList
            tasks={tasks}
            onToggleComplete={toggleTaskCompletion}
            onRemoveTask={removeTask}
         />
      </div>
   );
};

export default App;
