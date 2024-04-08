import { useState } from "react";
import FileDisplay from "./components/FileDisplay"
import HomePage from "./components/HomePage";
import Header from "./components/Header";
function App() {

  const [file, setFile] = useState(null)
  const [audioStream, setAudioStream] = useState(null)

  const isAudioAvailable = file || audioStream

  function handleAudioReset(){
    setFile(null)
    setAudioStream(null)
  }

  return (
   <div className='flex flex-col max-w-[1000px] mx-auto w-full'>
    <section className='min-h-screen flex flex-col'>
      <Header/>
      {isAudioAvailable ? (
      <FileDisplay handleAudioReset={handleAudioReset} file={file} audioStream={setAudioStream}/>
      ) : (
      <HomePage setFile={setFile} setAudioStream={setAudioStream}/>
      )}
    </section>
    <footer>

    </footer>
   </div>
  )
}

export default App
