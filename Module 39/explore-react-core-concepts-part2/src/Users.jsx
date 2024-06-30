import { useEffect, useState } from "react"

export default function Users () {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUsers(data))
    }, []);
    return (
        <div>
            <h3>Users: {users.length}</h3>
        </div>
    )
}

/*
Steps of useing useEffect

1. declcare a state to hold the data
2. useEffect with callback and dependencies
3. fetch the data and update the state
*/