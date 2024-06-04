import { Header } from "./components/Header"
import { SectionTodos } from "./components/SectionTodos"
import { ListOfTodos } from "./mocks/ListOfTodos"

function App() {

  return (
    <div className='flex flex-col items-center justify-center h-screen gap-6'>
      <Header />
      <SectionTodos todos={ListOfTodos} />
    </div>
  )
}

export default App
