import React, { useEffect, memo } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';
import { todoAPI } from '../api/todo';
import { useFetch } from '../hooks/useFetch';

const TodoPage = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 8rem;
  overflow: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: #fff;
  color: #202020;
`;

const TodoContainer = styled.div`
  width: 720px;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      height: 3rem;
      display: flex;
      align-items: center;
      padding: 1rem 0;
      font-size: 1.5rem;
      font-weight: 700;
      letter-spacing: 0.25rem;
    }
  }
`;

const Todo = () => {
  const navigate = useNavigate();
  const { data: todos, setRefetch } = useFetch('/todos');

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) navigate('/');
  }, []);

  const handleCreateTodo = async (todo) => {
    try {
      await todoAPI.createTodo(todo);
      setRefetch((prev) => prev + 1);
    } catch (err) {
      return err;
    }
  };

  const handleUpdateTodo = async (id, newTodo, isCompleted) => {
    try {
      await todoAPI.updateTodo(id, newTodo, isCompleted);
      setRefetch((prev) => prev + 1);
    } catch (err) {
      return err;
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await todoAPI.deleteTodo(id);
      setRefetch((prev) => prev + 1);
    } catch (err) {
      return err;
    }
  };

  return (
    <TodoPage>
      <TodoContainer>
        <header>
          <h1>Todo-List</h1>
        </header>
        <TodoInput handleCreateTodo={handleCreateTodo} />
        {todos && <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleUpdateTodo={handleUpdateTodo} />}
      </TodoContainer>
    </TodoPage>
  );
};

export default Todo;
