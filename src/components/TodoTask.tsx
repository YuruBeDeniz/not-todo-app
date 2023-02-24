import { TodoListTask } from "../App";


type Props = {
    task: TodoListTask
}

const TodoTask = ({ task }: Props) => {
  return (
    <div>Don't do {task.taskName} in {task.deadline} days</div>
  )
}

export default TodoTask;