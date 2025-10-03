import TableHead from "./TableHead.jsx";
import TaskDetailRow from "./TaskDetailRow.jsx";

export default function ToDoTable({ tasks, onStatusChange }) {
  const sortedTasks = [...tasks].sort((a, b) => {
    return new Date(a.due) - new Date(b.due);
  });

  return (
    <table border="1" cellPadding="8">
      <TableHead />
      <tbody>
        {sortedTasks.map((t, index) => (
          <TaskDetailRow
            key={t.id}
            task={{ ...t, priority: index + 1 }}
            onStatusChange={onStatusChange}
          />
        ))}
      </tbody>
    </table>
  );
}
