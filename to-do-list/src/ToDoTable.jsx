import TableHead from "./TableHead.jsx";
import TaskDetailRow from "./TaskDetailRow.jsx";

export default function ToDoTable({ tasks, onStatusChange }) {
  return (
    <table border="1" cellPadding="8">
      <TableHead />
      <tbody>
        {tasks.map((t) => (
          <TaskDetailRow key={t.id} task={t} onStatusChange={onStatusChange} />
        ))}
      </tbody>
    </table>
  );
}
