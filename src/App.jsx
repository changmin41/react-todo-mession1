import { useState, useRef, useEffect } from 'react'
/**
 *
 * 할일 등록과 삭제 기능이 있는 간단한 투두리스트 앱입니다.
 * 만들어야 할 기능
 * - 할일 등록, localStorage 저장( 추가,삭제,체크 시 변경된 todo상태를 저장
 * - 할일 삭제, 초기 로드(앱 실행 시 localStorage에서 데이터 불러오기)
 * - 완료 체크
 */
const storage = window.localStorage

const setItem = (key, value) => {
    try {
        // 저장할 때는 항상 문자열로 바꿔서 저장해야 합니다.
        storage.setItem(key, JSON.stringify(value))
    } catch (e) {
        console.log(e)
    }
}

const getItem = (key, defaultValue) => {
    try {
        const storedValue = storage.getItem(key)
        if (storedValue) {
            return JSON.parse(storedValue)
        }
        return defaultValue
    } catch (e) {
        console.log(e)
        return defaultValue
    }
}

function App() {
    const [todos, setTodos] = useState(getItem('my-todos', []))
    let lastId = useRef(1) //id값이 1부터 시작
    //스토리지에서 데이터 불러오기
    useEffect(() => {
        setItem('my-todos', todos)
    }, [todos])

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

    //할일 삭제 함수
    function deleteTodo(selectedId) {
        const nextState = todos.filter((item) => item.id !== selectedId)
        setTodos(nextState)
    }
    //할일 체크 함수
    function toggleTodo(selectedId) {
        const nextState = todos.map((item) => (item.id === selectedId ? { ...item, completed: !item.completed } : item))
        setTodos(nextState)
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
            <ul>
                {todos.map((item) => (
                    <li key={item.id}>
                        {JSON.stringify(item.completed)}
                        <input type="checkbox" checked={item.completed} onChange={() => toggleTodo(item.id)} />
                        {item.id},{item.todo}
                        <button onClick={() => deleteTodo(item.id)}>삭제</button>
                    </li> //key 값으로 오류 해결, 화살표 함수로 deleteTodo함수에 i값 전달
                ))}
            </ul>
        </>
    )
}

export default App
