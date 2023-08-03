import { useState } from "react";
import { Task } from "./Task";

export const List = ({ list }) => {
  const [tasks, setTasks] = useState(list.tasks);
  // {
  //   "id": 1,
  //   "list_name": "Shopping List",
  //   "tasks": []
  // },
  return (
    <div id={`list${list.id}`}>
      <h3>{list.list_name}</h3>
      {tasks.map((task) => (
        <Task key={`task${task.id}`} task={task} />
      ))}
    </div>
  );
};
