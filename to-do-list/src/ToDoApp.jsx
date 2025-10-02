import Header from "./Header";
import ToDoTable from "./ToDoTable";
import AddTaskButton from "./AddTaskButton";

export default function ToDoApp() {
  return (
    <div>
      <Header />
      <ToDoTable />
      <AddTaskButton />
    </div>
  );
}
