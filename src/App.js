import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="todo-app">
      <h1>To-do Application</h1>
      <TodoList/>

  

    </div>
  );
}

export default App;
