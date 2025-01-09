"use client";
import { useEffect, useState } from "react";
import AddTodo from "@/components/todoList/AddTodo";
import { TodoItem as TodoItemType } from "@/types/todo";
import TodoListSection from "@/components/todoList/TodoListSection";
import { fetchTodos } from "@/api/todo";

export default function Home() {
  const [todos, setTodos] = useState<TodoItemType[]>([]);
  const hasTodo = todos.length > 0;

  useEffect(() => {
    const loadTodos = async () => {
      const fetchTodoData = await fetchTodos();
      setTodos(fetchTodoData);
    };
    loadTodos();
  }, []);

  const refreshTodos = async () => {
    const fetchedTodos = await fetchTodos();
    setTodos(fetchedTodos);
  };

  return (
    <>
      <AddTodo hasTodo={hasTodo} refreshTodos={refreshTodos} />
      <TodoListSection todos={todos} refreshTodos={refreshTodos} />
    </>
  );
}
