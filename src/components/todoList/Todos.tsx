"use client";
import { MainContainer } from "@/styles/customMain";
import { TodoItemType } from "@/types/todo";
import { useState } from "react";
import styled from "styled-components";
import AddTodo from "./AddTodo";
import TodoListSection from "./TodoListSection";
import { toggleComplate } from "@/api/todo";

function Todos({initialTodos}: {initialTodos: TodoItemType[] | null}) {
  const [todos, setTodos] = useState<TodoItemType[] | null>(initialTodos);

  if (!todos) {
    return <div>데이터를 불러올 수 없습니다. 다시 시도해주세요.</div>; 
  }

  const hasTodo = todos.length > 0;

  // 투두 추가하면 todos에 추가
  const addTodoState = (newTodo: TodoItemType) => {
    setTodos([newTodo, ...todos]);
  };

  // 할일 완료 체크박스 핸들링하는 함수
    const toggleTodoStatus = async (id: number, isCompleted: boolean) => {
      try {
        await toggleComplate(id, isCompleted);
  
        setTodos((prev) => {
          if(!prev) return null;
          return prev.map((todo) => (todo.id === id ? { ...todo, isCompleted } : todo))}
        );
      } catch (error) {
        console.error("Failed to toggle todo status:", error);
      }
    };
  
  return (
    <Main>
    <AddTodo hasTodo={hasTodo} addTodoState={addTodoState} />
    <TodoListSection todos={todos} toggleTodoStatus={toggleTodoStatus} />
  </Main>
    );
  };

export default Todos;

const Main = styled.main`
  ${MainContainer}
`;
