import React, { useState } from 'react';

export const TodoForm = ({ addTodo }) => {
  const [taskvalue, setTaskvalue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(taskvalue);

    setTaskvalue('');
  };

  return (
    <form
      className='TodoForm'
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        className='todo-input'
        value={taskvalue}
        placeholder='What is the task today?'
        onChange={(e) => setTaskvalue(e.target.value)}
      />
      <button
        type='submit'
        className='todo-btn'
      >
        Add Task
      </button>
    </form>
  );
};
