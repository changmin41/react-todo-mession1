import { useTodos } from "./hooks/useTodos";
import TodoList from "./components/TodoList";

/**
 *
 * 할일 등록과 삭제 기능이 있는 간단한 투두리스트 앱입니다.
 * 만들어야 할 기능
 * - 할일 등록, localStorage 저장( 추가,삭제,체크 시 변경된 todo상태를 저장
 * - 할일 삭제, 초기 로드(앱 실행 시 localStorage에서 데이터 불러오기)
 * - 완료 체크
 */

function App() {
  const { todos, setTodos, lastId, deleteTodo, toggleTodo } = useTodos();

  //할일 등록 함수
  function addTodo(e) {
    e.preventDefault(); //새로고침 방지
    const value = e.target.todo.value;
    console.log(e.target.todo.value); //입력한 value값을 콘솔에 출력

    if (!value.trim()) {
      //빈값 입력 방지
      alert("할 일을 입력해주세요!");
      return;
    }

    setTodos([...todos, { id: lastId.current, todo: value, completed: false }]); //todos 배열에 input의 value값을 추가
    lastId.current++; // 다음 아이디 준비
    e.target.todo.value = ""; // 입력창 지우기

    return;
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 border border-slate-200">
        <h1 className="text-3xl font-black text-slate-800 mb-8 text-center tracking-tight">
          MY <span className="text-blue-600">TODO</span>
        </h1>

        {/*할일 입력, 추가 버튼*/}
        <form onSubmit={addTodo} className="flex gap-2 mb-8">
          <input
            type="text"
            name="todo"
            placeholder="할일을 입력하세요"
            className="flex-1 px-5 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-400"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 active:scale-95 transition-all shadow-lg shadow-blue-100"
          >
            추가
          </button>
        </form>

        {/*토글, 내용, 삭제 버튼*/}
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
}

export default App;
