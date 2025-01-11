import { TodoItemType } from "@/types/todo";
import api from "./index";

// 항목 목록 조회
export const fetchTodos = async (): Promise<TodoItemType[] | null> => {
  try {
    const response = await api.get("/izodam/items");
    return response.data;
  } catch (err) {
    console.error("Failed to fetch todos:", err);
    return null;
  }
};

// 항목 추가
export const addTodo = async (name: string) => {
  try {
    const response = await api.post("/izodam/items", { name });
    return response.data;
  } catch (err) {
    console.error("Failed to add todos:", err);
  }
};

// 체크박스 수정
export const toggleComplate = async (id: number, isCompleted: boolean) => {
  try {
    await api.patch(`/izodam/items/${id}`, { isCompleted });
  } catch (err) {
    console.error("Failed to fix todos:", err);
  }
};
