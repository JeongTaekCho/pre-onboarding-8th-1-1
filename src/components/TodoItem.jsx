import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { BsCheckSquareFill, BsCheckSquare, BsPencil } from 'react-icons/bs';
import { TiDeleteOutline } from 'react-icons/ti';
import { Button } from '@mui/material';

const TodoComponent = styled.div`
  width: 100%;

  .todo {
    box-sizing: border-box;
    width: 100%;
    height: 64px;
    display: flex;
    justify-content: space-between;
    padding: 16px;
    align-items: center;
    font-weight: 700;
    border-bottom: 1px solid #eee;

    input {
      width: 100%;
      padding: 8px;
      font-size: 16px;
      font-weight: 700;
      margin: 16px 16px 16px 8px;
      outline: none;
      border: 1px solid #b2b2b2;
    }

    &.done {
      span {
        color: #b2b2b2;
        text-decoration: line-through;
      }
    }

    .action-icons {
      font-size: 20px;
      display: flex;

      .action-icon {
        cursor: pointer;
        margin: 8px;
      }
    }
  }

  button {
    width: 50px;
    height: 25px;
    margin-right: 10px;
    cursor: pointer;
  }
`;

const TodoItem = ({ data, handleDeleteTodo, handleUpdateTodo }) => {
  const { todo, isCompleted, id } = data;
  const [isEdit, setIsEdit] = useState(false);
  const [newTodo, setNewTodo] = useState(todo);
  const inputRef = useRef();
  const handleEdit = () => {
    setIsEdit(!isEdit);
    if (isEdit) {
      handleUpdateTodo(id, newTodo, false);
    }
  };
  const updateCancel = () => {
    setIsEdit(false);
    setNewTodo(todo);
  };
  return (
    <TodoComponent>
      <div className={isCompleted ? 'todo done' : 'todo'}>
        {isEdit ? (
          <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} ref={inputRef} />
        ) : (
          <span>{todo}</span>
        )}
        {isEdit ? (
          <div className="action-icons">
            <Button variant="contained" color="success" onClick={handleEdit}>
              수정
            </Button>
            <Button variant="outlined" color="error" onClick={updateCancel}>
              취소
            </Button>
          </div>
        ) : (
          <div className="action-icons">
            <div
              className="action-icon complete"
              onClick={() => handleUpdateTodo(id, todo, !isCompleted)}
              role="presentation">
              {isCompleted ? <BsCheckSquareFill /> : <BsCheckSquare />}
            </div>
            <div className="action-icon" onClick={handleEdit} role="presentation">
              <BsPencil />
            </div>
            <div className="action-icon delete" onClick={() => handleDeleteTodo(id)} role="presentation">
              <TiDeleteOutline />
            </div>
          </div>
        )}
      </div>
    </TodoComponent>
  );
};

export default TodoItem;
