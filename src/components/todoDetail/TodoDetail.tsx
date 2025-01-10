"use client";
import TodoInput from "@/components/todoDetail/TodoInput";
import { TodoDetailType } from "@/types/todoDetail";
import DetailSection from "./DetailSection";
import { useEffect, useState } from "react";
import ButtonSection from "./ButtonSection";

function TodoDetail({ initialTodo }: { initialTodo: TodoDetailType }) {
  const [todo, setTodo] = useState<TodoDetailType>(initialTodo);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  // 투두 이름 변경
  const updateTodoName = (newName: string) => {
    setTodo((prev) => ({ ...prev, name: newName }));
  };

  // 투두 완료 여부 변경
  const toggleIsCompleted = () => {
    setTodo((prev) => ({ ...prev, isCompleted: !prev.isCompleted }));
  };

  // 투두 메모 변경
  const updateMemo = (newMemo: string) => {
    setTodo((prev) => ({ ...prev, memo: newMemo }));
  };

  // 수정완료 버튼 누르면 실행
  const editTodo = () => {
    console.log("edit complete");
  };

  // 삭제하기 버튼 누르면 실행
  const deleteTodo = () => {
    console.log("delete complete");
  };

  // 페이지에서 수정사항이 있는지 감지
  useEffect(() => {
    if (JSON.stringify(initialTodo) !== JSON.stringify(todo)) {
      setIsEdit(true);
    } else {
      setIsEdit(false);
    }
  }, [initialTodo, todo]);

  return (
    <div>
      <TodoInput
        initialName={todo.name}
        isCompleted={todo.isCompleted}
        updateTodoName={updateTodoName}
        toggleIsCompleted={toggleIsCompleted}
      />
      <DetailSection updateMemo={updateMemo} />
      <ButtonSection
        isEdit={isEdit}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </div>
  );
}

export default TodoDetail;
