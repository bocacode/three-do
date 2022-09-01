import { useState } from 'react';
import { Input } from 'antd';
const { Search } = Input;

export default function AddTask({ setTasklist }) {
  const [task, setTask] = useState('');
  const addTask = () => {
    fetch('https://three-do-api-bc.web.app/tasks', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ task, done: false })
    })
      .then(results => results.json())
      .then(data => {
        setTasklist(data);
        setTask('');
      })
      .catch(console.error);
  }
  return (
    <div className='add-task'>
      <Search
        value={task}
        onChange={e => setTask(e.target.value)}
        enterButton="Add"
        size='Large'
        onSearch={addTask}
      />
    </div>
  )
}