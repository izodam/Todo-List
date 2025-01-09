"use client";
import AddTodo from "@/components/todoList/AddTodo";
import TodoList from "@/components/todoList/TodoList";

export default function Home() {
  return (
    <>
      <AddTodo hasTodo={true} />
      <TodoList />
    </>
  );
}
