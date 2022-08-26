import { useState } from 'react';
import TodoList from './components/TodoList';
import AddTask from './components/AddTask';
import './App.css';

function App() {
  const [tasklist, setTasklist] = useState();
  return (
    <>
      <h1>Three-do</h1>
      <TodoList tasklist={tasklist} setTasklist={setTasklist} />
      <AddTask setTasklist={setTasklist} />
    </>
  );
}

export default App;
