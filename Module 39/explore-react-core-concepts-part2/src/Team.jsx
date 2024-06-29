import { useState } from "react"

export default function Team () {
    const [team, setTeam] = useState(11);

    const teamStyle = {
        border: '2px solid purple',
        
    }
    return (
        <div>
            <h3>Players: </h3>
        </div>
    )
}