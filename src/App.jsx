import { useState } from 'react'

function App() {
    const [todos, setTodos] = useState(['할일1', '할일2', '할일3'])

    //할일 등록 함수
    function addTodo(e) {
        e.preventDefault() //새로고침 방지
        console.log(e.target.todo.value) //입력한 value값을 콘솔에 출력
        setTodos([...todos, e.target.todo.value]) //todos 배열에 input의 value값을 추가
        return
    }

    return (
        <>
            <form onSubmit={addTodo}>
                <input type="text" name="todo" placeholder="할일을 입력하세요" />
                <button type="submit">추가</button>
            </form>
            <ul>
                {todos.map((item, i) => (
                    <li key={i}> {item} </li> //key 값으로 오류 해결
                ))}
            </ul>
        </>
    )
}

export default App
