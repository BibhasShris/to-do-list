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
