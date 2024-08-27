import { useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { FaTimes } from "react-icons/fa";

import "./App.css";

const App = () => {
   const [tasks, setTasks] = useState([]);
   const [showTaskPanel, setShowTaskPanel] = useState(false);

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
      <div className="app" style={{ position: "relative", padding: "20px" }}>
         <button
            onClick={() => setShowTaskPanel(true)}
            style={{
               padding: "10px 20px",
               fontSize: "16px",
               cursor: "pointer",
            }}
         >
            Open Task List
         </button>

         {showTaskPanel && (
            <div
               style={{
                  position: "fixed",
                  top: 0,
                  right: 0,
                  width: "80%",
                  height: "100vh",
                  backgroundColor: "#f4f4f4",
                  boxShadow: "-2px 0 5px rgba(0, 0, 0, 0.3)",
                  padding: "20px",
                  overflowY: "auto",
                  zIndex: 1000,
               }}
            >
               <FaTimes
                  onClick={() => setShowTaskPanel(false)}
                  style={{
                     position: "absolute",
                     top: "20px",
                     right: "20px",
                     fontSize: "24px",
                     cursor: "pointer",
                     color: "#333",
                  }}
               />

               <TaskForm addTask={addTask} />

               <h2>Task List</h2>
               <TaskList
                  tasks={tasks}
                  onToggleComplete={toggleTaskCompletion}
                  onRemoveTask={removeTask}
               />
            </div>
         )}
      </div>
   );
};

export default App;
