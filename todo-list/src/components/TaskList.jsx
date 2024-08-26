import Task from "./Task";

const TaskList = ({ tasks, onToggleComplete, onRemoveTask }) => {
   return (
      <div className="task-list">
         {tasks.map((task, index) => (
            <Task
               key={task.id}
               index={index}
               task={task}
               onToggleComplete={onToggleComplete}
               onRemoveTask={onRemoveTask}
            />
         ))}
      </div>
   );
};

export default TaskList;
