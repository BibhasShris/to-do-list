export default function TaskDetailRow({ task, onStatusChange }) {
  return (
    <tr>
      <td>{task.priority}</td>
      <td>{task.name}</td>
      <td>
        <select
          value={task.status}
          onChange={(e) => onStatusChange(task.id, e.target.value)}
        >
          <option value="In Progress">In Progress</option>
          <option value="On Hold">On Hold</option>
          <option value="Done">Done</option>
        </select>
      </td>
      <td>{task.due}</td>
    </tr>
  );
}
