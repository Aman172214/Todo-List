import React, { useState } from "react";
import TodoRow from "./components/TodoRow.tsx";
import Button from "./components/Button.tsx";
import "./App.css";

const App: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo) {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const handleCompleteTodo = (index: number, isChecked: boolean) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = isChecked
      ? `✓ ${todos[index]}`
      : todos[index].slice(2);
    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="heading">To-Do List</h1>
        <div className="app">
          <div className="todo-list">
            {todos.map((todo, index) => (
              <TodoRow
                key={index}
                label={todo}
                onDelete={() => handleDeleteTodo(index)}
                onComplete={(isChecked) => handleCompleteTodo(index, isChecked)}
              />
            ))}
          </div>
          <div className="add-todo">
            <input type="text" value={newTodo} onChange={handleInputChange} />
            <Button variant="big" onClick={handleAddTodo}>
              Add Todo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
