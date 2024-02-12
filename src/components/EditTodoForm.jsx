import React, { useState } from 'react';

export const EditTodoForm = ({ editTodo, task }) => {
  const [taskvalue, setTaskvalue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();

    editTodo(taskvalue, task.id);

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
        placeholder='Update the task here!'
        onChange={(e) => setTaskvalue(e.target.value)}
      />
      <button
        type='submit'
        className='todo-btn'
      >
        Update Task
      </button>
    </form>
  );
};
