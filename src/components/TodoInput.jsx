import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';

const TodoInputComponent = styled.form`
  width: 100%;
  height: 64px;
  display: flex;
  border: 1px solid #eee;
  border-radius: 10px;
  margin: 24px 0;
  align-items: center;
  padding: 16px;
  box-sizing: border-box;

  input {
    width: 100%;
    font-size: 16px;
    font-weight: 700;
    border: none;
    background: #fff;
    color: #202020;
    outline: none;
    padding: 8px 0;
  }

  button {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: green;
    font-size: 18px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-weight: 700;
    border: none;
    :active {
      opacity: 0.8;
    }
  }
`;

const TodoInput = ({ handleCreateTodo }) => {
  const [todo, setTodo] = useState('');
  const [isModal, setIsModal] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleIsModal = () => setIsModal(!isModal);

  const handleChangeInput = (e) => setTodo(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo) {
      handleCreateTodo(todo);
      setIsSuccess(true);
      setIsModal(true);
      setTodo('');
    } else {
      setIsSuccess(false);
      setIsModal(true);
    }
  };
  return (
    <>
      <TodoInputComponent onSubmit={handleSubmit}>
        <input placeholder="new Todo.." onChange={handleChangeInput} value={todo} />
        <button type="submit">+</button>
      </TodoInputComponent>
      {isModal && (
        <Modal
          title={isSuccess ? '성공' : '실패'}
          content={isSuccess ? '할 일이 성공적으로 등록되었습니다!✨' : '등록에 실패했습니다. 다시 확인해주세요.🥲'}
          onClose={handleIsModal}
        />
      )}
    </>
  );
};

export default TodoInput;
