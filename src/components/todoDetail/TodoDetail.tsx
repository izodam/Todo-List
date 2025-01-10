import TodoInput from "@/components/todoDetail/TodoInput";
import { TodoDetailType } from "@/types/todoDetail";

function TodoDetail({ initialTodo }: { initialTodo: TodoDetailType }) {
  return (
    <div>
      <TodoInput
        initialName={initialTodo.name}
        initialIsCompleted={initialTodo.isCompleted}
      />
    </div>
  );
}

export default TodoDetail;
