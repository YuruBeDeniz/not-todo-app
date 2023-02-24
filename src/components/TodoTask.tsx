import { TodoListTask } from "../App";


type Props = {
  task: TodoListTask
  completeTask: (taskToDelete: TodoListTask) => void
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <>
    <div>Don't do {task.taskName} in {task.deadline} days</div>
    <button onClick={() => completeTask(task)}>X</button>
    </>
  )
}

export default TodoTask;