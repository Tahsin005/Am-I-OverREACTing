import { useEffect, useState } from 'react'
import './App.css'
import Sunglass from './components/Sunglass/Sunglass'
import Watch from './components/Watch/Watch'

function App() {
  const [count, setCount] = useState(0)

  // const watches = [
  //   {id: 1, name: 'Apple Watch', price: 200},
  //   {id: 2, name: 'Samsu Watch', price: 200},
  //   {id: 3, name: 'MI Watch', price: 200},
  // ]
  const watchStyle = {
    gap: '10px',

  }

  const [watches, setWatches] = useState([]);

  // useEffect(() => {
  //   fetch('watches.json')
  //   .then((response) => response.json())
  //   .then((data) => setWatches(data))
  // }, []);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/segmentationfault6568/watches/main/watches.json')
    .then((response) => response.json())
    .then((data) => setWatches(data))
  }, []);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Sunglass></Sunglass>
      <div style={watchStyle}>
      {
        watches.map((watch) => <Watch watch={watch}></Watch>)
      }
      </div>
    </>
  )
}

export default App
