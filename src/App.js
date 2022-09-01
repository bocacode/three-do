import { useState } from 'react';
import { Layout, Menu } from 'antd';
import TodoList from './components/TodoList';
import AddTask from './components/AddTask';
import './App.css';

const { Header, Content, Footer } = Layout;

function App() {
  const [tasklist, setTasklist] = useState();
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Three-Do</Menu.Item>
          <Menu.Item key="2">Login</Menu.Item>
          <Menu.Item key="3">Sign Up</Menu.Item>
        </Menu>
      </Header>
      <Content
        style={{
          padding: '0 50px',
        }}
      >
        <div className="site-layout-content">
          <h1>Three-do</h1>
          <TodoList tasklist={tasklist} setTasklist={setTasklist} />
          <AddTask setTasklist={setTasklist} />
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Three-Do ©2022 Created by Boca Code
      </Footer>
    </Layout>
  );
}

export default App;
