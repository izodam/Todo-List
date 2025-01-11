import { fetchTodos } from "@/api/todo";
import Todos from "@/components/todoList/Todos";

export default async function Home() {
  // 서버단에서 todo 목록 호출
  const todos = await fetchTodos()
  return (
    <Todos initialTodos={todos} />
  );
}

