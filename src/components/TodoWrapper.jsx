import React, { useState } from 'react';
import { TodoForm } from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';
uuidv4();

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addtodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  const toogleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newTask) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (newtask, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, task: newtask, isEditing: !todo.isEditing }
          : todo
      )
    );
  };

  return (
    <div className='todoWrapper'>
      <h1>Get Things Done!</h1>
      <TodoForm addTodo={addtodo} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm
            key={index}
            editTodo={editTask}
            task={todo}
          />
        ) : (
          <Todo
            task={todo}
            key={index}
            toogleComplete={toogleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};
