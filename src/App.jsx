import React from 'react'
import Time from './components/Time'

export default function App() {

    const timeObj = {
        hours: new Date(),
        minutes: new Date(),
        seconds: new Date()
    };
    
  return (
    <div className='App'>
        <Time time={timeObj}/>
    </div>
  )
}