import { TodoItem as TodoItemType } from "@/types/todo";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useRouter } from "next/navigation";

const initialTodos: TodoItemType[] = [
  { id: "1", name: "비타민 챙겨 먹기", isCompleted: false },
  { id: "2", name: "맥주 마시기", isCompleted: false },
  { id: "3", name: "운동하기", isCompleted: false },
  { id: "4", name: "은행 다녀오기", isCompleted: true },
  { id: "5", name: "비타민 챙겨 먹자", isCompleted: true },
];

function TodoList() {
  const [todos, setTodos] = useState<TodoItemType[]>(initialTodos);
  const router = useRouter();

  const goDetailPage = (id: string) => {
    console.log(`Navigating to /items/${id}`);
    router.push(`/items/${id}`);
  };

  const toggleTodoStatus = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  return (
    <TodoListContainer>
      <TodoSection>
        <Image src="/images/todo.svg" alt="todo" width={101} height={36} />
        <TodoItemsContainer>
          {todos
            .filter((todo) => !todo.isCompleted)
            .map((todo) => (
              <TodoItem
                key={todo.id}
                {...todo}
                onClick={() => goDetailPage(todo.id)}
                onToggle={() => toggleTodoStatus(todo.id)}
              />
            ))}
        </TodoItemsContainer>
      </TodoSection>
      <TodoSection>
        <Image src="/images/done.svg" alt="todo" width={101} height={36} />
        <TodoItemsContainer>
          {todos
            .filter((todo) => todo.isCompleted)
            .map((todo) => (
              <TodoItem
                key={todo.id}
                {...todo}
                onClick={() => goDetailPage(todo.id)}
                onToggle={() => toggleTodoStatus(todo.id)}
              />
            ))}
        </TodoItemsContainer>
      </TodoSection>
    </TodoListContainer>
  );
}

export default TodoList;

const TodoListContainer = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const TodoSection = styled.div`
  margin-top: 24px;
  flex: 1;
`;

const TodoItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
`;
