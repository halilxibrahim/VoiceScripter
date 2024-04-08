
export default function FileDisplay(props) {
  const { handleAudioReset, file, audioStream} = 
  props

  return (
    <main className='flex-1 p-4 flex flex-col gap-3 text-center sm:gap-4 md:gap-5
     justify-center pb-20'>
      <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl">
          <span className="text-blue-500 bold">Your</span> File
        </h1>
    </main>
  )
}
