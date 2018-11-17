import React from 'react';

const TodoList = props => {
  const listOfTodos = props.todos.length ? (
    props.todos.map(todo => {
    return (
      <div key={todo.id}>
        <span onClick={() => props.delete(todo.id)}>{todo.content}</span>
      </div>
    );
  })
  ) : (
    <p>You have completed all your recent todos. Well Done!!!</p>
  );

  return (
    <div>
      {listOfTodos}
    </div>
  );
  
};

export default TodoList
