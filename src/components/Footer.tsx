export const Footer: React.FC<{
  onDeleteAll: () => void
  onClearCompleted: () => void
  onToggleAll: (completed: boolean) => void
}> = ({ onDeleteAll, onClearCompleted, onToggleAll }) => {

  return (
    <footer className="flex items-center justify-center gap-4">
      <button 
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg"
      onClick={onDeleteAll}>
        Delete All
      </button>
      <button 
      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg"
      onClick={onClearCompleted}>
        Clear Completed
      </button>
      <button 
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
      onClick={onToggleAll}>
        Toggle All
      </button>
    </footer>
  )
}