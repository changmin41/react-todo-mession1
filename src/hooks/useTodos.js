import { useState, useRef, useEffect } from "react";
import { getItem, setItem } from "../utils/storage";

export const useTodos = () => {
  const [todos, setTodos] = useState(getItem("my-todos", []));
  const lastId = useRef(
    todos.length > 0 ? Math.max(...todos.map((t) => t.id)) + 1 : 1,
  ); //여기가 오류였네

  //스토리지에서 데이터 불러오기
  useEffect(() => {
    setItem("my-todos", todos);
  }, [todos]);

  //할일 삭제 함수
  const deleteTodo = (selectedId) => {
    const nextState = todos.filter((item) => item.id !== selectedId);
    setTodos(nextState);
  };

  //할일 체크 함수
  const toggleTodo = (selectedId) => {
    const nextState = todos.map((item) =>
      item.id === selectedId ? { ...item, completed: !item.completed } : item,
    );
    setTodos(nextState);
  };

  return { todos, setTodos, lastId, deleteTodo, toggleTodo };
};
