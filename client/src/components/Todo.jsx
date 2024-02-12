import React from 'react';
import { EditTodoForm } from './EditTodoForm';

export const Todo = ({ task, toogleComplete, deleteTodo, editTodo }) => {
  return (
    <div className='Todo'>
      <p
        onClick={() => toogleComplete(task.id)}
        className={`${task.completed ? 'completed' : ''}`}
      >
        {task.task}
      </p>
      <div>
        <button onClick={() => editTodo(task.id)}>edit</button>
        <button onClick={() => deleteTodo(task.id)}>delete</button>
      </div>
    </div>
  );
};
