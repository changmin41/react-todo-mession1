import TodoItem from './TodoItem'

function TodoList({ todos, toggleTodo, deleteTodo }) {
    return (
        <ul>
            {todos.map((item) => (
                <TodoItem key={item.id} item={item} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
            ))}
        </ul>
    )
}

export default TodoList
