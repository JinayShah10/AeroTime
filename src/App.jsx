import { useState, useEffect } from 'react'
import './App.css'
import DigitalClock from './components/DigitalClock'
import Weather from './components/Weather'

function App() {
  const [date, setDate] = useState(new Date())
  const [is12Hour, setIs12Hour] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const timeString = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: is12Hour
  })

  const day = date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  function changeTime() {
    setIs12Hour((prev) => !prev)
  }

  return (
    <div className='main-container'>
      <h1 className="app-heading">Time and Weather at a Glance</h1>
      <div className="button_container">
        <button className="button" onClick={changeTime}>
          Switch to {is12Hour ? '24-Hour' : '12-Hour'}
        </button>

      </div>

      <DigitalClock time={timeString} day={day} />

      <Weather/>

    </div>
  )
}

export default App
