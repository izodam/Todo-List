import { TodoDetailType } from "@/types/todoDetail";
import api from "./index";

interface TodoDetailResponse {
  id: number;
  name: string;
  memo: string | null;
  imageUrl: string | null;
  isCompleted: boolean;
  tenantId: string;
}

// 항목 상세 조회
export const fetchTodoDetail = async (id: number) => {
  try {
    const response = await api.get<TodoDetailResponse>(`/izodam/items/${id}`);
    // null값을 빈 문자열로 변환 & tenantId 제외 후 저장
    const { tenantId, ...data } = { // eslint-disable-line @typescript-eslint/no-unused-vars
        ...response.data,
        memo: response.data.memo ?? "",
        imageUrl: response.data.imageUrl ?? "",
      };
    return data;
  } catch (err) {
    console.error("Failed to fetch todos:", err);
    return null;
  }
};

// 항목 삭제
export const deleteTodoDetail = async (id: number) => {
  try {
    await api.delete(`/izodam/items/${id}`);
  } catch (err) {
    console.error("Failed to fetch todos:", err);
  }
};

// 이미지 업로드
export const uploadImage = async (file: File) => {
  const formData = new FormData();
  formData.append("image", file);

  try {
    const response = await api.post("/izodma/images/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data.url;
  } catch (error) {
    console.error("Failed to upload image:", error);
    return null;
  }
};

// 항목 수정
export const updateTodoDetail = async (todo: TodoDetailType) => {
  try {
    const { id, ...todoData } = todo;
    await api.patch(`/izodam/items/${id}`, todoData);
  } catch (err) {
    console.error("Failed to fix todos:", err);
  }
};
