"use client";
import { useEffect, useState } from "react";
import AddTodo from "@/components/todoList/AddTodo";
import { TodoItem as TodoItemType } from "@/types/todo";
import TodoListSection from "@/components/todoList/TodoListSection";
import { fetchTodos, toggleComplate } from "@/api/todo";

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

  // 투두 추가하면 todos에 추가
  const addTodoState = (newTodo: TodoItemType) => {
    setTodos([newTodo, ...todos]);
  };

  // 할일 완료 체크박스 핸들링하는 함수
  const toggleTodoStatus = async (id: number, isCompleted: boolean) => {
    try {
      await toggleComplate(id, isCompleted);

      setTodos((prev) =>
        prev.map((todo) => (todo.id === id ? { ...todo, isCompleted } : todo))
      );
    } catch (error) {
      console.error("Failed to toggle todo status:", error);
    }
  };

  return (
    <>
      <AddTodo hasTodo={hasTodo} addTodoState={addTodoState} />
      <TodoListSection todos={todos} toggleTodoStatus={toggleTodoStatus} />
    </>
  );
}
