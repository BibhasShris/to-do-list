// ToDoApp.jsx
import { useState } from "react";
import Header from "./Header";
import ToDoTable from "./ToDoTable";
import AddTaskButton from "./AddTaskButton";

export default function ToDoApp() {
  const [tasks, setTasks] = useState([
    { priority: 1, name: "Homework", status: "done", due: "Oct 1" },
    { priority: 2, name: "Gym", status: "In Progress", due: "Oct 1" },
    { priority: 3, name: "Laundry", status: "On Hold", due: "Oct 2" },
  ]);

  function handleAddTask(newTask) {
    // assign priority = next number based on array length
    const updatedTasks = [...tasks, { ...newTask, priority: tasks.length + 1 }];
    setTasks(updatedTasks);
  }

  return (
    <div>
      <Header />
      <ToDoTable tasks={tasks} />
      <AddTaskButton onAddTask={handleAddTask} />
    </div>
  );
}
