import { useState } from "react";

// // counter that updates separately
// export default function MyApp() {
//   return (
//     <div>
//       <h1>Counters that update separately</h1>
//       {/* <MyButton />
//       <MyButton /> */}
//       <MyButton></MyButton>
//       <MyButton></MyButton>
//     </div>
//   );
// }

// function MyButton() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }

//   return (
//     <button onClick={handleClick}>
//       Clicked {count} times
//     </button>
//   );
// }

// counter that updates together
export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <br />
      <br />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

function MyButton({ count, onClick }) {
  return <button onClick={onClick}>Clicked {count} times</button>;
}
