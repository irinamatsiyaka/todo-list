import { useState } from "react";

const TaskForm = ({ addTask }) => {
   const [title, setTitle] = useState("");
   const [description, setDescription] = useState("");

   const handleSubmit = (e) => {
      e.preventDefault();
      if (!title) return;
      addTask({ title, description });
      setTitle("");
      setDescription("");
   };

   return (
      <form onSubmit={handleSubmit}>
         <input
            type="text"
            placeholder="Task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
         />
         <br />
         <textarea
            placeholder="Task description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
         />
         <br />
         <button type="submit">Add Task</button>
      </form>
   );
};

export default TaskForm;
