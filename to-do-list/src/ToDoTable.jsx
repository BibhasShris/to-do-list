import TableHead from "./TableHead.jsx";
import TaskDetailRow from "./TaskDetailRow.jsx";

export default function ToDoTable() {
    const task = [
        {priority: 1, name: "Homework", status: "done", due = "Oct 1"},
        {priority: 2, name: "Gym", status: "In Progress", due = "Oct 1"},
        {priority: 3, name: "Laundry", status: "on Hold", due = "Oct 2"},
    ]; 
  return (
    <table border="1" cellPadding="8">
      <TableHead />
      <tbody>{task.map(tasks) => (
        <td>{tasks.priority}, {tasks.name}, {tasks.status}, {task.due}</td>
      )}</tbody>
    </table>
  );
}
