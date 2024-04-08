
export default function Header() {
  return (
    <header className='flex items-center justify-between gap-4 p-4'>
        <h1 className="font-medium"><span className='text-blue-500 bold'>Voice Scripter</span> AI</h1>
        <button className='flex items-center gap-2 px-4 py-2 rounded-lg text-white bg-blue-400'>
          <p>New</p>
          <i className="fa-solid fa-plus"></i>
        </button>
    </header>
  )
}
