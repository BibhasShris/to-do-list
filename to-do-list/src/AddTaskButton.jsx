import { useState } from "react";

export default function AddTaskButton({ onAddTask }) {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [due, setDue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // building a new task object
    // Learned from MDN Web Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now
    const newTask = {
      id: Date.now(),
      name,
      status,
      due,
    };

    onAddTask(newTask);

    // reset form
    setName("");
    setStatus("");
    setDue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="">-- Select status --</option>
        <option value="In Progress">In Progress</option>
        <option value="On Hold">On Hold</option>
        <option value="Done">Done</option>
      </select>

      <input
        type="date"
        value={due}
        onChange={(e) => setDue(e.target.value)}
        required
      />
      <button type="submit">+ Add Task</button>
    </form>
  );
}
