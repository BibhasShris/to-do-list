// ToDoTable.jsx
import TableHead from "./TableHead.jsx";
import TaskDetailRow from "./TaskDetailRow.jsx";

export default function ToDoTable({ tasks }) {
  return (
    <table border="1" cellPadding="8">
      <TableHead />
      <tbody>
        {tasks.map((t, index) => (
          <TaskDetailRow key={index} task={t} />
        ))}
      </tbody>
    </table>
  );
}
