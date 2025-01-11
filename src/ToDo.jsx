import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, toggleComplete } from "./redux/toDoSlice";

const ToDo = () => {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Redux To-Do List</h1>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter a task"
          style={{ padding: "10px", width: "300px", marginRight: "10px" }}
        />
        <button
          onClick={handleAddTodo}
          style={{
            padding: "10px 20px",
            background: "blue",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Add
        </button>
      </div>
      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              marginBottom: "10px",
            }}
          >
            <span
              onClick={() => dispatch(toggleComplete(todo.id))}
              style={{
                cursor: "pointer",
                marginRight: "10px",
                color: todo.completed ? "green" : "black",
              }}
            >
              {todo.text}
            </span>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              style={{
                padding: "5px 10px",
                background: "red",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
