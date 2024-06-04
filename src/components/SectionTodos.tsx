import {type TodoList } from "../types.d"
import { Todo } from "./Todo"

interface Props {
  todos: TodoList
}

export const SectionTodos: React.FC<Props> = ({ todos }) => {

  return (
    <section className='bg-gray-200 p-4 rounded-md w-[800px] min-h-[600px]'>
    <ul className="flex flex-col gap-4">
      {todos.map((todo) => (
        <li key={todo.id}>
          <Todo 
          id={todo.id}
          text={todo.text}
          completed={todo.completed}/>
        </li>
      ))}
    </ul>
  </section>
  )
}