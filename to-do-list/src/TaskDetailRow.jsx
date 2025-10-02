export default function TaskDetailRow({ task, onStatusChange }) {
  return (
    <tr>
      <td className="priority">{task.priority}</td>
      <td className="task-name">{task.name}</td>
      <td className="status">
        <select
          value={task.status}
          onChange={(e) => onStatusChange(task.id, e.target.value)}
          className={
            task.status === "Done"
              ? "done"
              : task.status === "In Progress"
              ? "in-progress"
              : "on-hold"
          }
        >
          <option value="In Progress">In Progress</option>
          <option value="On Hold">On Hold</option>
          <option value="Done">Done</option>
        </select>
      </td>
      <td className="due">{task.due}</td>
    </tr>
  );
}
