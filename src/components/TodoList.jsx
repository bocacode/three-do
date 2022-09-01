import { useEffect, useState } from 'react';
import { List, Alert } from 'antd';
import TodoListCard from './TodoListCard';

export default function TodoList({ tasklist, setTasklist }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  // call the api and use setTasklist to fill in state...
  useEffect(() => {
    fetch('https://three-do-api-bc.web.app/tasks')
      .then(results => results.json())
      .then(tasks => {
        setTasklist(tasks);
        setLoading(false);
        setError('');
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      })
  }, [setTasklist, setLoading, setError]);
  return (
    <>
      {error && <Alert
        message="Error"
        description={error}
        type="error"
        showIcon
      />}
      <div className='task-list'>
        <List
          dataSource={tasklist}
          loading={loading}
          renderItem={(item) => (
            <TodoListCard
              key={item.id}
              item={item}
              setLoading={setLoading}
              setTasklist={setTasklist}
              setError={setError} />
          )}
        />
      </div>
    </>
  )
}