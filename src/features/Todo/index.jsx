import React, { useState } from 'react';
import TodoList from './components/TodoList';

function TodoFeature() {
  const initTodoList = [
    {
      id: 1,
      title: 'Eat',
      status: 'new'
    },
    {
      id: 2,
      title: 'Code',
      status: 'completed'
    },
    {
      id: 3,
      title: 'Sleep',
      status: 'new'
    }
  ]

  const [todoList, setTodoList] = useState(initTodoList);
  const [filterStatus, setFilterStatus] = useState('all');

  const handleTodoClick = (todo, idx) => {
    console.log(idx, todo);
    const newTodoList = [...todoList];
    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
    };
    // newTodoList[idx] = newTodo;
    setTodoList(newTodoList);
  };

  const handleShowAllClick = () => {
    setFilterStatus('all');
  };
  const handleShowCompletedClick = () => {
    setFilterStatus('completed');
  };
  const handleShowNewClick = () => {
    setFilterStatus('new');
  };

  const renderTodoList = todoList.filter(todo => filterStatus === 'all' || filterStatus === todo.status);

  return (
    <div>
      <h3>Todo List</h3>
      <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick} />

      <button onClick={handleShowAllClick}>Show all</button>
      <button onClick={handleShowCompletedClick}>Show completed</button>
      <button onClick={handleShowNewClick}>Show new</button>
    </div>
  )
}

export default TodoFeature;