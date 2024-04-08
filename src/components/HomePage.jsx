
export default function HomePage(props) {

  const {setAudioStream, setFile} = props



  return (
    <main className='flex-1 p-4 flex flex-col gap-3 text-center sm:gap-4 md:gap-5
     justify-center pb-20'>
        <h1 className="font-semibold text-5xl sm:text-6xl md:text-7xl">
          <span className="text-blue-500 bold">Voice Scripter</span> AI
        </h1>
        <h3 className="font-medium md:text-lg">Record 
          <span className="text-blue-500">
            &rarr;
          </span>
          Transcibe
          <span className="text-blue-500">
            &rarr;
          </span>
          Translate
        </h3>
        <button className='flex px-4 py-3 rounded-xl bg-blue-100 shadow-xl items-center text-base justify-between gap-4 mx-auto w-72 max-w-full my-4'>
          <p>Record</p>
          <i className="fa-solid fa-microphone"></i>
        </button>
        <p className="text-base">
          Or 
          <label className="text-blue cursor-pointer hover:text-blue-500 duration-200"> Upload <input onChange={(e) => {
            const tempFile = e.target.files[0];
            setFile (tempFile)
          }} className='hidden' type='file' accept='.mp3,.wave'/> 
          </label>
          a mp3 file
        </p>
        <p>Free</p>
    </main>
  )
}
