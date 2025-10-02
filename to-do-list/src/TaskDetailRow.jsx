export default function TaskDetailRow({ task }) {
  return (
    <tr>
      <td>{task.priority}</td>
      <td>{task.name}</td>
      <td>{task.status}</td>
      <td>{task.due}</td>
    </tr>
  );
}
