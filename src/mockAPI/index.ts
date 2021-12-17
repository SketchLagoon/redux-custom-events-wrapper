const BASE_URL = "https://localhost:4000/api";

export interface Todo {
  id: number;
  text: string;
  active: boolean;
  done: boolean;
}

let todos: Todo[] = [
  "Task1",
  "Task2",
  "Task3",
  "Task4",
  "Task5",
  "Task6",
  "Task7",
  "Task8",
  "Task9",
  "Task10",
].map((text, index) => ({
  id: index + 1,
  text: `Accomplish ${text}`,
  active: true,
  done: false,
}));

export const getTodos = async (): Promise<Todo[]> => todos;
