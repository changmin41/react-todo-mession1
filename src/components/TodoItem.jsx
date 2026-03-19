function TodoItem({ item, toggleTodo, deleteTodo }) {
  return (
    <li
      key={item.id}
      className="group flex items-center justify-between p-4 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-white hover:shadow-md transition-all duration-200"
    >
      <div className="flex items-center gap-4">
        {/* 완료 여부 텍스트는 숨김 처리 */}
        <span className="sr-only">{JSON.stringify(item.completed)}</span>

        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => toggleTodo(item.id)}
          className="w-5 h-5 cursor-pointer accent-blue-600 rounded-lg transition-all"
        />

        <span
          className={`text-lg font-medium transition-all ${item.completed ? "line-through text-slate-400" : "text-slate-700"}`}
        >
          {item.id}. {item.todo}
        </span>
      </div>

      <button
        onClick={() => deleteTodo(item.id)}
        className="text-sm font-bold text-red-400 hover:text-red-600 px-3 py-1 hover:bg-red-50 rounded-xl transition-all"
      >
        삭제
      </button>
    </li> //key 값으로 오류 해결, 화살표 함수로 deleteTodo함수에 i값 전달
  );
}

export default TodoItem;
