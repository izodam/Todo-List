"use client";
import { MainContainer } from "@/styles/customMain";
import { TodoItemType } from "@/types/todo";
import { useEffect, useState } from "react";
import styled from "styled-components";
import AddTodo from "./AddTodo";
import TodoListSection from "./TodoListSection";
import { fetchTodos, toggleComplate } from "@/api/todo";
import LoadingSpinner from "../common/LoadingSpinner";
import { useInView } from "react-intersection-observer";

function Todos() {
  const [todos, setTodos] = useState<TodoItemType[]>([]);

  // pagination
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [isPageLoading, setIsPageLoading] = useState<boolean>(true); // 첫 로딩 상태
  const [isScrollLoading, setIsScrollLoading] = useState<boolean>(false); // 무한 스크롤 로딩 상태

  const { ref, inView } = useInView({ threshold: 1.0 });

  const pageSize = 10; // 한번에 불러올 항목 수

  // 첫 데이터 로드
  useEffect(() => {
    const loadInitialTodos = async () => {
      setPage(1);
      setIsPageLoading(true);
      try {
        const initialTodos = await fetchTodos(1, pageSize);
        setTodos(initialTodos);
        setHasMore(initialTodos.length === pageSize); // 데이터가 더 있는지 확인
        setPage(2);
      } catch (error) {
        console.error("Failed to load initial todos:", error);
      } finally {
        setIsPageLoading(false);
      }
    };

    loadInitialTodos();
  }, []);

  // 무한 스크롤 데이터 로드
  useEffect(() => {
    if (!inView || !hasMore || isScrollLoading || page === 1) return; // 첫 페이지는 이미 로드됨

    if (inView && hasMore && !isScrollLoading) {
      const loadMoreTodos = async () => {
        setIsScrollLoading(true);
        try {
          const newTodos = await fetchTodos(page, pageSize);
          setTodos((prev) => [...prev, ...newTodos]);
          setHasMore(newTodos.length === pageSize);
          await setPage((prev) => prev + 1);
        } catch (error) {
          console.error("Failed to load more todos:", error);
        } finally {
          setIsScrollLoading(false);
        }
      };

      loadMoreTodos();
    }
  }, [inView, page, hasMore, isScrollLoading]);

  const hasTodo = todos.length > 0;

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
    <Main>
      <AddTodo hasTodo={hasTodo} addTodoState={addTodoState} />
      <TodoListSection
        todos={todos}
        isLoading={isPageLoading}
        toggleTodoStatus={toggleTodoStatus}
      />
      {!isScrollLoading && hasMore && <LoadingTrigger ref={ref} />}
      {!isPageLoading && isScrollLoading && <LoadingSpinner />}
    </Main>
  );
}

export default Todos;

const Main = styled.main`
  ${MainContainer}
`;

const LoadingTrigger = styled.div`
  height: 30px;
`;
