import './App.css'

function App() {
  function handleClick () {
    alert('Buton clicked');
  }

  const addToFive = (num) => {
    alert(num + 5);
  }
  return (
    <>
      <h3>React Core Concepts Part 2</h3>
      <button onClick={handleClick}>Click Me</button>
      <br />
      <br />
      <button onClick={() => {
        alert('I am an anonymous function');
      }}>Why Not Me?</button>
      <br />
      <br />
      {/*Bhejailla*/}
      <button onClick={() => addToFive(4)}>Add To Five</button>
    </>
  )
}

export default App
