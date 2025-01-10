import TodoDetail from "@/components/todoDetail/TodoDetail";

const dummyTodoDetail = {
  id: 1,
  name: "할일 1",
  memo: null,
  imageUrl: null,
  isCompleted: false,
};

export default async function DetailPage({
  params,
}: {
  params: Promise<{ itemId: string }>;
}) {
  const itemId = (await params).itemId;

  return (
    <div>
      <TodoDetail initialTodo={dummyTodoDetail} />
    </div>
  );
}
