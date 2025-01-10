import { fetchTodoDetail } from "@/api/todoDetail";
import TodoDetail from "@/components/todoDetail/TodoDetail";

export default async function DetailPage({
  params,
}: {
  params: Promise<{ itemId: string }>;
}) {
  const itemId = (await params).itemId;
  const todoDetail = await fetchTodoDetail(parseInt(itemId));

  return (
    <div>
      <TodoDetail initialTodo={todoDetail} />
    </div>
  );
}
