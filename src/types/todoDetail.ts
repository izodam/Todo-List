export interface TodoDetailType {
  id: number;
  name: string;
  isCompleted: boolean;
  memo: string;
  imageUrl: string;
}


export interface TodoInputProps {
  initialName: string;
  isCompleted: boolean;
  updateTodoName: (newName: string) => void;
  toggleIsCompleted: () => void;
}

export interface DetailSectionProps {
  imageUrl: string;
  memo: string;
  updateMemo: (newMemo: string) => void;
  handleImageChange: () => void;
}

export interface ButtonSectionProps {
  isEdit: boolean;
  deleteTodo: () => void;
  editTodo: () => void;
}

export interface ImageUploaderProps {
  imageUrl: string;
  onImageChange: () => void;
}

export interface MemoProps {
  initialMemo: string;
  updateMemo: (newMemo: string) => void;
}