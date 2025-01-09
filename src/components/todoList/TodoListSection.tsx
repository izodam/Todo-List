import { TodoItem } from "@/types/todo";
import styled from "styled-components";
import TodoList from "./TodoList";
import { toggleComplate } from "@/api/todo";

interface TodoListSectionProps {
  todos: TodoItem[];
  refreshTodos: () => void;
}

// 할일 리스트의 전체 부분
function TodoListSection({ todos, refreshTodos }: TodoListSectionProps) {
  // 할일 완료 체크박스 핸들링하는 함수
  const toggleTodoStatus = async (id: number, isComplated: boolean) => {
    console.log(`${id}번 체크박스 눌림`);
    await toggleComplate(id, isComplated);
    refreshTodos();
  };

  const todolist = todos?.filter((todo) => !todo.isCompleted);
  const doneTodolist = todos?.filter((todo) => todo.isCompleted);

  return (
    <TodoListContainer>
      <TodoList
        isTodo={true}
        title="todo"
        todos={todolist}
        toggleTodoStatus={toggleTodoStatus}
      />
      <TodoList
        isTodo={false}
        title="done"
        todos={doneTodolist}
        toggleTodoStatus={toggleTodoStatus}
      />
    </TodoListContainer>
  );
}

export default TodoListSection;

const TodoListContainer = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;
