import { useTodos } from './hooks/useTodos'
import TodoList from './components/TodoList'

/**
 *
 * 할일 등록과 삭제 기능이 있는 간단한 투두리스트 앱입니다.
 * 만들어야 할 기능
 * - 할일 등록, localStorage 저장( 추가,삭제,체크 시 변경된 todo상태를 저장
 * - 할일 삭제, 초기 로드(앱 실행 시 localStorage에서 데이터 불러오기)
 * - 완료 체크
 */

function App() {
    const { todos, setTodos, lastId, deleteTodo, toggleTodo } = useTodos()

    //할일 등록 함수
    function addTodo(e) {
        e.preventDefault() //새로고침 방지
        const value = e.target.todo.value
        console.log(e.target.todo.value) //입력한 value값을 콘솔에 출력

        if (!value.trim()) {
            //빈값 입력 방지
            alert('할 일을 입력해주세요!')
            return
        }

        setTodos([...todos, { id: lastId.current, todo: value, completed: false }]) //todos 배열에 input의 value값을 추가
        lastId.current++ // 다음 아이디 준비
        e.target.todo.value = '' // 입력창 지우기

        return
    }

    return (
        <>
            {' '}
            {/*할일 입력, 추가 버튼*/}
            <form onSubmit={addTodo}>
                <input type="text" name="todo" placeholder="할일을 입력하세요" />
                <button type="submit">추가</button>
            </form>
            {/*토글, 내용, 삭제 버튼*/}
            <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        </>
    )
}

export default App
