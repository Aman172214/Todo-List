import React, { useState } from "react";
import TodoRow from "./components/TodoRow.tsx";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-md-center">
        <div className="col-6">
          <div className="card ">
            <div className="card-header">
              <h1 className="card-title text-center">Todo List</h1>
            </div>
            <div className="card-body">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control me-3 rounded"
                  placeholder="Enter a new todo..."
                  value={newTodo}
                  onChange={handleInputChange}
                />
                <button
                  className="btn btn-primary rounded"
                  onClick={handleAddTodo}
                  disabled={newTodo.trim() === ""}
                >
                  Add Todo
                </button>
              </div>
              <ul className="list-group">
                {todos.map((todo, index) => (
                  <li className="list-group-item" key={index}>
                    <TodoRow
                      label={todo}
                      onDelete={() => handleDeleteTodo(index)}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
