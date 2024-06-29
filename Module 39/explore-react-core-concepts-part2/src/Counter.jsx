import { useState } from "react"

export default function Counter () {
    const [count,setCount] = useState(0);
    function handleAdd() {
        const newCount = count + 1;
        setCount(newCount);
    }

    function handleReduce () {
        const newCount = count - 1;
        setCount(newCount);
    }
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleAdd}>Add</button>
            <br />
            <br />
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}