import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Todo from '../pages/Todo';
import Login from '../pages/Login';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/todo" element={<Todo />} />
      <Route path="/" element={<Login />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
