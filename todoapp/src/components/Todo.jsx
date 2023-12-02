import React, { useState } from "react";

import Form from "./form";
import TodoList from "./TodoList";
import Footer from "./footer";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo)=>todo.done).length
  const totalTodos = todos.length
  return (
    <div>
      <Form todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer completedTodos={completedTodos} totalTodos={totalTodos} />
    </div>
  );
}
