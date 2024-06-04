import { type TodoList } from "../types.d"

type Props = TodoList[number]

export const Todo: React.FC<Props> = ({ id, text, completed }) => {

  return (
    <li 
    key={id}
    className='flex items-center justify-between gap-2 p-2 border border-gray-300 rounded-md'>
      <div className="flex items-center gap-4">
        <input type="checkbox" 
        checked={completed} 
        className='h-4 w-4 rounded border-gray-300' />
        <span className='text-gray-700'>{text}</span>
      </div>
      <button type='button' 
      className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
        Delete
      </button>
    </li>
  )
}