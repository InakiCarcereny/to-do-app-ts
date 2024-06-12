interface Todo {
  id: number
  text: string
  completed: boolean
}

type ListTodos = Todo[]

interface Props {
  todos: ListTodos
  onDeleteTodo: (id: number) => void
  onCompleteTodo: (id: number, completed: boolean) => void
}

export const SectionTodos: React.FC<Props> = ({ todos, onDeleteTodo, onCompleteTodo }) => {

  return (
    <div className="w-[600px] min-h-[800px] bg-gray-200 rounded-lg">
      <ul className="px-6 py-4">
      {
        todos.map((todo) => (
          <li className="flex items-center justify-between mb-2" key={todo.id}>
            <div className="flex items-center gap-2">
              <input 
              type="checkbox" 
              checked={todo.completed}
              onChange={() => onCompleteTodo(todo.id, todo.completed)}
              className="h-4 w-4 rounded-full border-gray-300" />
              <span>{todo.text}</span>
            </div>
            <button 
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg"
            onClick={() => onDeleteTodo(todo.id)}>
              Delete
            </button>
          </li>
        ))
      }
      </ul>
    </div>
  )
}