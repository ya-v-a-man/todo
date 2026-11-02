import { useState } from 'react';
import Header from './components/Header/Header';
import TodoForm from './components/TodoForm/TodoForm';
import TodoStats from './components/TodoStats/TodoStats';
import TodoList from './components/TodoList/TodoList';

export default function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(text) {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false
    }

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }

  function toggleTodo(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id == id
          ? {...todo, completed: !todo.completed}
          : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => todo.id !== id)
    );
  }

  return (
    <>
      <Header />
      <div className="container">
        <TodoForm addTodo={addTodo} />

        <div className="todoSection">
          <TodoStats todos={todos} />
          
          <TodoList 
            todos={todos}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        </div>
      </div>
    </>
  )
}