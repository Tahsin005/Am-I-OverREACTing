import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      
      <h1>Vite + React</h1>
      <Person></Person>
      <Student></Student>
    </>
  )
}

function Person () {
  const age = 22;
  const person = {
    name: 'sakib',
    age: 12
  }
  return <h3>I am a {person.name} with age {age}</h3>
}

function Student () {
  return (
    <div>
      <h3>I am a student</h3>
      <p>Name: Tahsin</p>
      <p>Age: 12</p>
    </div>
  )
}
export default App
