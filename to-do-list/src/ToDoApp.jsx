import { useState } from "react";
import Header from "./Header";
import ToDoTable from "./ToDoTable";
import AddTaskButton from "./AddTaskButton";
import "./ToDoApp.css";

export default function ToDoApp() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      priority: 1,
      name: "Homework",
      status: "In Progress",
      due: "2025-10-01",
    },
    { id: 2, priority: 2, name: "Gym", status: "On Hold", due: "2025-10-02" },
  ]);

  function handleAddTask(newTask) {
    setTasks([...tasks, { ...newTask, priority: tasks.length + 1 }]);
  }

  function handleStatusChange(taskId, newStatus) {
    if (newStatus === "Done") {
      // Remove the task
      setTasks(tasks.filter((t) => t.id !== taskId));
    } else {
      // Update the task’s status
      setTasks(
        tasks.map((t) => (t.id === taskId ? { ...t, status: newStatus } : t))
      );
    }
  }

  return (
    <div>
      <Header />
      <ToDoTable tasks={tasks} onStatusChange={handleStatusChange} />
      <AddTaskButton onAddTask={handleAddTask} />
    </div>
  );
}
