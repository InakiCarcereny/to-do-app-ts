import { useState } from 'react'

import { Header } from './components/Header'
import { SectionTodos } from './components/SectionTodos'
import { Footer } from './components/Footer'

const toDos = [
  {
    id: 1,
    text: 'Learn React',
    completed: false
  },
  {
    id: 2,
    text: 'Learn Next.js',
    completed: true
  },
  {
    id: 3,
    text: 'Build an app',
    completed: false
  }
]

/*
  Implement a reducer that manages the state of the app.
  The reducer should handle the following actions:
  - ADD_TODO: Add a new todo to the state
  - DELETE_TODO: Delete a todo from the state
  - COMPLETE_TODO: Mark a todo as completed
  - CLEAR_COMPLETED: Remove completed todos from the state
  - DELETE_ALL: Delete all todos from the state

  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [...state, action.payload]
      case 'DELETE_TODO':
        return state.filter((todo) => todo.id !== action.payload)
      case 'COMPLETE_TODO':
        return state.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              completed: !todo.completed
            }
          }
          return todo
        })
      case 'CLEAR_COMPLETED':
        return state.filter((todo) => !todo.completed)
      case 'DELETE_ALL':
        return []
      default:
        throw new Error()
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)
*/

function App() {
  const [todos, setTodos] = useState(toDos)


  const handleAddTodo = (text: string) => {
    const newTodo = {
      id: todos.length + 1,
      text,
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  const onDeleteTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  const onCompleteTodo = (id: number, completed: boolean) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const onClearCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.completed)
    setTodos(newTodos)
  }

  const onDeleteAll = () => {
    setTodos([])
  }

  const onToggleAll = (completed: boolean) => {
    const newTodos = todos.map((todo) => ({
      ...todo,
      completed
    }))
    setTodos(newTodos)
  }

  return (
    <div className='flex items-center justify-center flex-col h-screen gap-4'>
      <Header 
      onAddTodo={handleAddTodo}
       />

      <SectionTodos 
      todos={todos} 
      onDeleteTodo={onDeleteTodo}
      onCompleteTodo={onCompleteTodo}
      />

      <Footer 
      onDeleteAll={onDeleteAll}
      onClearCompleted={onClearCompleted}
      onToggleAll={onToggleAll}
      />
    </div>
  )
}

export default App