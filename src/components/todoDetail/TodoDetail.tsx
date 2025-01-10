"use client";
import TodoInput from "@/components/todoDetail/TodoInput";
import { TodoDetailType } from "@/types/todoDetail";
import DetailSection from "./DetailSection";
import { useEffect, useState } from "react";
import ButtonSection from "./ButtonSection";
import {
  deleteTodoDetail,
  updateTodoDetail,
  uploadImage,
} from "@/api/todoDetail";
import { useRouter } from "next/navigation";

function TodoDetail({ initialTodo }: { initialTodo: TodoDetailType | null}) {
  const [todo, setTodo] = useState<TodoDetailType | null>(initialTodo);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const router = useRouter();

  // 페이지에서 수정사항이 있는지 감지
  useEffect(() => {
    if (JSON.stringify(initialTodo) !== JSON.stringify(todo)) {
      setIsEdit(true);
    } else {
      setIsEdit(false);
    }
  }, [initialTodo, todo]);

  if (!todo) {
    return <div>데이터를 불러올 수 없습니다. 다시 시도해주세요.</div>; 
  }

  // 투두 이름 변경
  const updateTodoName = (newName: string) => {
    setTodo((prev) => {
      if (!prev) return null; // prev가 null인 경우 처리
      return { ...prev, name: newName };
    });
  };

  // 투두 완료 여부 변경
  const toggleIsCompleted = () => {
    setTodo((prev) => {
      if (!prev) return null; // prev가 null인 경우 처리
      return { ...prev, isCompleted: !prev.isCompleted };
    });
  };

  // 이미지 업로드(url 변환)
  const updateImage = async (file: File) => {
    try {
      const imageUrl = await uploadImage(file);
      setTodo((prev) => {
        if (!prev) return null; // prev가 null인 경우 처리
        return { ...prev, imageUrl };
      });
    } catch (error) {
      console.error("Failed to update image:", error);
    }
  };

  // 이미지 파일 추가
  const handleImageChange = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.onchange = async (event: Event) => {
      const target = event.target as HTMLInputElement;
      if (target.files && target.files[0]) {
        const file = target.files[0];

        // 파일이 영어로만 이루어지고 5MB 이내인지 확인
        const isEnglishName = /^[a-zA-Z0-9._-]+$/.test(file.name);
        const isValidSize = file.size <= 5 * 1024 * 1024;
        if (!isEnglishName || !isValidSize) {
          alert(
            "이미지 파일 이름은 영어로만 이루어지고, 크기는 5MB 이하이여야 합니다."
          );
          return;
        }
        updateImage(file);
      }
    };
    fileInput.click();
  };

  // 투두 메모 변경
  const updateMemo = (newMemo: string) => {
    setTodo((prev) => {
      if (!prev) return null; // prev가 null인 경우 처리
      return { ...prev, memo: newMemo };
    });
  };

  // 수정완료 버튼 누르면 실행
  const editTodo = async () => {
    try {
      await updateTodoDetail(todo);
      router.push("/");
    } catch (error) {
      console.error("Failed to delete todo:", error);
    }
  };

  // 삭제하기 버튼 누르면 실행
  const deleteTodo = async () => {
    try {
      await deleteTodoDetail(todo.id);
      router.push("/");
    } catch (error) {
      console.error("Failed to delete todo:", error);
    }
  };


  return (
    <div>
      <TodoInput
        initialName={todo.name}
        isCompleted={todo.isCompleted}
        updateTodoName={updateTodoName}
        toggleIsCompleted={toggleIsCompleted}
      />
      <DetailSection
        imageUrl={todo.imageUrl}
        memo={todo.memo}
        handleImageChange={handleImageChange}
        updateMemo={updateMemo}
      />
      <ButtonSection
        isEdit={isEdit}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </div>
  );
}

export default TodoDetail;
