import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');

  const fetchTasks = async () => {
    const res = await axios.get('http://localhost:5000/api/tasks');
    setTasks(res.data);
  };

  const addTask = async () => {
    if (!text.trim()) return;
    await axios.post('http://localhost:5000/api/tasks', { title: text });
    setText('');
    fetchTasks();
  };

  const toggleTask = async (id) => {
    await axios.patch(`http://localhost:5000/api/tasks/${id}`);
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`);
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div style={{ padding: 20, maxWidth: 500, margin: 'auto' }}>
      <h2>My To-Do List</h2>
      <div style={{ display: 'flex', gap: 10 }}>
        <input
          placeholder="Enter New task"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ flexGrow: 1 }}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: 10,
              textDecoration: task.isDone ? 'line-through' : 'none',
            }}
          >
            <span onClick={() => toggleTask(task.id)} style={{ cursor: 'pointer' }}>
              {task.title}
            </span>
            <button onClick={() => deleteTask(task.id)} style={{ marginLeft: 10 }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
