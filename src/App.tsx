import { ChangeEvent, useState } from 'react';
import './App.css';
import TodoTask from './components/TodoTask';

export type TodoListTask = {
  taskName: string
  deadline: number
}

function App() {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<TodoListTask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if(event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = {taskName: task, deadline: deadline}
    setTodoList([...todoList, newTask])
    setTask("");
    setDeadline(0);
  };

  const completeTask = (taskToDelete: TodoListTask): void => {
    setTodoList(
      todoList.filter((task) => {
        return task!== taskToDelete;
      })
    )
  }

  return (
    <div className="App">
      <div className='header'>
        <div className='inputContainer'>
          <input 
            onChange={handleChange} 
            value={task}
            name="task"
            type="text" 
            placeholder='Task...'/>
          <input 
            onChange={handleChange} 
            value={deadline}
            name="deadline"
            type="number" 
            placeholder='Deadline (in days)...'/>
        </div>
        <button onClick={addTask}>Add task</button>
      </div>

      <div className='todoList'>
        {todoList.map((task: TodoListTask, index:number) => (
          <TodoTask key={index} task={task} completeTask={completeTask}/>
        ))}
      </div>
    </div>
  )
}

export default App
