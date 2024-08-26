import { FaTrash } from "react-icons/fa";

const Task = ({ task, index, onToggleComplete, onRemoveTask }) => {
   return (
      <div
         className={`task ${task.completed ? "completed" : ""}`}
         onClick={() => onToggleComplete(task.id)}
      >
         <h3>{task.title}</h3>
         <br></br>
         <p>{task.description}</p>

         <FaTrash
            onClick={(e) => {
               e.stopPropagation();
               onRemoveTask(index);
            }}
            style={{ color: "red", cursor: "pointer" }}
         >
            Delete
         </FaTrash>
      </div>
   );
};

export default Task;
