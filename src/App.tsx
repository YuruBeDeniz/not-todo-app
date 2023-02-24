import { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todo, setTodo] = useState([]);

  return (
    <div className="App">
      <div className='header'>
        <div className='inputContainer'>
          <input type="text" placeholder='Task...'/>
          <input type="number" placeholder='Deadline (in days)...'/>
        </div>
        <button>Add task</button>
      </div>

      <div className='todoList'></div>
    </div>
  )
}

export default App
