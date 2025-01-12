"use client";
import { MainContainer } from "@/styles/customMain";
import { TodoItemType } from "@/types/todo";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import AddTodo from "./AddTodo";
import TodoListSection from "./TodoListSection";
import { fetchTodos, toggleComplate } from "@/api/todo";

function Todos() {
  const [todos, setTodos] = useState<TodoItemType[]>([]);

  // pagination
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const observerRef = useRef<HTMLDivElement>(null);

  const pageSize = 10; // 한번에 불러올 항목 수

  // 초기 데이터 로드
  useEffect(() => {
    const loadTodos = async () => {
      setIsLoading(true);
      const newTodos = await fetchTodos(page, pageSize);
      setTodos((prev) => [...prev, ...newTodos]);
      setHasMore(newTodos.length === pageSize); // 추가 데이터가 없으면 false
      setIsLoading(false);
    };

    loadTodos();
  }, [page]);

  // 무한 스크롤 핸들러
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          setPage((prev) => prev + 1); // 다음 페이지 로드
        }
      },
      { threshold: 1.0 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) observer.disconnect();
    };
  }, [hasMore, isLoading]);

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
  
        setTodos((prev) =>prev.map((todo) => (todo.id === id ? { ...todo, isCompleted } : todo)));
      } catch (error) {
        console.error("Failed to toggle todo status:", error);
      }
    };
  
  return (
    <Main>
    <AddTodo hasTodo={hasTodo} addTodoState={addTodoState} />
    <TodoListSection todos={todos} toggleTodoStatus={toggleTodoStatus} />
    <LoadingTrigger ref={observerRef} />
      {isLoading && <p>Loading...</p>}
  </Main>
    );
  };

export default Todos;

const Main = styled.main`
  ${MainContainer}
`;

const LoadingTrigger = styled.div`
  height: 1px;
`;