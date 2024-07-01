import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShoppingList from './Products';
import MyApp from './MyApp';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <p>React from documentation</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <ShoppingList></ShoppingList>
      <MyApp></MyApp>
    </>
  )
}

export default App
