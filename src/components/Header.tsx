export const Header: React.FC = () => {

  return (
    <>
    <h1 className='text-4xl font-semibold text-white'>Todo app TS</h1>
    <header>
      <form className='flex items-center justify-center gap-4'>
        <input type="text" 
        placeholder='What to do?' 
        className='w-[300px] p-2 border border-gray-300 rounded-md' />
        <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Add
        </button>
      </form>
    </header>
    </>
  )
}