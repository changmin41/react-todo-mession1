function TodoItem({ item, toggleTodo, deleteTodo }) {
    return (
        <li key={item.id}>
            {JSON.stringify(item.completed)}
            <input type="checkbox" checked={item.completed} onChange={() => toggleTodo(item.id)} />
            {item.id},{item.todo}
            <button onClick={() => deleteTodo(item.id)}>삭제</button>
        </li> //key 값으로 오류 해결, 화살표 함수로 deleteTodo함수에 i값 전달
    )
}

export default TodoItem
