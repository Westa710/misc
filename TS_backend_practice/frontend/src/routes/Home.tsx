import { FC } from "react";
import { useTodoList } from "../api";

export const Home: FC = () => {
  const { data: todoList, error, isValidating } = useTodoList();

  if (error) return <div>failed to load</div>;
  if(isValidating) return <div>loading...</div>;

  return (
    <div>
      <h1>ToDoリスト</h1>
      <ul>
        {todoList?.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              id={String(todo.id)}
              checked={todo.completed}
            />
            <label htmlFor={String(todo.id)}>{todo.title}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};