import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'
function App () {
  const actors = ['tahsin', 'ferdous', 'cubox', 'iambatman']
  const singers = [
    {id: 1, name: 'tahsin', age:22},
    {id: 2, name: 'ferdous', age:22},
    {id: 3, name: 'cubox', age:22},
    {id: 4, name: 'iambatman', age:22},
  ]

  return (
    <>
      
      <h1>Vite + React</h1>

      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }
      <Actor name="batman"></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }
      {/* <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Explore Core Concepts" isDone={false}></Todo> */}
      {/* <Device name="laptop" price="55"></Device>
      <Device name="mobile" price="12"></Device>
      <Person></Person>
      <Student name="tahsin" age="22"></Student>
      <Student ></Student>
      <Developer name="ferdous" age={22}></Developer>
      <Developer name="segmentation fault" age="99+"></Developer> */}
    </>
  )
}

function Device (props) {
  return <h2>This is a device: {props.name} price: {props.price}</h2>
}
function Person () {
  const age = 22;
  const person = {
    name: 'sakib',
    age: 12
  }
  return <h3>I am a {person.name} with age {age}</h3>
}

function Student ({name="N/A", age=10}) {
  return (
    <div className='student'>
      <h3>I am a student</h3>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  )
}

function Developer (props) {
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '1px solid yellow',
    borderRadius: '10px',
  }
  return (
    <div style={developerStyle}>
      <h3>I am a developer</h3>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  )
}
export default App
