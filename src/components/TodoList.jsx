import { useEffect, useState } from 'react';
import { List, Switch, Alert } from 'antd';

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
        setError(err);
        setLoading(false);
      })
  }, [setTasklist, setLoading]);
  // if (!tasklist) {
  //   return <h2>No tasks to complete!</h2>
  // }
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
            <List.Item key={item.id}>
              <List.Item.Meta
                avatar={<Switch checked={item.done} />}
                title={<p>{item.task}</p>}
              />
            </List.Item>
          )}
        />
      </div>
    </>
  )
}