"use client";
import { useState } from "react";
import AddTodo from "@/components/todoList/AddTodo";
import { TodoItem as TodoItemType } from "@/types/todo";
import TodoListSection from "@/components/todoList/TodoListSection";

const initialTodos: TodoItemType[] = [
  { id: "1", name: "비타민 챙겨 먹기", isCompleted: false },
  { id: "2", name: "맥주 마시기", isCompleted: false },
  { id: "3", name: "운동하기", isCompleted: false },
  { id: "4", name: "은행 다녀오기", isCompleted: true },
  { id: "5", name: "비타민 챙겨 먹자", isCompleted: true },
];

export default function Home() {
  const [todos, setTodos] = useState<TodoItemType[]>([]);
  const hasTodo = todos.length > 0;

  return (
    <>
      <AddTodo hasTodo={hasTodo} />
      <TodoListSection todos={todos} />
    </>
  );
}
