import React, { useState } from 'react';

const NewTodo = ({ todo, onDelete, onUpdate, onRestore}) => {
  const [editing, setEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(todo.title);

  const handleDelete = () => {
    onDelete(todo._id);
  };

  const handleRestore =() =>{
    onRestore(todo)
  }



  const handleUpdate = () => {
    onUpdate(todo._id, { title: updatedTitle, completed: todo.completed });
    setEditing(false);
  };

  return (
    <div className={`todo ${todo.completed ? 'completed' : ''}`}>
    
     
        <p>{todo.title}</p>
      
      {editing ? (
        <button onClick={handleUpdate}>Update</button>
      ) : (
        <>
    
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleRestore}>Restore</button>
        </>
      )}
    </div>
  );
};

export default NewTodo;