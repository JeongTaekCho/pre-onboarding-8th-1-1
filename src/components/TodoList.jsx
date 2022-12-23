import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListComponent = styled.div`
  border: 1px solid #eee;
  border-bottom: none;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const TodoList = ({ todos, handleDeleteTodo, handleUpdateTodo }) => (
  <TodoListComponent>
    {todos.map((todo) => (
      <TodoItem data={todo} key={todo.id} handleDeleteTodo={handleDeleteTodo} handleUpdateTodo={handleUpdateTodo} />
    ))}
  </TodoListComponent>
);

export default TodoList;
