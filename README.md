# to-do-list

## Mockup

![Alt text](img/mockup.png)

Creating a to-do list in React.
I started by sketching a mockup of my To-Do List app. This shows the main features:

- A header with the app title
- A table with columns for Priority, Task, Status, and Due date
- A button to add new tasks

## Component Hierarchy

![Alt text](img/component_Hierarchy.png)

Based on the mockup, I broke the UI into components using the single responsibility principle:
ToDoApp – the root container for the entire application. <br>
Header – displays the title “To-do list”. <br>
ToDoTable – wraps the table of tasks. <br>
TableHead – column headers (Priority, Task, Status, Due). <br>
TaskDetailRow – one row per task, containing: Priority, Task, Status, Due <br>
AddTaskButton – button at the bottom to add new tasks. <br>

## Static Version<br>

![Alt text](img/StaticVersion.png)

I built a static version of the app in React.

- The data is currently hardcoded inside the `ToDoTable` component.
- In the future, the data will move up into `ToDoApp` so it can be managed with state and passed down as props.
- `ToDoTable` renders the `<table>` with rows.
- `TableHead` renders the header row.
- `TaskDetailRow` renders each row using props.
- `AddTaskButton` renders a button (not yet interactive).

To decide what should be state, I followed the React guideline questions:

1. Is it passed in via props? → Then it’s not state.
2. Does it remain unchanged over time? → Then it’s not state.
3. Can it be derived from something else? → Then it’s not state.

In my To-Do app, the pieces of data are:

- The list of tasks
- Whether a task is done
- The text of a new task (when adding one)
- The table headers

From these, the **minimal state** is:

- `tasks`: an array of task objects (`{ id, priority, name, status, due }`)
- `newTask` input values: the data for a task being added (name, status, due).

Everything else can be derived from this state.  
For example, priority can be derived from the order of tasks in the array,  
and the table headers are static so they don’t need to be stored in state.

## Identify Where State Should Live

After identifying the minimal state, the next step was to decide which component should own it. React uses one-way data flow, so state should live at the closest common parent of all components that need it.

- **tasks**: Both the `ToDoTable` (to render tasks) and the add task form/button (to add tasks) need access to this data. The closest common parent is `ToDoApp`. Therefore, the `tasks` state will live in `ToDoApp` and be passed down as props to child components. For example, `ToDoApp` will pass `tasks` into `ToDoTable`.

- **newTask inputs**: The temporary input values for adding a new task (name, status, due) are only needed while the user is typing. They can live locally in the add task form component. When the form is submitted, the new task will be sent up to `ToDoApp` using a callback, which will then update the `tasks` array state.

Derived values such as task priority or whether a task is “done” should not be stored in state. They can be computed dynamically:

- Task priority = the order of the array (`index + 1`).
- Completed tasks = filter tasks where `status !== "done"`.

This ensures the state stays minimal, consistent, and easy to update.
