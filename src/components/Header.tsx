import { useState } from "react"

interface Props {
  onAddTodo: (text: string) => void
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
  const [todo, setTodo] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onAddTodo(todo)
    setTodo('')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value)
  }

  return (
    <header className="flex flex-col gap-4 items-center justify-center">
      <h1 className="font-semibold text-white text-4xl">To Do List TS</h1>
      <form 
      onSubmit={handleSubmit}
      className="flex items-center gap-8">
        <input 
        className="w-[400px] border-2 border-gray-300 rounded-lg px-2 py-1 focus:outline-none" 
        type="text" 
        placeholder="Add a new task"
        onChange={handleChange}
        value={todo} />
        <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
        type="submit">Add</button>
      </form>
    </header>
  )
}