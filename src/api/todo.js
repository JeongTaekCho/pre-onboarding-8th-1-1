import client from '../utils/httpClient';

export const todoAPI = {
  createTodo: async (todo) => {
    await client.post('/todos', { todo });
  },
  updateTodo: async (id, todo, isCompleted) => {
    await client.put(`/todos/${id}`, { todo, isCompleted });
  },
  deleteTodo: async (id) => {
    await client.delete(`/todos/${id}`);
  },
};
