import React from 'react'
import ClockHead from './components/ClockHead'
import ClockDesc from './components/ClockDesc'
import CurrentTime from './components/CurrentTime'
function App() {

  return (
   <div className='bg-violet-400 w-screen h-screen flex flex-col justify-center items-center'>
    <ClockHead />
    <ClockDesc />
    <CurrentTime />
   </div>
  )
}

export default App
